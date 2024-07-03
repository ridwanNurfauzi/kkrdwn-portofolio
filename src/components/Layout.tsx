import { initFlowbite } from 'flowbite'
import { Outlet } from "react-router-dom";
import menuIcon from '../assets/menu.svg'
import { useEffect } from 'react';
import Footer from './Footer';

export default function Layout() {
    useEffect(() => {
        initFlowbite();
    }, [])

    return (
        <>
            <nav className="bg-white bg-opacity-85 backdrop-blur-sm sticky w-full z-20 top-0 start-0 border-b border-gray-200">
                <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/icon.png" className="h-8" alt="Ridwn Nurfauzi" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap">Portofolio</span>
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <img className="h-8 w-8 text-gray-700" src={menuIcon} alt="Menu" />
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                            <li>
                                <a href="#home" className="block py-2 px-3 text-gray-800 rounded md:bg-transparent md:text-gray-800 hover:md:text-blue-600 md:p-0" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#biodata" className="block py-2 px-3 text-gray-800 rounded md:bg-transparent md:text-gray-800 hover:md:text-blue-600 md:p-0" aria-current="page">Biodata</a>
                            </li>
                            <li>
                                <a href="#experiences" className="block py-2 px-3 text-gray-800 rounded md:bg-transparent md:text-gray-800 hover:md:text-blue-600 md:p-0" aria-current="page">Pengalaman</a>
                            </li>
                            <li>
                                <a href="#projects" className="block py-2 px-3 text-gray-800 rounded md:bg-transparent md:text-gray-800 hover:md:text-blue-600 md:p-0" aria-current="page">Proyek</a>
                            </li>
                            <li>
                                <a href="#contact" className="block py-2 px-3 text-gray-800 rounded md:bg-transparent md:text-gray-800 hover:md:text-blue-600 md:p-0" aria-current="page">Kontak</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            <div>
                <Outlet />
            </div>
            <Footer/>
        </>
    )
}
