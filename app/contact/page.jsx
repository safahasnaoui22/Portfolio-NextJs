"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone ",
        description: "+216 54 812 998"
    },
    {
        icon: <FaEnvelope />,
        title: "Email ",
        description: "dkhilisafadev@gmail.com"
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Address ",
        description: "Tunis, Monastir"
    },
];

const Page = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: ""
    });
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send("service_jnuxfzc", "template_necdftw", formData, "m84d5cMAGVozOkvZ0")
            .then((response) => {
                console.log("Email sent successfully:", response.status, response.text);
                setSuccessMessage("Message sent successfully!"); // Set success message
                setFormData({ firstname: "", lastname: "", email: "", phone: "", message: "" }); // Clear form
            }, (error) => {
                console.error("Failed to send email:", error);
                setSuccessMessage("Failed to send message. Please try again."); // Set error message
            });
    };

    return (
        <motion.section
            initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/** form */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={sendEmail}>
                            <h3 className="text-4xl text-accent">Let's Work Together</h3>
                            <p className="text-white/60">Please fill out the form below to get in touch.</p>

                            {/** input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="text" name="firstname" placeholder="Firstname" onChange={handleChange} value={formData.firstname} />
                                <Input type="text" name="lastname" placeholder="Lastname" onChange={handleChange} value={formData.lastname} />
                                <Input type="email" name="email" placeholder="Email address" onChange={handleChange} value={formData.email} />
                                <Input type="text" name="phone" placeholder="Phone number" onChange={handleChange} value={formData.phone} />
                            </div>

                            {/** textarea */}
                            <Textarea className="h-[200px]" name="message" placeholder="Type your message here..." onChange={handleChange} value={formData.message} />
                            <Button size="md" className="max-w-40" type="submit">Send Message</Button>

                            {/** Success/Error message */}
                            {successMessage && (
                                <div className="mt-4 text-green-500">{successMessage}</div>
                            )}
                        </form>
                    </div>
                    {/** info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-xl">{item.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Page;
