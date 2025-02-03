import Icon from "@/components/icon";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
    const { t } = useTranslation()

  return (
    <section id="contact" className="container py-[60px]">
      <h1 className="text-9xl text-center font-semibold">
        {t("home.contact.title")}
      </h1>
      <Link
        className="text-tp-link-more text-[40px] leading-[60px] font-light flex items-center gap-4 group justify-center mt-[50px]"
        href="/contact"
      >
        <span>{t("home.contact.startYourProject")}</span>{" "}
        <Icon
          size={40}
          className="!bg-tp-link-more duration-200 group-hover:!bg-brand group-hover:-translate-y-1 group-hover:translate-x-1"
          icon="arrow-top-right-long"
        />
      </Link>
    </section>
  );
};

export default ContactSection;
