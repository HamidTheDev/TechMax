import { signOut } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Resources/logo-white.png'
import { Usercontext } from '../Auth/AuthProvider';
import './Header.css'
const Header = () => {


    const { user, auth, loader } = useContext(Usercontext)


    if (loader) {
        return <>loading</>
    }


    const handleSignout = () => {
        signOut(auth)
            .then(() => {
                console.log("user Signout")
            }).catch(() => {
                console.log("user doke bose ache")
            })
    }




    return (
        <div className='header' >
            <div className="navbar text-xl text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost  lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-900 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/services'>Products</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            {
                                user?.uid ?
                                    <>
                                        <Link to='/myreview'><li className='text-sm pl-4 py-2'>My Review</li></Link>
                                        <Link to='/cart'><li className='text-sm pl-4'>My Cart</li></Link>
                                        <li className='text-sm pl-4 py-3' onClick={handleSignout}>Logout</li>
                                    </>
                                    :
                                    <li><Link to='/signup'>Signup</Link></li>

                            }
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl"><img alt='' src={logo}></img></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/services'>Products</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        {
                            user?.uid ?
                                <li>
                                    <Link to='/myreview'><li>My Review</li></Link>
                                    <Link to='/cart'><li>My Cart</li></Link>
                                    <li onClick={handleSignout}>Logout</li>
                                </li>
                                :
                                <li><Link to='/signup'>Signup</Link></li>

                        }
                    </ul>
                </div>

                <div className="navbar-end">

                    {
                        user?.uid ?
                            <div className="avatar">
                                <div className="w-11 mx-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img alt='' src={user?.photoURL} />

                                </div>
                            </div>
                            :
                            <></>

                    }

                </div>

            </div>
        </div>
    );
};

export default Header;