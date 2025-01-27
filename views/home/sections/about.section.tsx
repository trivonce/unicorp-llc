"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";

const AboutSection = () => {
  const imagesRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const skewTween = useRef<GSAPTween | null>(null);
  const lastScrollTop = useRef<number>(0);

  useEffect(() => {
    const images = imagesRef.current?.querySelectorAll("img");
    let currentSkew = 0;

    const handleScroll = () => {
      if (!images) return;

      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

      const currentScrollTop = window.scrollY;
      const direction = currentScrollTop > lastScrollTop.current ? 1 : -1;
      lastScrollTop.current = currentScrollTop;

      const targetSkew = direction * 20;
      if (skewTween.current) skewTween.current.kill();
      skewTween.current = gsap.to({ skewY: currentSkew }, {
        skewY: targetSkew,
        duration: 1,
        ease: "power3.out",
        onUpdate: function () {
          currentSkew = this.targets()[0].skewY;
          images.forEach((image) => (image.style.transform = `skewY(${currentSkew}deg)`));
        },
      });

      scrollTimeoutRef.current = setTimeout(() => {
        if (skewTween.current) skewTween.current.kill();
        skewTween.current = gsap.to({ skewY: currentSkew }, {
          skewY: 0,
            duration: 1,
          ease: "elastic.out(1, 0.4)",
          onUpdate: function () {
            currentSkew = this.targets()[0].skewY;
            images.forEach((image) => (image.style.transform = `skewY(${currentSkew}deg)`));
          },
        });
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      if (skewTween.current) skewTween.current.kill();
    };
  }, []);

  return (
    <section id="about" className="container grid grid-cols-2 py-[60px] items-center gap-20">
      <div className="grid grid-cols-2 gap-10 items-center" ref={imagesRef}>
        <div className="flex flex-col items-end gap-10">
          <Image
            unoptimized
            className="w-[300px] h-[400px] rounded-[10px]"
            src="/assets/temp/about-1.png"
            alt="about"
            width={0}
            height={0}
          />
          <Image
            unoptimized
            className="w-[150px] h-[200px] rounded-[10px]"
            src="/assets/temp/about-3.png"
            alt="about"
            width={0}
            height={0}
          />
        </div>
        <div className="flex flex-col gap-10">
          <Image
            unoptimized
            className="w-[150px] h-[200px] rounded-[10px]"
            src="/assets/temp/about-2.png"
            alt="about"
            width={0}
            height={0}
          />
          <Image
            unoptimized
            className="w-[222px] h-[296px] rounded-[10px]"
            src="/assets/temp/about-4.png"
            alt="about"
            width={0}
            height={0}
          />
        </div>
      </div>

      <div>
        <h1 className="font-semibold text-2xl"><span className="text-brand mr-1">#</span>About</h1>
        <p className="text-tp-secondary text-xl mt-5">
          Tech Innovations Inc. is a leading IT company dedicated to providing
          cutting-edge solutions for businesses of all sizes. With a team of
          expert developers and engineers, we specialize in software
          development, cloud computing, and cybersecurity.
          <br /> <br />
          Our mission is to empower organizations by leveraging technology to
          enhance productivity and drive growth.
        </p>

        <Link className="mt-10 inline-block text-xl hover:underline" href="/about">
          More information...
        </Link>
      </div>
    </section>
  );
};

export default AboutSection;
