import Icon from "@/components/icon";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

type Props = {
    index: number;
  slug: string;
  image: string;
  title: string;
  description: string;
  tags: string[];
};

const ProjectCard = (props: Props) => {
  const { slug, image, title, description, tags, index } = props;
  return (
    <div className="grid grid-cols-2 gap-[50px]">
      <div style={{ order: index % 2 === 0 ? 1 : 2 }}>
        <Image
          src={image}
          alt={title}
          width={0}
          height={0}
          className="w-full h-[800px] object-cover rounded-md"
        />
      </div>

      <div style={{ order: index % 2 === 0 ? 2 : 1 }} className="flex flex-col justify-between gap-10">
        <div>
          <h1 className="font-medium  text-fs50">{title}</h1>

          <div className="flex items-center gap-2.5 mt-2 flex-wrap">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="py-2.5 border rounded-[100px] px-[30px] border-tp-tertiary text-tp-tertiary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div >
          <p className="text-2xl">{description}</p>
          <Link
            className={buttonVariants({
              variant: "outline",
              className: "text-tp-link-more mt-[30px] group",
            })}
            href={`/projects/${slug}`}
          >
            View more{" "}
            <Icon
              className="!bg-tp-link-more group-hover:!bg-brand group-hover:rotate-45 duration-200 group-hover:translate-x-2"
              icon="arrow-top-right"
            />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
