import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Services = () => {
    // const [course, setCourse] = useState([])
    // useEffect(() => {
    //     fetch('https://techmaxa.vercel.app/services')
    //         .then(res => res.json())
    //         .then(data => setCourse(data))
    // }, [])

    const course = useLoaderData();
    console.log(course)


    return (
        <>
            <section class=" shadow-lg border-t py-16">
                <div class="container max-w-5xl mx-auto ">
                    <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                        We provide all <span className='text-indigo-600'>AI products</span> that blow your mind
                    </h2>
                    <div class="w-full mb-4">
                        <div class="h-1 mx-auto bg-indigo-600 w-64 opacity-25 my-0 py-0 rounded-t"></div>
                    </div>
                </div>

                <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">


                    <div className='grid lg:grid-cols-3 rounded-xl gap-7 sm:grid-cols-1 md:grid-cols-2 mx-auto'>
                        {
                            course.map(single => {

                                return <div className='mt-5'>
                                    <div className="card min-h-full course-card bg-base-100 shadow-xl">
                                        <img className='thumbnail hover:scale-105 duration-1000 rounded-md max-h-[276px] min-h-[276px]' src={single.image} alt="Shoes" />
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

                            })
                        }
                    </div>

                </div>

            </section>


            <section className='relative flex justify-center items-center'>
                <div><img src="https://thepixelcurve.com/html/techmax/techmax/assets/images/bg/counter-bg.jpg" alt="" /></div>
                <div className='absolute text-white'>
                    <h1 class="lg:text-6xl sm:text-sm font-bold leading-tight">
                        Make a great project with us
                    </h1>
                </div>
            </section>
        </>

    );
};

export default Services;