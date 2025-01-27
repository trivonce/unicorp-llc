// sections
import HeroSection from "./sections/hero.section"
import AboutSection from "./sections/about.section"
import ServicesSection from "./sections/services.section"
import ProjectsSection from "./sections/projects.section"
import StacksSection from "./sections/stacks.section"
import ContactSection from "./sections/contact.section"

const Home = () => {
    return <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <StacksSection />
        <ContactSection />
    </main>
}

export default Home