import Link from "next/link";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/safahasnaoui22/" }, 
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/safa-dkhili-225112212/" },
   
    { icon: <FaInstagram />, path: "https://www.instagram.com/dkhilisafa98/" },
    { icon: <FaFacebookF />, path: "https://www.facebook.com/safa.dkhili.12" },
    { icon: <FaWhatsapp />, path: "https://wa.me/21654812998" } // WhatsApp link can be formatted as needed
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
}

export default Social;
