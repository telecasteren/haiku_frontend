import Link from "next/link";
import Image from "next/image";

export const LogoWithText = () => {
  return (
    <Link href="/" className="flex gap-2 items-center">
      <Image src="/bean.svg" alt="Haiku Coffee" width={20} height={20} />
      <span className="text-lg font-semibold tracking-tight">Haiku Coffee</span>
    </Link>
  );
};
