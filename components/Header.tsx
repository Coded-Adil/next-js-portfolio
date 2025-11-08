import { assets } from "@/app/assets";
import Image from "next/image";
import { HeaderBtn } from "./Btn";

const Header = () => {
    return (
        <section className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 pt-[13.12rem] md:pt-0 ">
            <div>
                <Image src={assets.profile_img} alt="Profile Image" className="rounded-full w-32" />
            </div>
            <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo">Hi! I'm Adil Rahman <Image src={assets.hand_icon} alt="Hand Icon" className="w-6" /></h3>
            <h1 className="text-3xl sm:text-6xl lg:text-[50px] font-ovo">
                full stack web developer based in Bangladesh.
            </h1>
            <p className="max-w-2xl mx-auto font-ovo">
                I am a full stack web developer from Dhaka, Bangladesh, passionate about creating efficient and scalable web applications using modern technologies and best practices.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                {/* Buttons */}
                <HeaderBtn />
            </div>
        </section>
    );
};

export default Header;