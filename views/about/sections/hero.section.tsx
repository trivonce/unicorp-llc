import Image from "next/image";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation()

  return (
    <section id="hero" className="pt-10 pb-[60px] container">
      <div className="flex justify-center">
        <span className="mx-auto inline-block">
          <h1 className="text-2xl font-semibold text-tp text-center">
            {t('about.title')}
          </h1>
          <img
            className="animate-bounce mx-auto mt-8"
            src="/assets/shapes/arrow.svg"
            alt="arrow"
          />
          <h1 className="text-center font-semibold text-fs60">
          {t('about.text')}
          </h1>
        </span>
      </div>

      <Image
        unoptimized
        src="/assets/temp/hero-temp-image.png"
        alt="hero"
        width={0}
        height={700}
        className="w-full h-[700px] mt-[60px]"
      />
    </section>
  );
};

export default HeroSection;
