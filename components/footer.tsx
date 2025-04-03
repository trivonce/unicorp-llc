"use client";

import Link from "next/link";
import SocialsLine from "./socials-line";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useTranslation } from "react-i18next";

const links = [
  {
    tk: "privacyPolicy",
    title: "Private Policy",
    link: "/private-policy",
  },
  {
    tk: "termsAndConditions",
    title: "Terms & Conditions",
    link: "/terms-and-conditions",
  },
  {
    tk: "cookiePolicy",
    title: "Cookie Policy",
    link: "/cookie-policy",
  },
  {
    tk: "license",
    title: "License",
    link: "/licence",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="py-10 bg-footer text-footer-foreground">
      <div className="container flex flex-col md:flex-row gap-10 md:gap-20 justify-between rounded-lg">
        <div className="flex flex-col justify-between gap-5">
          <div>
            <Link href="/">
              <img src="/assets/logo/unicorp-white.svg" alt="logo" className="w-32 md:w-auto" />
            </Link>
            <p className="mt-2 text-[#878787] text-xs md:text-sm">
              OOO UNICORP - {currentYear}
            </p>
          </div>
          <SocialsLine />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-20">
          <div>
            <h1 className="text-lg md:text-2xl font-medium mb-2.5 text-white">
              {t("footer.navigation.title")}
            </h1>
            <div className="flex flex-col gap-2.5">
              {links.map((link) => (
                <Link
                  className="text-sm md:text-base font-normal"
                  href={link.link}
                  key={link.tk}
                >
                  {t(`footer.navigation.${link.tk}`)}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-lg md:text-2xl font-medium mb-2.5 text-white">
              {t("common.contact")}
            </h1>
            <div className="flex flex-col gap-2.5">
              <a className="hover:underline text-sm md:text-base" href="tel:+998771516633">
                +998 77 151 66 33
              </a>
              <a href="mailto:support@unicorp.uz" className="hover:underline text-sm md:text-base">
                support@unicorp.uz
              </a>
            </div>
          </div>

          <div>
            <h1 className="text-lg md:text-2xl font-medium mb-2.5 text-white">
              {t("footer.location")}
            </h1>
            <div className="flex flex-col gap-2.5">
              <HoverCard>
                <HoverCardTrigger
                  target="blank"
                  className="hover:underline hover:bg-background duration-200 box-border px-2 rounded-md -ml-2 text-sm md:text-base"
                  href="https://yandex.uz/maps/-/CHusNZii"
                >
                  Tashkent. Mirzo Ulugbek. Qorabuloq 24
                </HoverCardTrigger>
                <HoverCardContent className="p-1 w-[300px] md:w-[400px]" side="top">
                  <iframe
                    className="map w-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d286.03610957368716!2d69.30911394345924!3d41.32516498050612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4c24e40bf9d%3A0x4bcace3d85526e7f!2sKorabulok%20Ko&#39;chasi%2024%2C%20%D0%A2%D0%BEshkent%2C%20Toshkent%2C%20O%CA%BBzbekiston!5e0!3m2!1suz!2s!4v1740573960799!5m2!1suz!2s"
                    width="100%"
                    height="200"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
