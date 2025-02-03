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
    <section className="container pb-[60px]">
      <div className="flex flex-col gap-[30px] text-3xl leading-[48px]">
        <p dangerouslySetInnerHTML={{ __html: t('about.info') }} />
      </div>
    </section>
  );
};

export default InformationSection;
