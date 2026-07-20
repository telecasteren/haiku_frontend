import type { Metadata } from 'next'
import PageTitle from "@/components/PageTitle";
import Hero from "@/components/Hero";
import ItemCard from "@/components/ItemCard";
import { ShopItems } from "@/lib/mockups/shop";


export const metadata: Metadata = {
  title: 'Coffee beans',
}

export default function CoffeePage() {
  const filteredItems = ShopItems.filter(item => item.type === "beans")

  return (
    <div className="flex min-h-screen flex-col gap-4 bg-background text-foreground">
      <Hero src="/shop/coffee/kelsen-fernandes-M5EnPWrSbj0-unsplash.jpg" alt="Hero banner with coffeebean bags" />

      <section className="mt-10 ml-10 mr-10 md:ml-20 md:mr-20">
        <PageTitle title="View our selection of coffee beans" />
        <p>Find your favourite selection of coffee beans.</p>
      </section>


      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-10 ml-10 mr-10 md:ml-20 md:mr-20">
        {filteredItems.map(item => (
          <ItemCard key={item.id} title={item.title} price={item.price} onSale={item.onSale} description={item.description} image={item.image} />
        ))}
      </section>
    </div>
  );
}
