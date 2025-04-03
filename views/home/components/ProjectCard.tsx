import Icon from "@/components/icon";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { useTranslation } from "react-i18next";

type Props = {
    index: number;
  image: string;
  title: string;
  description: any;
  link: string;
  tags: any;
};

const ProjectCard = (props: Props) => {
  const { image, title, description, tags, index, link } = props;
  const { t, i18n: { language }} = useTranslation()
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-[50px]">
      <div 
        data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} 
        className="overflow-hidden rounded-md order-first md:order-none"
      >
        <img 
          className="absolute top-0 left-0 w-full h-full -z-[1] blur-xl opacity-50" 
          src={image} 
          alt="placeholder_image" 
        />
        <Image
          src={image}
          alt={title + " image"}
          width={0}
          height={0}
          unoptimized
          className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-md hover:scale-105 duration-200"
        />
      </div>

      <div 
        className="flex flex-col justify-between gap-6 md:gap-10 order-last md:order-none"
      >
        <div>
          <h1 data-aos='fade-down' className="font-medium text-2xl md:text-3xl lg:text-fs50">{title}</h1>

          <div className="flex items-center gap-2 md:gap-2.5 mt-2 flex-wrap">
            {tags.map((tag: any, index: number) => (
              <span
                data-aos="fade-rigth"
                data-aos-delay={index * 100}
                key={index}
                className="py-1.5 md:py-2.5 border rounded-[100px] px-4 md:px-[30px] border-tp-tertiary text-tp-tertiary text-sm md:text-base"
              >
                {tag[language]}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p data-aos='fade-in' className="text-lg md:text-xl lg:text-2xl">{description[language]}</p>
          <a
            className={buttonVariants({
              variant: "outline",
              className: "text-tp-link-more mt-4 md:mt-[30px] group w-full md:w-auto",
            })}
            target="_blank"
            href={link}
          >
            {t('common.viewMore')}
            <Icon
              className="!bg-tp-link-more group-hover:!bg-brand group-hover:rotate-45 duration-200 group-hover:translate-x-2"
              icon="arrow-top-right"
            />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
