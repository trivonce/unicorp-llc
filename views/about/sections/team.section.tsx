import { useTranslation } from "react-i18next"
import TeamCard from "../components/team-card"

// images

const TEAM = [
    {
        id: 1,
        full_name: 'Ulugbek Temirov',
        speciality: 'Frontend Developer',
        image: '/assets/images/team/ulugbek.webp',
        socials: {
            instagram: 'https://instagram.com/just_ulugbek',
            telegram: 'https://t.me/TemirovUlugbek',
            linkedin: 'https://linkedin.com/in/ulugbektemirov',
        }
    },
    {
        id: 2,
        full_name: 'Behruzbek Dilmurodov',
        speciality: 'UI/UX designer',
        image: '/assets/images/team/behruzbek.webp',
        socials: {
            instagram: 'https://instagram.com/just_ulugbek',
            telegram: 'https://t.me/TemirovUlugbek',
            linkedin: 'https://linkedin.com/in/ulugbektemirov',
        }
    },
    {
        id: 3,
        full_name: 'Fayzulloh Abdullayev',
        speciality: 'Project manager',
        image: '/assets/images/team/fayzulloh.webp',
        socials: {
            instagram: 'https://instagram.com/just_ulugbek',
            telegram: 'https://t.me/TemirovUlugbek',
            linkedin: 'https://linkedin.com/in/ulugbektemirov',
        }
    },
    {
        id: 4,
        full_name: 'Abdusamad Malikov',
        speciality: 'Backend developer',
        image: '/assets/images/team/unknown.webp',
        socials: {
            instagram: 'https://instagram.com/just_ulugbek',
            telegram: 'https://t.me/TemirovUlugbek',
            linkedin: 'https://linkedin.com/in/ulugbektemirov',
        }
    },
    {
        id: 5,
        full_name: 'Umarbek Saidov',
        speciality: 'Mobile developer',
        image: '/assets/images/team/umarbek.webp',
        socials: {
            instagram: 'https://instagram.com/just_ulugbek',
            telegram: 'https://t.me/TemirovUlugbek',
            linkedin: 'https://linkedin.com/in/ulugbektemirov',
        }
    },
    {
        id: 5,
        full_name: 'Iroda Madaminova',
        speciality: 'Sales manager',
        image: '/assets/images/team/iroda.webp',
        socials: {
            instagram: 'https://instagram.com/just_ulugbek',
            telegram: 'https://t.me/TemirovUlugbek',
            linkedin: 'https://linkedin.com/in/ulugbektemirov',
        }
    },
]

const TeamSection = () => {
    const { t } = useTranslation()

    return <section className="container px-4 md:px-6 py-[30px] md:py-[60px]">
        <h1 className="text-xl md:text-2xl font-semibold">
            <span className="text-brand mr-1">#</span> {t('common.ourTeam')}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-5 mt-6 md:mt-[60px]">
            {TEAM.map((member, index) => <TeamCard key={index} {...member} />)}
        </div>
    </section>
}

export default TeamSection