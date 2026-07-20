import Image from "next/image";

export default function Hero({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mt-16 w-full h-64">
      <Image src={src} alt={alt} fill priority={true} className="object-cover" />
    </div>
  );
}
