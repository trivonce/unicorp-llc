import Icon from "@/components/icon";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useServices } from "@/features/services/hooks";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton"
import services from '@/db/services.json'
import { useTranslation } from "react-i18next";

// const services: {
//   title: string;
//   description: string;
//   link: string;
//   image: string;
// }[] = [
//   {
//     title: "Web development",
//     description:
//       "We create stunning and functional websites, from corporate sites to robust web applications. Whether you need a portfolio, e-commerce platform, or a custom solution, we deliver user-friendly and scalable web experiences tailored to your goals.",
//     link: "/services",
//     image: "https://placehold.co/400x600",
//   },
//   {
//     title: "Mobile apps",
//     description:
//       "Transform your ideas into reality with custom mobile applications for iOS and Android. Our team develops intuitive, feature-rich, and responsive apps to elevate your brand and engage your users effectively.",
//     link: "/services",
//     image: "https://placehold.co/400x600",
//   },
//   {
//     title: "UI&UX design",
//     description:
//       "Craft visually stunning and user-friendly interfaces with our UI/UX design services. We focus on delivering seamless and engaging user experiences that keep your customers coming back for more.",
//     link: "/services",
//     image: "https://placehold.co/400x600",
//   },
//   {
//     title: "CRM systems",
//     description:
//       "Streamline your business processes with powerful and customizable CRM systems. From sales tracking to customer relationship management, we provide tools that improve efficiency and drive growth.",
//     link: "/services",
//     image: "https://placehold.co/400x600",
//   },
//   {
//     title: "Artifical Intelegence",
//     description:
//       "Leverage cutting-edge AI solutions to automate tasks, analyze data, and enhance customer experiences. From AI-powered chatbots to predictive analytics, we help your business stay ahead of the curve.  ",
//     link: "/services",
//     image: "https://placehold.co/400x600",
//   },
//   {
//     title: "Business analysis",
//     description:
//       "Make informed decisions with our in-depth business analysis services. We identify pain points, streamline operations, and uncover opportunities to help your business achieve its full potential.",
//     link: "/services",
//     image: "https://placehold.co/400x600",
//   },
// ];

const ServicesSection = () => {
  // const { data, isLoading }: any = useServices();
  const { t, i18n: { language } } = useTranslation()

  return (
    <section id="services" className="container py-[30px] md:py-[60px]">
      <h1 className="text-xl md:text-2xl font-semibold">
        <span className="text-brand mr-1">#</span>{t('common.services')}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-5 md:mt-10">
        {/* {isLoading && Array.from({length: 6}).map((_, index) => <Skeleton key={index} className="h-[262px] w-full rounded-md" />)} */}
        {services.map((service: any, index: number) => (
          <Card data-aos='fade-up' data-aos-delay={index * 100} data-aos-easing="ease-in" className="border-none p-1.5 shadow-none" key={index}>
            <CardHeader>
              <CardTitle className="sr-only">Card Title</CardTitle>
              <span className="w-16 h-16 md:w-20 md:h-20 rounded-md bg-[#0382A7] flex items-center justify-center">
                <Icon size={40} icon={`shape_${index + 1}`} color="white" className="w-10 h-10 md:w-[50px] md:h-[50px]" />
              </span>
            </CardHeader>
            <CardContent>
              <h1 className="text-lg md:text-xl font-medium line-clamp-1">
                {service.title[language]}
              </h1>
              <p className="text-xs md:text-sm font-light mt-1 h-[48px] md:h-[60px] line-clamp-3">
                {service.description[language]}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-[30px] md:mt-[60px]">
        <Link
          className={buttonVariants({ variant: "outline" })}
          href={"/services"}
        >
          {t('common.viewAllServices')}
        </Link>
      </div>
    </section>
  );
};

export default ServicesSection;
