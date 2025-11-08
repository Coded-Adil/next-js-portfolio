"use client";
import Image from "next/image";
import { assets } from "@/app/assets";

export const HeaderBtn = () => {
    return (
        <>
            <a href="#contact" className="px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2">Contact me <Image src={assets.right_arrow_white} alt="Arrow Icon" className="w-4" /></a>
            <a href="https://drive.google.com/file/d/1aqDUKipt3PnilLaxJvIE-5ca-wRt2ZvJ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2">Resume <Image src={assets.download_icon} alt="Download Icon" className="w-4" /></a>
        </>
    );
};

export const ShowMoreBtn = () => {
    return (
        <>
            <button type="button" className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500">Show More <Image src={assets.right_arrow_bold} alt="Right Arrow" className="w-4" /></button>
        </>
    );
}