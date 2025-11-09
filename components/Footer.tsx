import { assets } from "@/app/assets";
import Image from "next/image";

const Footer = () => {
    return (
        <div className="mt-20">
            <div className="text-center">
                <Image src={assets.logo} alt="logo" className="w-36 mx-auto mb-2" />
                <div className="w-max flex items-center gap-2 mx-auto">
                    <Image src={assets.mail_icon} alt="Email" className="w-6" />
                    itsadil2022@gmail.com
                </div>
            </div>

            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
                <p>© 2025 - All right reserved by Adil Rahman.</p>
                <ul className="flex items-center justify-center gap-10 mt-4 sm:mt-0">
                    <li>
                        <a href="https://github.com/Coded-Adil" target="_blank">Github</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/coded-adil" target="_blank">LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/_.adil_rahman._" target="_blank">Instagram</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;