import { Button } from '@/components/ui/button';
import ProjectCard from '../components/ProjectCard';
import portfolio from '@/db/portfolio.json'
import { useTranslation } from 'react-i18next';

const ProjectsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="container py-[60px]">
      <h1 data-aos='fade-right' className="text-2xl font-semibold">
        <span className="text-brand mr-1">#</span>{t('common.ourProjects')}
      </h1>

      <div className="flex flex-col gap-[60px] mt-[60px]">
            {portfolio.slice(0, 3).map((project: any, index: number) => <ProjectCard key={project.id} {...project} index={index} />)}
      </div>

      <div className="flex justify-center mt-[60px]">
        <Button variant='outline'>{t('common.viewAllProjects')}</Button>
      </div>
    </section>
  );
};

export default ProjectsSection;
