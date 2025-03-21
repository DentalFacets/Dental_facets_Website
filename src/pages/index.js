import dynamic from "next/dynamic";
import { Suspense } from "react";
import { useRef } from "react";
import Head from "next/head";
import ModernDentalHero from "@/components/Banner/NewBanner";

const AboutUS = dynamic(() => import("@/components/About/AboutUS"), {
  ssr: true,
});
const ServiceCards = dynamic(
  () => import("@/components/Services_/ServiceCards"),
  {
    ssr: true,
  }
);
const Doctorbanner = dynamic(
  () => import("@/components/DoctorComponent/Doctorbanner"),
  {
    ssr: true,
  }
);
const Form = dynamic(() => import("@/components/OtherComponents/Form"), {
  ssr: true,
});

const Testimonials = dynamic(() =>
  import("@/components/OtherComponents/Testimonials")
);

const ImageGallery = dynamic(() =>
  import("@/components/About/ImageGallery.js")
);

export default function Home() {
  const divRef = useRef();
  return (
    <main className="mainContianer">
      <Head>
        <title>Dental Facets - Your Trusted Dental Clinic</title>
        <meta
          name="description"
          content=" Discover exceptional dental care at Dental Facets. We specialize in teeth whitening, dental composites, and more, ensuring personalized service in a welcoming setting."
        />
        <meta
          name="keywords"
          content="dental clinic, dental care, dentist, teeth whitening, dental composites, instant teeth whitening, dental crown removal, aligners for teeth, invisible aligners, dental braces, endodontics, dental services, dental treatment, Gurugram dentist"
        />
        <link rel="canonical" href="https://dentalfacets.in/" />
      </Head>
      <ModernDentalHero divRef={divRef} />
      <Suspense fallback={<div>Loading About Us...</div>}>
        <AboutUS />
      </Suspense>

      <Suspense fallback={<div>Loading Services...</div>}>
        <ServiceCards />
      </Suspense>

      <div ref={divRef}>
        <Suspense fallback={<div>Loading Form...</div>}>
          <Form />
        </Suspense>
      </div>

      <Suspense fallback={<div>Loading Doctor Banner...</div>}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<div>Loading Doctor Banner...</div>}>
        <Doctorbanner />
      </Suspense>

      <Suspense fallback={<div>Loading Doctor Banner...</div>}>
        <ImageGallery />
      </Suspense>
    </main>
  );
}
