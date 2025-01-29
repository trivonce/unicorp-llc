import ProjectCard from "../home/components/ProjectCard";
import portfolio from "@/db/portfolio.json"

const PortfolioView = () => {

  return (
    <main>
      <section id="hero" className="pt-10 pb-[60px] container">
        <div className="flex justify-center">
          <span className="mx-auto inline-block">
            <h1 className="text-2xl font-semibold text-tp text-center uppercase">
              Portfolio
            </h1>
            <img
              className="animate-bounce mx-auto mt-8"
              src="/assets/shapes/arrow.svg"
              alt="arrow"
            />
            <h1 className="text-center font-semibold text-fs60">
              Transforming your vision into reality with innovative technology.
            </h1>
          </span>
        </div>
      </section>

      <section className="container py-[60px]">
      <h1 className="text-2xl font-semibold">
          <span className="text-brand mr-1">#</span>Projects
        </h1>


        <div className="flex flex-col gap-[60px] mt-10">
            {portfolio.map((project, index) => <ProjectCard key={index} {...project} index={index} />)}
        </div>
      </section>
    </main>
  );
};

export default PortfolioView;
