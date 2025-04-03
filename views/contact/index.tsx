'use client'

import Icon from "@/components/icon";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const ContactInput = ({ className }: { className?: string }) => {
  return (
    <input
      placeholder="Type here"
      type="text"
      className={`px-3 text-center border-b dark:border-white border-gray-600 bg-transparent outline-none w-full md:w-auto ${className}`}
    />
  );
};

const ContactView = () => {
  const { t } = useTranslation();

  return (
    <main className="container px-4 md:px-6 pt-20">
      <div className="mb-12 md:mb-[120px] pb-12 md:pb-[120px]">
        <h1 className="text-4xl md:text-6xl lg:text-[100px] items-center mb-6 md:mb-10 font-medium">
          Let's Talk
        </h1>

        <form action="">
          <div className="flex flex-col md:flex-wrap text-2xl md:text-3xl lg:text-[56px] gap-4 md:gap-x-8 md:gap-y-14">
            <h1 className="text-center md:text-left">Hello, my full name is</h1>
            <ContactInput className="w-full md:w-[300px] lg:w-[600px]" />
            <h1 className="text-center md:text-left">and my phone number is</h1>
            <ContactInput className="w-full md:w-[250px] lg:w-[500px]" />
            <h1 className="text-center md:text-left">and my email</h1>
            <ContactInput className="w-full md:w-[300px]" />
          </div>
          <Button
            variant="link"
            className="text-2xl md:text-3xl lg:text-[56px] group flex items-center gap-2 md:gap-5 float-end mt-6 md:mt-10"
          >
            Send{" "}
            <Icon
              className="dark:!bg-[#E0E0E0] !bg-black group-hover:!bg-brand group-hover:scale-125 duration-200 scale-75 md:scale-100"
              size={32}
              icon="arrow-top-right-long"
            />
          </Button>
        </form>
      </div>
    </main>
  );
};

export default ContactView;
