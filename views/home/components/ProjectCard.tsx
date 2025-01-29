import Icon from "@/components/icon";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";

type Props = {
    index: number;
  image: string;
  title: string;
  description: {
    en: string;
    uz: string;
    ru: string
  };
  link: string;
  tags: any;
};

const ProjectCard = (props: Props) => {
  const { image, title, description, tags, index, link } = props;
  return (
    <div className="grid grid-cols-2 gap-[50px]">
      <div className="overflow-hidden rounded-md" style={{ order: index % 2 === 0 ? 1 : 2 }}>
        <Image
          src={image}
          alt={title + " image"}
          width={0}
          height={0}
          className="w-full h-[800px] object-cover rounded-md hover:scale-110 duration-200"
        />
      </div>

      <div style={{ order: index % 2 === 0 ? 2 : 1 }} className="flex flex-col justify-between gap-10">
        <div>
          <h1 className="font-medium text-fs50">{title}</h1>

          <div className="flex items-center gap-2.5 mt-2 flex-wrap">
            {tags.map((tag: any, index: number) => (
              <span
                key={index}
                className="py-2.5 border rounded-[100px] px-[30px] border-tp-tertiary text-tp-tertiary"
              >
                {tag.en}
              </span>
            ))}
          </div>
        </div>

        <div >
          <p className="text-2xl">{description.en}</p>
          <a
            className={buttonVariants({
              variant: "outline",
              className: "text-tp-link-more mt-[30px] group",
            })}
            target="_blank"
            href={link}
          >
            View more{" "}
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
