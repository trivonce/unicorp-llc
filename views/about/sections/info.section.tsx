'use client'

import { Skeleton } from "@/components/ui/skeleton";
import useClient from "@/hooks/use-client";
import { useTranslation } from "react-i18next";

const InformationSection = () => {
  const { t } = useTranslation()
  const isClient = useClient();

  if (!isClient) {
    return <Skeleton className="h-[400px] w-full rounded-md container" />;
  }

  return (
    <section className="container px-4 md:px-6 pb-[30px] md:pb-[60px]">
      <div className="flex flex-col gap-4 md:gap-[30px] text-lg md:text-2xl lg:text-3xl leading-relaxed md:leading-[48px]">
        <p dangerouslySetInnerHTML={{ __html: t('about.info') }} />
      </div>
    </section>
  );
};

export default InformationSection;
