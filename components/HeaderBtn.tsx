"use client";
import Image from "next/image";
import { assets } from "@/app/assets";

const HeaderBtn = () => {
    return (
        <>
            <a href="#contact" className="px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2">Contact me <Image src={assets.right_arrow_white} alt="Arrow Icon" className="w-4" /></a>
            <a href="https://drive.google.com/file/d/1aqDUKipt3PnilLaxJvIE-5ca-wRt2ZvJ/view?usp=sharing" download className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2">Resume <Image src={assets.download_icon} alt="Download Icon" className="w-4" /></a>
        </>
    );
};

export default HeaderBtn;