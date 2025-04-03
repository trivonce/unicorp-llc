import Image from "next/image";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation()

  return (
    <section id="hero" className="pt-6 md:pt-10 pb-[30px] md:pb-[60px] container px-4 md:px-6">
      <div className="flex justify-center">
        <span className="mx-auto inline-block">
          <h1 className="text-xl md:text-2xl font-semibold text-tp text-center">
            {t('about.title')}
          </h1>
          <img
            className="animate-bounce mx-auto mt-4 md:mt-8"
            src="/assets/shapes/arrow.svg"
            alt="arrow"
          />
          <h1 className="text-center font-semibold text-3xl md:text-4xl lg:text-fs60">
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
        className="w-full h-[300px] md:h-[500px] lg:h-[700px] mt-6 md:mt-[60px] object-cover"
      />
    </section>
  );
};

export default HeroSection;
