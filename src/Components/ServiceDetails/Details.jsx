import { Link, Navigate, useLoaderData } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { useContext, useEffect, useRef, useState } from 'react';
import { Usercontext } from './../Auth/AuthProvider';

const Details = () => {
    const { user, loader } = useContext(Usercontext);
    const product = useLoaderData();

    const [reviews, setreviews] = useState([])
    useEffect(() => {

        fetch(`https://techmaxa.vercel.app/reviews/1`)
            .then(res => res.json())
            .then(data => setreviews(data))
    }, [product?.id])


    console.log(product.id)

    if (loader) {

        return <>Wait...</>
    }



    console.log(reviews)



    const cartInfo = {
        product_id: product.id,
        prodName: product.title,
        price: product.price,
        email: user?.email,
        userName: user?.displayName
    }

    const handlecart = () => {

        fetch("https://techmaxa.vercel.app/carts", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cartInfo)
        })
            .then(res => res.json())
            .then(data => console.log(data));

        window.alert("Added to cart Successfully")

    }

    const handlereview = (event) => {
        event.preventDefault();
        const form = event.target;
        const message = form.message.value

        const reviewInfo = {
            product_id: product.id,
            prodName: product.title,
            date: new Date().toLocaleTimeString(),
            email: user?.email,
            userName: user?.displayName,
            image: user?.photoURL,
            message: message
        }


        fetch("https://techmaxa.vercel.app/doreview", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewInfo)
        })
            .then(res => res.json())
            .then(data => console.log(data));

        form.reset();
        window.alert("Review Added")

    }









    return (
        <>
            <div className='max-w-[90vw] flex flex-col mx-auto'>
                <section className=' my-14  justify-center bg-white  shadow-lg  lg:pt-24 pb-24 sm:pt-6 mt-3 py-8  min-w-full container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center'>
                    <div className='lg:w-1/2 sm:w-2/5'>
                        <img className='max-w-[95%] rounded-md' src={product.image} alt="" />
                    </div>



                    <div className='lg:w-1/2 pl-6 sm:w-2/5'>

                        <p class="uppercase anim-text sm:pt-6 lg:pt-0 tracking-loose w-full">Get 20% off for {product.title}</p>
                        <h1 class="my-4 lg:text-5xl sm:text-xl font-bold leading-tight">
                            {product.title}
                        </h1>
                        <p class="font-bold leading-tight sm:text-sm lg:text-xl mb-3">
                            <span className='line-through leading-normal text-gray-400'>${product.price + 50}</span> ${product.price}
                        </p>
                        <p class="leading-normal sm:text-sm lg:text-lg mb-3">
                            <ul className='list-disc list-inside'>
                                {
                                    product.description
                                }
                            </ul>
                        </p>
                        {
                            user ?
                                <button onClick={handlecart}
                                    class="mx-auto lg:mx-0 bg-indigo-600 text-white font-bold rounded-full my-1 py-2 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                    <FaShoppingCart className='inline-block mr-2' />Add to cart

                                </button>
                                :
                                <Link to='/signin'>
                                    <button
                                        class="mx-auto lg:mx-0 bg-indigo-600 text-white font-bold rounded-full my-1 py-2 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                        <FaShoppingCart className='inline-block mr-2' />Login to Buy

                                    </button>
                                </Link>
                        }


                    </div>
                </section>
                <section className='mb-14 bg-gray-50 pb-8 flex flex-col justify-center items-center'>
                    <h1 class="my-4 lg:text-2xl text-center sm:text-md font-bold leading-tight">
                        Buyer Reviews
                    </h1>

                    <div class="py-6 pl-6 bg-gray-50 px-6 grid grid-cols-1 lg:grid-cols-1 gap-3">

                        {
                            reviews.map(review => {

                                return <div>
                                    {
                                        review.product_id === product.id &&
                                        <div class="border-r min-w-[85vw] lg:min-w-[65vw] rounded-md shadow-md border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white p-4 leading-normal">

                                            <div class="flex items-center">
                                                <img class="w-10 h-10 rounded-full mr-4" src={review?.image} alt="no-img" />
                                                <div class="text-sm">
                                                    <p class="text-black leading-none">{review.userName}</p>
                                                    <p class="text-grey-dark">{review?.date}</p>
                                                </div>
                                            </div>

                                            <div class="mb-8">
                                                <div class="text-black font-bold text-xl mt-2">on-{review?.prodName}</div>
                                                <p class="text-grey-darker text-base">{review?.message}</p>
                                            </div>
                                        </div>
                                    }
                                </div>




                            })
                        }

                    </div>

                    <div class="container reviewsection py-5 px-6 mx-auto">

                        <section class="mb-32 text-gray-800">
                            <h1 class="my-4 pt-6 lg:text-2xl text-center sm:text-md font-bold leading-tight">
                                Leave a review
                            </h1>

                            <form onSubmit={handlereview} className='max-w-[95%] mx-auto'>

                                <div class="form-group mb-6">
                                    <textarea
                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        name='message'
                                        id="exampleFormControlTextarea13" rows="3" placeholder="Message"></textarea>
                                </div>
                                {
                                    user?.email ?
                                        <button type="submit"
                                            class="w-full px-6 py-2.5 bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out">
                                            Send
                                        </button>
                                        :
                                        <Link to='/signin'>
                                            <button type="submit"
                                                class="w-full px-6 py-2.5 bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out">
                                                Login to review
                                            </button>
                                        </Link>
                                }


                            </form>
                        </section>

                    </div>


                </section>

            </div>

        </>

    );
};

export default Details;