import Link from "next/link";
import SocialsLine from "./socials-line";

const links = [
    {
        tk: 'privacy-policy',
        title: 'Private Policy',
        link: '/private-policy',
    },
    {
        tk: 'terms-and-conditions',
        title: 'Terms & Conditions',
        link: '/terms-and-conditions',
    },
    {
        tk: 'cookie-policy',
        title: 'Cookie Policy',
        link: '/cookie-policy',
    },
    {
        tk: 'licence',
        title: 'License',
        link: '/licence',
    },
]

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-footer text-footer-foreground py-10">
      <div className="container flex gap-20 justify-between">
        <div className="flex flex-col justify-between gap-5">
          <div>
            <Link href="/">
              <img src="/assets/logo/unicorp-white.svg" alt="logo" />
            </Link>
            <p className="mt-3 text-[#878787] text-xs">
              OOO UNICORP - {currentYear}
            </p>
          </div>
          <SocialsLine />
        </div>

        <div>
            <h1 className="text-2xl font-medium mb-2.5 text-white">Navigation</h1>
            <div className="flex flex-col gap-2.5">
                {links.map((link) => <Link className="text-base font-normal" href={link.link} key={link.tk}>{link.title}</Link>)}
            </div>
        </div>

        <div>
            <h1 className="text-2xl font-medium mb-2.5 text-white">Contact</h1>
            <div className="flex flex-col gap-2.5">
                <a className="hover:underline" href="tel:+998999999999">+998 99 999 99 99</a>
                <a href="mailto:unicorpuz@gmaill.com" className="hover:underline">unicorpuz@gmaill.com</a>
            </div>
        </div>

        <div>
            <h1 className="text-2xl font-medium mb-2.5 text-white">Location</h1>
            <div className="flex flex-col gap-2.5">
                <a className="hover:underline" href="https://maps.google.com/?q=Uzbekistan">Tashkent. Mirzo Ulugbek. Qorabog 12</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
