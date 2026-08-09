"use client";

import Image from "next/image";

export default function LogoWithText() {
  return (
    <nav className="my-2 items-center justify-center select-none md:my-6 flex">
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
