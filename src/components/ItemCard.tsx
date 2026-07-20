import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ItemCardProps = {
  title: string;
  price: number;
  onSale: boolean;
  description: string;
  image: string;
};

export default function ItemCard({ title, price, onSale, description, image }: ItemCardProps) {

  return (
    <Card className="w-full grid md:grid-cols-2 gap-4 items-center p-6">
      <CardHeader className="group relative w-full h-96 overflow-hidden rounded">
        <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, 300px" className="object-cover object-center scale-110 transition-transform duration-500 ease-out group-hover:scale-100 cursor-pointer"/>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <p className={onSale ? "text-red-500" : "text-black"}>Price: ${price}</p>
        <Button className="mt-4 cursor-pointer">View Details</Button>
      </CardContent>
    </Card>
  );
}
