'use client'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/icon";
import { useServices } from "@/features/services/hooks";
import { Skeleton } from "@/components/ui/skeleton";
import services from '@/db/services.json'
import { useTranslation } from "react-i18next";

const ServicesView = () => {
//   const { data, isLoading }: any = useServices();
const { t, i18n: { language } } = useTranslation()

  return (
    <main>
      <section id="hero" className="pt-10 pb-[60px] container">
        <div className="flex justify-center">
          <span className="mx-auto inline-block">
            <h1 className="text-2xl font-semibold text-tp text-center uppercase">
              {t('common.services')}
            </h1>
            <img
              className="animate-bounce mx-auto mt-8"
              src="/assets/shapes/arrow.svg"
              alt="arrow"
            />
            <h1 className="text-center font-semibold text-fs60">
              {t('services.title')}
            </h1>
          </span>
        </div>
      </section>

      <section className="container py-[60px]">
        <h1 className="text-2xl font-semibold">
          <span className="text-brand mr-1">#</span> {t('common.services')}
        </h1>

        <div className="grid grid-cols-3 gap-5 mt-10">
          {/* {isLoading && Array.from({ length: 6 }).map((_, index) => (
            <Skeleton
              key={index}
              className="h-[550px] w-full rounded-md"
            />
          ))} */}
          {services?.map((service: any, index: number) => (
            <Card
              className="h-[550px] flex flex-col justify-between"
              key={index}
            >
              <CardHeader>
                <CardTitle className="sr-only">Card Title</CardTitle>
                <div className="flex flex-col gap-2.5">
                  <span className="rounded-sm w-[100px] h-[100px] shrink-0 bg-brand flex items-center justify-center">
                    <Icon color="white" size={60} icon={`shape_${index + 1}`} />
                  </span>
                  <h1 className="text-[28px] font-medium">
                    {service.title[language]}
                  </h1>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-xl text-tp-white-500 font-light font-mono">
                  {service.description[language]}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ServicesView;
