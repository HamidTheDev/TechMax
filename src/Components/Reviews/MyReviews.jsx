import React, { useContext, useEffect, useState } from 'react';
import { Usercontext } from '../Auth/AuthProvider';

const MyReviews = () => {

    const { user } = useContext(Usercontext);
    const [reviews, setreviews] = useState([])
    console.log(user)



    useEffect(() => {
        fetch(`https://techmaxa.vercel.app/myreviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setreviews(data))
    }, [user?.email])

    console.log(reviews)





    return (
        <div>
            <section className='mb-14 bg-gray-50 pb-8 w-full'>
                <h1 class="my-4 lg:text-2xl text-center sm:text-md font-bold leading-tight">
                    Your Reviews
                </h1>

                <div class="w-full py-6 pl-6 bg-gray-50 px-6 grid lg:grid-cols-2  sm:grid-cols-1 gap-3">
                    {
                        reviews.map(review => {
                            return <div class="border-r  rounded-md shadow-md border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white p-4 flex flex-col justify-between leading-normal">

                                <div class="flex items-center">
                                    <img class="w-10 h-10 rounded-full mr-4" src={review?.image} alt="no-photos" />
                                    <div class="text-sm">
                                        <p class="text-black leading-none">{review?.userName}</p>
                                        <p class="text-grey-dark">{review?.date}</p>
                                    </div>
                                </div>

                                <div class="mb-8">
                                    <div class="text-black font-bold text-xl mt-2">on-{review?.prodName}</div>
                                    <p class="text-grey-darker text-base">{review?.message}</p>
                                </div>
                            </div>
                        })
                    }


                </div>


            </section>
        </div>
    );
};

export default MyReviews;