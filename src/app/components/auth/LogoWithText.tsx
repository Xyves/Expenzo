import Image from "next/image";

export default function LogoWithText() {
  return (
    <nav className="my-10 flex items-center justify-center px-2">
      <Image
        src="/images/logo.png"
        height={100}
        width={100}
        alt="Expenzo logo"
      />

      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Expenzo</p>
    </nav>
  );
}
