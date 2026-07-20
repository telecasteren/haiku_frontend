import type { Metadata } from 'next'
import PageTitle from "@/components/PageTitle";
import Hero from "@/components/Hero";
import ItemCard from "@/components/ItemCard";
import { ShopItems } from "@/lib/mockups/shop";


export const metadata: Metadata = {
  title: 'Merch',
}

export default function MerchPage() {
  const filteredItems = ShopItems.filter(item => item.type === "merch")

  return (
    <div className="flex min-h-screen flex-col gap-4 bg-background text-foreground">
      <Hero src="/shop/merch/bennie-bates-IZDEH8Qd7Cg-unsplash.jpg" alt="Hero banner with coffeebean bags" />

      <section className="mt-10 ml-10 mr-10 md:ml-20 md:mr-20">
      {/*<section className="absolute top-20 mx-auto p-4 z-50 text-white bg-black/50 rounded">*/}
        <PageTitle title="View our selection of merch" />
        <p>Get your brewing merch here.</p>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-10 ml-10 mr-10 md:ml-20 md:mr-20">
        {filteredItems.map(item => (
          <ItemCard key={item.id} title={item.title} price={item.price} onSale={item.onSale} description={item.description} image={item.image} />
        ))}
      </section>
    </div>
  );
}
