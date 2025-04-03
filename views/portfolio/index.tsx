"use client";

import { useTranslation } from "react-i18next";
import ProjectCard from "../home/components/ProjectCard";
import portfolio from "@/db/portfolio.json";

const PortfolioView = () => {
  const { t } = useTranslation();

  return (
    <main>
      <section id="hero" className="pt-6 md:pt-10 pb-[30px] md:pb-[60px] container px-4 md:px-6">
        <div className="flex justify-center">
          <span className="mx-auto inline-block">
            <h1 className="text-xl md:text-2xl font-semibold text-tp text-center uppercase">
              {t("portfolio.title")}
            </h1>
            <img
              className="animate-bounce mx-auto mt-4 md:mt-8"
              src="/assets/shapes/arrow.svg"
              alt="arrow"
            />
            <h1 className="text-center font-semibold text-3xl md:text-4xl lg:text-fs60">
              {t("portfolio.text")}
            </h1>
          </span>
        </div>
      </section>

      <section className="container px-4 md:px-6 py-[30px] md:py-[60px]">
        <h1 className="text-xl md:text-2xl font-semibold">
          <span className="text-brand mr-1">#</span> {t("portfolio.projects")}
        </h1>

        <div className="flex flex-col gap-6 md:gap-[60px] mt-6 md:mt-10">
          {portfolio.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default PortfolioView;
