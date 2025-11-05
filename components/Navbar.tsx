'use client';
import Image from "next/image";
import Link from "next/link";
import logo from "../public/assets/logo.png";
import arrow_icon from "../public/assets/arrow-icon.png";
import header_bg_color from "../public/assets/header-bg-color.png";
import moon_icon from "../public/assets/moon_icon.png";
import menu_black from "../public/assets/menu-black.png";

const Navbar = () => {
    return (
        <>
            <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
                <Image src={header_bg_color} alt="Header Background" className="w-full" />
            </div>
            <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
                {/* Logo */}
                <Link href="#top" className="text-2xl font-bold">
                    <Image src={logo} alt="Logo" className="w-26 mr-14 cursor-pointer" />
                </Link>

                {/* Navigation Links */}
                <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50">
                    <li><a href="#top" className="font-ovo">Home</a></li>
                    <li><a href="#about" className="font-ovo">About me</a></li>
                    <li><a href="#services" className="font-ovo">Services</a></li>
                    <li><a href="#work" className="font-ovo">My Work</a></li>
                    <li><a href="#contact" className="font-ovo">Contact</a></li>
                </ul>

                <div className="flex items-center gap-4">
                    <button>
                        <Image src={moon_icon} alt="Menu Icon" className="w-6" />
                    </button>

                    <a href="#contact" className="hidden lg:flex items-center gap-3 px-10 py-2.5 font-ovo border border-gray-500 rounded-full ml-4">Contact <Image src={arrow_icon} alt="Arrow Icon" className="w-3 cursor-pointer" /></a>

                    <button className="block md:hidden ml-3">
                        <Image src={menu_black} alt="Menu Icon" className="w-6" />
                    </button>
                </div>

                {/* Mobile Menu */}
            </nav> 
        </>
    );
};

export default Navbar;