import { Contact } from "@/components/landing/contact";
import { CustomCakeForm } from "@/components/landing/custom-cake-form";
import { Hero } from "@/components/landing/hero";
import { Occasions } from "@/components/landing/occasions";
import { Popular } from "@/components/landing/popular";
import { Process } from "@/components/landing/process";
import { Story } from "@/components/landing/story";
import { Testimonials } from "@/components/landing/testimonials";
import { bakeryJsonLd } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bakeryJsonLd()).replace(/</g, "\\u003c") }}
      />
      <Hero />
      <Occasions />
      <Popular />
      <CustomCakeForm />
      <Process />
      <Story />
      <Testimonials />
      <Contact />
    </>
  );
}
