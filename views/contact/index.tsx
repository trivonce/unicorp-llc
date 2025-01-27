import Icon from "@/components/icon";
import { Button } from "@/components/ui/button";

const ContactInput = ({ className }: { className?: string }) => {
  return (
    <input
      placeholder="Type here"
      type="text"
      className={`px-3 text-center border-b border-white bg-transparent outline-none ${className}`}
    />
  );
};

const ContactView = () => {
  return (
    <main className="container pt-20">
      <div className="mb-[120px] pb-[120px]">
      <h1 className="text-[100px] items-center mb-10 font-medium">
        Let’s Talk
      </h1>

      <form action="">
        <div className="flex flex-wrap text-[56px] gap-x-8 gap-y-14">
          <h1>Hello, my full name is</h1>
          <ContactInput className="xl:w-[600px]" />
          <h1>and my phone number is</h1>{" "}
          <ContactInput className="xl:w-[500px]" /> <h1>and my email</h1>{" "}
          <ContactInput />
        </div>
        <Button
          variant="link"
          className="text-[56px] group flex items-center gap-5 float-end mt-10"
        >
          Send{" "}
          <Icon
            className="!bg-[#E0E0E0] group-hover:"
            size={40}
            icon="arrow-top-right-long"
          />
        </Button>
      </form>
      </div>
    </main>
  );
};

export default ContactView;
