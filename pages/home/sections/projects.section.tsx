import { Button } from '@/components/ui/button';
import ProjectCard from '../components/ProjectCard';

const PROJECTS = [
    {
        id: 1,
        title: 'Accordion - Production company',
        tags: ['Web design', 'UI/UX', 'Development', 'Web design', 'UI/UX', 'Development'],
        image: 'https://placehold.co/400x600',
        description: 'Accordion Productions is a dynamic company specializing in high-quality media production. We bring your creative visions to life through innovative storytelling and cutting-edge technology.',
        slug: 'accordion-productions'
    },
    {
        id: 2,
        title: 'Accordion - Production company',
        tags: ['Web design', 'UI/UX', 'Development', 'Web design', 'UI/UX', 'Development'],
        image: 'https://placehold.co/400x600',
        description: 'Accordion Productions is a dynamic company specializing in high-quality media production. We bring your creative visions to life through innovative storytelling and cutting-edge technology.',
        slug: 'accordion-productions'
    }
]

const ProjectsSection = () => {
  return (
    <section id="projects" className="container py-[60px]">
      <h1 className="text-2xl font-semibold">
        <span className="text-brand mr-1">#</span>Our Projects
      </h1>

      <div className="flex flex-col gap-[60px] mt-[60px]">
            {PROJECTS.map((project, index) => <ProjectCard key={project.id} {...project} index={index} />)}
      </div>

      <div className="flex justify-center mt-[60px]">
        <Button variant='outline'>View All Projects</Button>
      </div>
    </section>
  );
};

export default ProjectsSection;
