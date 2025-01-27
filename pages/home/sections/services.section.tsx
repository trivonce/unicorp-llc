import Icon from "@/components/icon";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const SERVICES = Array.from({ length: 6 }).map((_, index) => ({
  id: index,
  icon: "shape_" + (index + 1),
  title: "Innovatech Services",
  text: "TechWave Solutions is an innovative technology company that specializes in providing cutting-edge software",
}));

const ServicesSection = () => {
  return (
    <section id="services" className="container py-[60px]">

<h1 className="text-2xl font-semibold"><span className="text-brand mr-1">#</span>Services</h1>

      <div className="grid grid-cols-3 gap-5 mt-10">
        {SERVICES.map((service) => (
          <Card className="border-none p-1.5 shadow-none" key={service.id}>
            <CardHeader>
              <CardTitle className="sr-only">Card Title</CardTitle>
              <span className="w-20 h-20 rounded-md bg-[#0382A7] flex items-center justify-center ">
                <Icon size={50} icon={service.icon} color="white" />
              </span>
            </CardHeader>
            <CardContent>
              <h1 className="text-xl font-medium line-clamp-1">{service.title}</h1>
              <p className="text-sm font-light mt-1 h-[60px] line-clamp-3">{service.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-[60px]">
        <Button variant='outline'>View All Services</Button>
      </div>
    </section>
  );
};

export default ServicesSection;
