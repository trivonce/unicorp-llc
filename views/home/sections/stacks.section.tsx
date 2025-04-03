import Icon from "@/components/icon";
import { useTranslation } from "react-i18next";

const STACKS = [
    {
        id: 1,
        icon: 'stacks%20%281%29',
        name: 'Ffmpeg',
    },
    {
      id: 2,
      icon: 'stacks%20%282%29',
      name: 'GraphQL',
  },
  {
    id: 3,
    icon: 'stacks%20%283%29',
    name: 'Nats',
},
{
  id: 4,
  icon: 'stacks%20%284%29',
  name: 'Flutter',
},
{
  id: 5,
  icon: 'stacks%20%285%29',
  name: 'Vue JS',
},
{
  id: 6,
  icon: 'stacks%20%286%29',
  name: 'React JS',
},
{
  id: 7,
  icon: 'stacks%20%287%29',
  name: 'Figma',
},
{
  id: 8,
  icon: 'stacks%20%288%29',
  name: 'Framer',
},
{
  id: 9,
  icon: 'stacks%20%289%29',
  name: 'Swift',
},
{
  id: 10,
  icon: 'stacks%20%2810%29',
  name: 'Node JS',
},
// {
//   id: 11,
//   icon: 'stacks%20%2811%29',
//   name: 'Kafka',
// },
// {
//   id: 12,
//   icon: 'stacks%20%2812%29',
//   name: 'C#',
// },
]

const StacksSection = () => {
  const { t } = useTranslation()

  return (
    <section id="stacks" className="container py-[30px] md:py-[60px]">
      <h1 className="text-xl md:text-2xl font-semibold">
        <span className="text-brand mr-1">#</span> {t('home.stacks')}
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center gap-3 md:gap-5 mt-[30px] md:mt-[60px]">
          {STACKS.map((stack) => <div key={stack.id} className="gap-2 md:gap-2.5 flex flex-col items-center justify-center bg-card rounded-md p-3 md:p-5">
              <Icon icon={stack.icon} size={80} colored className="w-16 h-16 md:w-[120px] md:h-[120px]" />
              <h1 className="font-semibold text-sm md:text-base">{stack.name}</h1>
          </div>)}
      </div>
    </section>
  );
};

export default StacksSection;
