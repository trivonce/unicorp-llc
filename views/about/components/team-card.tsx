import Icon from "@/components/icon";
import SocialsLine from "@/components/socials-line";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

type Props = {
  image: string;
  full_name: string;
  speciality: string;
  socials: any;
};

const TeamCard = (props: Props) => {
  const { image, full_name, speciality, socials } = props;

  return (
    <Card>
      <CardHeader className="p-5 overflow-hidden">
        <CardTitle className="sr-only"></CardTitle>
        <div className="overflow-hidden rounded">
        <Image
          unoptimized
          className="w-full h-[400px] object-cover object-top rounded !mt-0 hover:scale-110 duration-200"
          src={`${image}`}
          width={0}
          height={0}
          alt={full_name || "team image"}
        />
        </div>
      </CardHeader>
      <CardContent className="p-5 pt-0">  
        <div>
        <h1 className="text-2xl font-semibold">{full_name}</h1>
        <p className="font-light mt-1">{speciality}</p>
        </div>
        <div className="flex gap-2.5 mt-2.5">
          {Object.keys(socials).map((key, index) => (
            <a target="__blank" href={socials[key]} key={index}>
              <Icon color="#858585" className="hover:!bg-brand" icon={key} />
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamCard;
