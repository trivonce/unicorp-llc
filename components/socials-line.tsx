'use client';

import Icon from "./icon";

const SOCIALS = [
    {
        id: "telegram",
        link: "https://t.me/unicorpuz",
        color: "hover:!bg-[#0088CC]",
    },
    {
        id: "instagram",
        link: "https://www.instagram.com/unicorp.uz",
        color: "hover:!bg-[#C13584]",
    },
    {
        id: "linkedin",
        link: "https://www.linkedin.com/company/unicorpllc",
        color: "hover:!bg-[#0e76a8]",
    },
];

const SocialsLine = () => {
    return (
        <div className="gap-5 flex items-center">
            {SOCIALS.map((social) => (
                <a
                    key={social.id}
                    href={social.link}
                    target="_blank"
                >
                    <Icon
                    color="#BDBDBD"
                        className={`${social.color}`}
                        icon={social.id}
                    />
                </a>
            ))}
        </div>
    );
};

export default SocialsLine;
