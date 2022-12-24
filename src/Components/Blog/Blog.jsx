import React from 'react';

const Blog = () => {
    return (
        <div>
            <div class="py-16 ">
                <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div class="mb-12 my-6 space-y-2 text-center">
                        <span class="block w-max mx-auto px-3 py-1.5 border border-green-200 rounded-full bg-green-100 text-green-600">Welcome to my Blog</span>
                        <h2 class="text-2xl text-cyan-900 font-bold md:text-4xl">Sharing is Caring</h2>
                        <p class="lg:w-6/12 lg:mx-auto">Welcome to my blog.Here you can explore various expectional concept of programming and web development</p>
                    </div>

                    <div class="grid gap-12 lg:grid-cols-2">
                        <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                            <img src="https://www.agiratech.com/wp-content/uploads/2018/01/Difference-between-SQL-and-NOSQL-2.png" alt="art cover" loading="lazy" width="1000" height="667" class="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl" />
                            <div class="sm:w-7/12 pl-0 p-5">
                                <div class="space-y-2">
                                    <div class="space-y-4">
                                        <h4 class="text-2xl font-semibold text-cyan-900">SQL vs NoSQL</h4>
                                        <p class="text-gray-600">Type – SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database...</p>
                                    </div>
                                    <a href="/blog" class="block w-max text-cyan-600">Read more</a>
                                </div>
                            </div>
                        </div>
                        <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                            <img src="https://www.upwork.com/mc/documents/111.png" alt="art cover" loading="lazy" width="1000" height="667" class="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl" />
                            <div class="sm:w-7/12 pl-0 p-5">
                                <div class="space-y-2">
                                    <div class="space-y-4">
                                        <h4 class="text-2xl font-semibold text-cyan-900">SQL databases are table-based on the other hand NoSQL</h4>
                                        <p class="text-gray-600">Structure – SQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores.This..</p>
                                    </div>
                                    <a href="/blog" class="block w-max text-cyan-600">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mb-12 space-y-2 text-center">

                    </div>

                    <div class="grid gap-12 lg:grid-cols-2">
                        <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                            <img src="https://miro.medium.com/max/1400/1*u3a-5xZDeudKrFGcxHzLew.png" alt="art cover" loading="lazy" width="1000" height="667" class="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl" />
                            <div class="sm:w-7/12 pl-0 p-5">
                                <div class="space-y-2">
                                    <div class="space-y-4">
                                        <h4 class="text-2xl font-semibold text-cyan-900">What is JWT, and how does it work?</h4>
                                        <p class="text-gray-600">JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP)...</p>
                                    </div>
                                    <a href="/blog" class="block w-max text-cyan-600">Read more</a>
                                </div>
                            </div>
                        </div>
                        <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                            <img src="https://www.calltutors.com/blog/wp-content/uploads/2022/02/JavaSript-vs-Node.Js.webp" alt="art cover" loading="lazy" width="1000" height="667" class="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl" />
                            <div class="sm:w-7/12 pl-0 p-5">
                                <div class="space-y-2">
                                    <div class="space-y-4">
                                        <h4 class="text-2xl font-semibold text-cyan-900">What is the difference between javascript and NodeJS?</h4>
                                        <p class="text-gray-600">JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed.Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language...</p>
                                    </div>
                                    <a href="/blog" class="block w-max text-cyan-600">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;