import PageTitle from "@/components/PageTitle";
import { DashboardCards } from "@/components/DashboardCards/DashboardCards";
import LatestBlogsList from "@/components/blogs/LatestBlogsList";
import { TestimonialCarousel } from "@/components/testimonials/TestimonialCarousel";


export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-4 bg-background p-20 md:p-30 text-foreground">
        <div className="justify-center">
          <div className="md:ml-12">
          <PageTitle title="Welcome to Haiku Coffee"/>
            <p>Speciality craft in every cup</p>
          </div>

          <section id="dashboard-cards" className="mt-12">
            <DashboardCards />
          </section>

          <section id="blogs" className="m-12">
            <LatestBlogsList />
          </section>

          <section id="testimonials" className="flex flex-col gap-4 text-xl m-20 mt-40 w-fit max-w-200 justify-self-center">
            <h2>What people are saying about us</h2>
            <TestimonialCarousel />
          </section>
        </div>
      </div>


    </>
  );
}
