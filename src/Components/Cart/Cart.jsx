import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Usercontext } from './../Auth/AuthProvider';

const Cart = () => {
    const { loader, user } = useContext(Usercontext)




    const [orders, setorders] = useState([])
    console.log(user)

    const url = `https://techmaxa.vercel.app/cart?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setorders(data))

    }, [user?.email])



    return (
        <div>


            <section class="antialiased bg-gray-100 text-gray-600 h-screen px-4">
                <div class="flex flex-col justify-center h-full">

                    <div class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                        <header class="px-5 py-4 border-b border-gray-100">
                            <h2 class="font-semibold text-gray-800">Added Products</h2>
                        </header>
                        <div class="p-3">
                            <div class="overflow-x-auto">
                                <table class="table-auto w-full">
                                    <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                        <tr>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-left">User Name</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-left">Email</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-left">Price</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-center">Product Name</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-sm divide-y divide-gray-100">
                                        {
                                            orders.map(order => {
                                                return <tr>
                                                    <td class="p-2 whitespace-nowrap">
                                                        <div class="flex items-center">
                                                            <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src={user?.photoURL} width="40" height="40" alt="no-photos" /></div>
                                                            <div class="font-medium text-gray-800">{order.userName}</div>
                                                        </div>
                                                    </td>
                                                    <td class="p-2 whitespace-nowrap">
                                                        <div class="text-left">{order.email}</div>
                                                    </td>
                                                    <td class="p-2 whitespace-nowrap">
                                                        <div class="text-left font-medium text-green-500">${order.price}</div>
                                                    </td>
                                                    <td class="p-2 whitespace-nowrap">
                                                        <div class="text-lg text-center">{order.prodName}</div>
                                                    </td>
                                                </tr>
                                            })
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Cart;