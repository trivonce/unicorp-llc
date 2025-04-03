import { Button } from '@/components/ui/button';
import ProjectCard from '../components/ProjectCard';
import portfolio from '@/db/portfolio.json'
import { useTranslation } from 'react-i18next';

const ProjectsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="container px-4 md:px-6 py-[30px] md:py-[60px]">
      <h1 data-aos='fade-right' className="text-xl md:text-2xl font-semibold">
        <span className="text-brand mr-1">#</span>{t('common.ourProjects')}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-6 md:mt-8 lg:mt-10">
        {portfolio.slice(0, 3).map((project: any, index: number) => (
          <ProjectCard key={project.id} {...project} index={index} />
        ))}
      </div>

      <div className="flex justify-center mt-8 md:mt-12">
        <Button variant='outline' className="w-full md:w-auto">{t('common.viewAllProjects')}</Button>
      </div>
    </section>
  );
};

export default ProjectsSection;
