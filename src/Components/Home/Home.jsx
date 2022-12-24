import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './Home.css'

const Home = () => {

    // const [course, setCourse] = useState([])
    // useEffect(() => {
    //     fetch('https://techmaxa.vercel.app/services')
    //         .then(res => res.json())
    //         .then(data => setCourse(data))
    // }, [])

    const course = useLoaderData();
    console.log(course)


    let a = 0;

    return (
        <>
            <div className='gradient text-white'>
                <div class="pt-24">
                    <div class="container header-section px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">

                        <div class="flex header-text flex-col md:w-2/5 w-1/2 justify-center items-start text-center md:text-left">
                            <p class="uppercase tracking-loose w-full">What business are you?</p>
                            <h1 class="my-4 lg:text-5xl sm:text-xl font-bold leading-tight">
                                Best platform for AI technolgy products.
                            </h1>
                            <p class="leading-normal sm:text-sm lg:text-2xl mb-8">
                                We provide the most responsive and functional IT design for companies and businesses worldwide.
                            </p>
                            <Link to='/services'>
                                <button
                                    class="mx-auto lg:mx-0 bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                    View all products
                                </button></Link>
                        </div>

                        <div class=" header-img   w-1/2 text-center">
                            <img alt='' class="header-img, md:w-4/5 z-50" src="https://thepixelcurve.com/html/techmax/techmax/assets/images/hero-6.png" />
                        </div>
                    </div>
                </div>

            </div>


            <section class=" shadow-lg border-t py-8">
                <div class="container max-w-5xl mx-auto m-8">
                    <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                        Produtcs
                    </h2>
                    <div class="w-full mb-4">
                        <div class="h-1 mx-auto bg-indigo-600 w-64 opacity-25 my-0 py-0 rounded-t"></div>
                    </div>
                </div>

                <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">


                    <div className='grid lg:grid-cols-3 rounded-xl gap-5 sm:grid-cols-1 md:grid-cols-2 mx-auto'>
                        {
                            course.map(single => {
                                a += 1;
                                if (a <= 3) {
                                    return <div className=''>
                                        <div className="card min-h-full course-card bg-base-100 shadow-xl">
                                            <img className='hover:scale-105 duration-1000 min-h-[276px] max-h-[276px]  thumbnail' src={single.image} alt="Shoes" />
                                            <div className="card-body">
                                                <h2 className="card-title">{single.title}</h2>
                                                <p className='h-20 overflow-y-hidden'>{single.description}</p>
                                                <strong><del>${single.price + 50}</del> ${single.price}</strong>
                                                <div className="card-actions justify-center">
                                                    <Link to={`/services/${single.id}`}><button className="enroll btn btn-primary bg-indigo-600 hover:scale-105 duration-300 ease-in-out">More Details</button></Link>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                }


                            })
                        }
                    </div>




                </div>
                <Link to='/services'>
                    <h2 class="w-full mt-12 cursor-pointer text-2xl font-bold leading-tight text-center text-gray-800 hover:scale-110 duration-300 ease-in-out">
                        View all Products
                    </h2>
                </Link>
                <div class="h-1 mx-auto bg-indigo-600 w-48 opacity-25 my-0 py-0 rounded-t"></div>
            </section>

            <section className='lg:pt-24 sm:pt-6 mt-3 py-8 shadow-lg min-w-full container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center'>
                <div className='lg:w-1/2 sm:w-2/5'>
                    <img className='anim lg:max-w-xl' src="https://thepixelcurve.com/html/techmax/techmax/assets/images/overview-img-1.png" alt="" />
                </div>



                <div className='lg:w-1/2 sm:w-2/5'>

                    <p class="uppercase anim-text sm:pt-6 lg:pt-0 tracking-loose w-full">Premium Products</p>
                    <h1 class="my-4 lg:text-5xl sm:text-xl font-bold leading-tight">
                        Next generation platform for best AI products
                    </h1>
                    <p class="leading-normal sm:text-sm lg:text-2xl mb-8">
                        <ul className='list-disc list-inside'>
                            <li>We always focus on technical excellence</li>
                            <li>Wherever you’re going, we bring ideas and excitement</li>
                            <li>We’re consultants, guides, and partners for brands</li>
                            <li>We believe in hard work</li>
                        </ul>
                    </p>
                    <Link to='/services'>
                        <button
                            class="mx-auto lg:mx-0 bg-indigo-600 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                            View all products

                        </button>
                    </Link>

                </div>
            </section>
            <section className='relative flex justify-center items-center'>
                <div><img src="https://thepixelcurve.com/html/techmax/techmax/assets/images/bg/cta-5.jpg" alt="" /></div>
                <div className='absolute text-white'>
                    <h1 class="lg:text-6xl sm:text-sm font-bold leading-tight">
                        Let's make together.
                    </h1>
                </div>
            </section>

        </>
    );
};

export default Home;