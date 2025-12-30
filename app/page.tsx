import {
  Header,
  Footer,
  Hero,
  Services,
  Features,
  Pricing,
  Testimonials,
  CTA,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Features />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
