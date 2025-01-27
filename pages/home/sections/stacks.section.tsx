import Icon from "@/components/icon";

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
  return (
    <section id="stacks" className="container py-[60px]">
      <h1 className="text-2xl font-semibold">
        <span className="text-brand mr-1">#</span> Our stacks
      </h1>

      <div className="grid grid-cols-5 items-center gap-5 mt-[60px]">
          {STACKS.map((stack) => <div key={stack.id} className="gap-2.5 flex flex-col items-center justify-center bg-card rounded-md p-5">
              <Icon icon={stack.icon} size={120} colored />
              <h1 className="font-semibold">{stack.name}</h1>
          </div>)}
      </div>
    </section>
  );
};

export default StacksSection;
