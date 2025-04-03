  "use client";

  import { useEffect, useRef } from "react";
  import Image from "next/image";
  import Link from "next/link";
  import { gsap } from "gsap";
import { useTranslation } from "react-i18next";

  const AboutSection = () => {
    const imagesRef = useRef<HTMLDivElement>(null);
    const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const skewTween = useRef<GSAPTween | null>(null);
    const lastScrollTop = useRef<number>(0);

    useEffect(() => {
      const images = [
        ...Array.from(imagesRef.current?.querySelectorAll("img") || []),
        ...Array.from(imagesRef.current?.querySelectorAll("video") || [])
      ];
      let currentSkew = 0;

      const handleScroll = () => {
        if (!images) return;

        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

        const currentScrollTop = window.scrollY;
        const direction = currentScrollTop > lastScrollTop.current ? 1 : -1;
        lastScrollTop.current = currentScrollTop;

        const targetSkew = direction * 20;
        if (skewTween.current) skewTween.current.kill();
        skewTween.current = gsap.to(
          { skewY: currentSkew },
          {
            skewY: targetSkew,
            duration: 1,
            ease: "power3.out",
            onUpdate: function () {
              currentSkew = this.targets()[0].skewY;
              images.forEach(
                (image) => (image.style.transform = `skewY(${currentSkew}deg)`)
              );
            },
          }
        );

        scrollTimeoutRef.current = setTimeout(() => {
          if (skewTween.current) skewTween.current.kill();
          skewTween.current = gsap.to(
            { skewY: currentSkew },
            {
              skewY: 0,
              duration: 1,
              ease: "elastic.out(1, 0.4)",
              onUpdate: function () {
                currentSkew = this.targets()[0].skewY;
                images.forEach(
                  (image) => (image.style.transform = `skewY(${currentSkew}deg)`)
                );
              },
            }
          );
        }, 100);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        if (skewTween.current) skewTween.current.kill();
      };
    }, []);

    const { t } = useTranslation();

    return (
      <section
        id="about"
        className="container grid grid-cols-1 md:grid-cols-2 py-[30px] md:py-[60px] items-center gap-10 md:gap-20"
      >
        <div
          data-aos="fade-in"
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10 items-center"
          ref={imagesRef}
        >
          <div className="flex flex-col items-center sm:items-end gap-5 sm:gap-10">
            <video
              className="w-full sm:w-[300px] h-[250px] sm:h-[400px] rounded-[10px] object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/assets/videos/office_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Image
              unoptimized
              className="w-full sm:w-[150px] h-[200px] rounded-[10px]"
              src="/assets/images/about/office_3.png"
              alt="about"
              width={0}
              height={0}
            />
          </div>
          <div className="flex flex-col gap-5 sm:gap-10">
            <Image
              unoptimized
              className="w-full sm:w-[150px] h-[200px] rounded-[10px]"
              src="/assets/images/about/office_1.jpg"
              alt="about"
              width={0}
              height={0}
            />
            <Image
              unoptimized
              className="w-full sm:w-[222px] h-[296px] rounded-[10px]"
              src="/assets/images/about/office_2.png"
              alt="about"
              width={0}
              height={0}
            />
          </div>
        </div>

        <div className="mt-10 md:mt-0">
          <h1 data-aos="fade-left" className="font-semibold text-xl md:text-2xl w-fit">
            <span className="text-brand mr-1">#</span>{t("home.about.title")}
          </h1>
          <p data-aos="fade-up" className="text-tp-secondary text-base md:text-xl mt-5">
            {t("home.about.text1")}
            
            <br /><br />
            {t("home.about.text2")}
            
            <br /> <br />
            {t("home.about.text3")}
          </p>

          <Link
            id="link"
            data-aos="fade-up"
            className="mt-5 md:mt-10 inline-block text-base md:text-xl hover:underline"
            href="/about"
          >
            {t("home.about.link")}
          </Link>
        </div>
      </section>
    );
  };

  export default AboutSection;
