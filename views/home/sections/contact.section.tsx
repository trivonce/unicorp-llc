import Icon from "@/components/icon";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
    const { t } = useTranslation()

  return (
    <section id="contact" className="container py-[30px] md:py-[60px]">
      <h1 className="text-4xl md:text-6xl lg:text-9xl text-center font-semibold">
        {t("home.contact.title")}
      </h1>
      <Link
        className="text-tp-link-more text-xl md:text-2xl lg:text-[40px] leading-normal md:leading-[60px] font-light flex items-center gap-2 md:gap-4 group justify-center mt-[25px] md:mt-[50px]"
        href="/contact"
      >
        <span>{t("home.contact.startYourProject")}</span>{" "}
        <Icon
          size={24}
          className="!bg-tp-link-more duration-200 group-hover:!bg-brand group-hover:-translate-y-1 group-hover:translate-x-1 w-6 h-6 md:w-10 md:h-10"
          icon="arrow-top-right-long"
        />
      </Link>
    </section>
  );
};

export default ContactSection;
