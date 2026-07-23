import PageTitle from "@/components/PageTitle";
import { brand } from "@/lib/data/brand";
import { DashboardCards } from "@/components/DashboardCards/DashboardCards";
import LatestBlogsList from "@/components/blogs/LatestBlogsList";
import { TestimonialCarousel } from "@/components/testimonials/TestimonialCarousel";


export default function Home() {
  return (
      <div className="flex flex-col gap-4 bg-background p-4 sm:p-6 md:p-30 text-foreground">
          <div className="md:ml-12">
          <PageTitle title={`Welcome to ${brand.name}`}/>
            <p>{brand.tagline}</p>
          </div>

          <section id="dashboard-cards" className="mt-12">
            <DashboardCards />
          </section>

          <section id="blogs" className="m-12">
            <LatestBlogsList />
          </section>

          <section id="testimonials">
            <h2 className="text-xl text-center">What people are saying about us</h2>
            <TestimonialCarousel />
          </section>
      </div>
  );
}
