import TeamCard from "../components/team-card"

// images

const TEAM = [
    {
        id: 1,
        full_name: 'Ulugbek Temirov',
        speciality: 'Frontend Engineer',
        image: 'ulugbek',
        socials: {
            instagram: 'https://instagram.com/just_ulugbek',
            telegram: 'https://t.me/TemirovUlugbek',
            linkedin: 'https://linkedin.com/in/ulugbektemirov',
        }
    },
    {
        id: 1,
        full_name: 'Sarvarbek Nabiyev',
        speciality: 'UI/UX designer',
        image: 'sarvar',
        socials: {
            instagram: 'https://instagram.com/just_ulugbek',
            telegram: 'https://t.me/TemirovUlugbek',
            linkedin: 'https://linkedin.com/in/ulugbektemirov',
        }
    },
    {
        id: 1,
        full_name: 'Fayzulloh Abdullayev',
        speciality: 'Backend developer',
        image: 'fayzulloh',
        socials: {
            instagram: 'https://instagram.com/just_ulugbek',
            telegram: 'https://t.me/TemirovUlugbek',
            linkedin: 'https://linkedin.com/in/ulugbektemirov',
        }
    },
    {
        id: 1,
        full_name: 'Abdusamad Malikov',
        speciality: 'Backend developer',
        image: 'abdusamad',
        socials: {
            instagram: 'https://instagram.com/just_ulugbek',
            telegram: 'https://t.me/TemirovUlugbek',
            linkedin: 'https://linkedin.com/in/ulugbektemirov',
        }
    },
]

const TeamSection = () => {
    return <section className="container py-[60px]">
        <h1 className="text-2xl font-semibold">
        <span className="text-brand mr-1">#</span>Our Team
      </h1>

      <div className="grid 2xl:grid-cols-4 grid-cols-3 gap-5 mt-[60px]">
        {TEAM.map((member, index) => <TeamCard key={index} {...member} />)}
      </div>
    </section>
}

export default TeamSection