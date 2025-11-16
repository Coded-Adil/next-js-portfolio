"use client";

import { assets } from "@/app/assets";
import Image from "next/image";
import { useState } from "react";

interface FormSubmissionResponse {
    success: boolean;
    message?: string;
}

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        
        // Store form reference immediately
        const form = event.currentTarget;
        setResult("Sending....");
        const formData = new FormData(form);

        formData.append("access_key", "9f095bb3-5841-44a6-8aa3-48048e64b192");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data: FormSubmissionResponse = await response.json();

            if (data.success) {
                setResult("Form Submitted Successfully");
                form.reset();
            } else {
                setResult(data.message || "Error submitting form");
            }
        } catch (error) {
            console.error("Submission error:", error);
            setResult("Failed to submit form. Please try again.");
        }
};

    return (
        <section className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('../public/project/footer-bg-color.png')] bg-no-repeat bg-center bg-size-[90%_auto]" id="contact">
            <h4 className="text-center mb-2 text-lg font-ovo">Connect with me</h4>
            <h2 className="text-center text-5xl font-ovo">Get in touch</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
                I'd love to hear from you! If you have any questions, comments or
                feedback, please use the form below.
            </p>

            <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
                <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
                    <input name="name" className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white" type="text" placeholder="Enter Your Name" required />
                    <input name="email" className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white" type="email" placeholder="Enter Your Email" required />
                </div>
                <textarea name="message" rows={6} placeholder="Enter Your Message" required
                    className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"></textarea>
                <button type="submit" className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500">
                    Submit Now <Image src={assets.right_arrow_white} alt="Right Arrow" className="w-4" />
                </button>

                <p className="mt-4">{result}</p>
            </form>
        </section>
    );
};

export default Contact;