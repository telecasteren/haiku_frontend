import type { Metadata } from 'next'
import PageTitle from "@/components/PageTitle";
import Hero from "@/components/Hero";
import ItemCard from "@/components/ItemCard";
import { ShopItems } from "@/lib/mockups/shop";


export const metadata: Metadata = {
  title: 'Equipment',
}

export default function EquipmentPage() {
  const filteredItems = ShopItems.filter(item => item.type === "equipment")
  return (
    <div className="flex min-h-screen flex-col gap-4 bg-background text-foreground">
      <Hero src="/shop/equipment/kristian-ryan-alimon-sHGbZqv8o9g-unsplash copy.jpg" alt="Hero banner with coffeebean bags" />

      <section className="mt-10 ml-10 mr-10 md:ml-20 md:mr-20">
        <PageTitle title="View our selection of equipment"/>
        <p>Get your next brewing equipment.</p>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-10 ml-10 mr-10 md:ml-20 md:mr-20">
        {filteredItems.map(item => (
          <ItemCard key={item.id} title={item.title} price={item.price} onSale={item.onSale} description={item.description} image={item.image} />
        ))}
      </section>
    </div>
  );
}
