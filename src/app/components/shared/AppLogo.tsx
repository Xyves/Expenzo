import Image from "next/image";

export default function AppLogo({ classProps }: { classProps: string }) {
  return (
    <Image
      height={100}
      width={100}
      src={"/images/logo.png"}
      alt="application logo"
      className={classProps}
      loading="eager"
    />
  );
}
