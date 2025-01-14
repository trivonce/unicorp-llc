import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="flex flex-col items-center gap-4">
        <Image
          className="rounded-md"
          src="/unicorpllc_logo.jpg"
          alt="UNICORP LLC"
          width={200}
          height={200}
        />
        <a
          target="_blank"
          href="https://www.linkedin.com/company/unicorpllc/"
          className="text-4xl font-semibold hover:underline underline-offset-2 cursor-pointer"
        >
          UNICORP LLC
        </a>
      </div>
    </div>
  );
}
