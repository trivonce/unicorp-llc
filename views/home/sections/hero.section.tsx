
"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";

const HeroSection = () => {
  const { t, i18n } = useTranslation();

  return (
    <section id="hero" className="pt-10 pb-[60px] container">
      <div className="flex justify-center">
        <span className="mx-auto inline-block">
          <h1 data-aos='fade-down' className="text-2xl font-semibold text-tp text-center w-fit mx-auto">{t('home.hero.title')}</h1>
          <img data-aos='fade-in'
            className="animate-bounce mx-auto mt-8 min-h-[104px]"
            src="/assets/shapes/arrow.svg"
            alt="arrow"
          />
          <h1 id='text' data-aos='fade-up' className="text-center font-semibold text-fs60">{t("home.hero.text")}</h1>
        </span>
      </div>

      <Image data-aos-delay='200' data-aos='fade-up' unoptimized src='/assets/temp/hero-temp-image.png' alt="hero" width={0} height={700} className="w-full h-[700px] mt-[60px]" />
    </section>
  );
};

export default HeroSection;
