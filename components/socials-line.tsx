'use client';

import Icon from "./icon";

const SOCIALS = [
    {
        id: "telegram",
        link: "",
        color: "hover:!bg-[#0088CC]",
    },
    {
        id: "youtube",
        link: "",
        color: "hover:!bg-[#FF0000]",
    },
    {
        id: "twitter",
        link: "",
        color: "hover:!bg-[#1DA1F2]",
    },
    {
        id: "instagram",
        link: "",
        color: "hover:!bg-[#C13584]",
    },
    {
        id: "tiktok",
        link: "",
        color: "hover:!bg-[#00F2EA]",
    },
    {
        id: "facebook",
        link: "",
        color: "hover:!bg-[#1877F2]",
    },
    {
        id: "linkedin",
        link: "",
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
