import dynamic from "next/dynamic";
import { Suspense } from "react";
import { useRef } from "react";
import Head from "next/head";
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
const BannerIndex = dynamic(() => import("@/components/Banner/BannerIndex"), {
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
    <>
      <Head>
        <title>Dental Facets - Your Trusted Dental Clinic</title>
        <meta
          name="description"
          content="Dental Facets offers comprehensive dental care services, including teeth whitening, dental composites, instant teeth whitening, dental crown removal, and more. Our experienced team is dedicated to providing personalized care in a comfortable and welcoming environment."
        />
        <meta
          name="keywords"
          content="dental clinic, dental care, dentist, teeth whitening, dental composites, instant teeth whitening, dental crown removal, aligners for teeth, invisible aligners, dental braces, endodontics, dental services, dental treatment, Gurugram dentist"
        />
        <link rel="canonical" href="https://dentalfacets.netlify.app/" />
      </Head>

      <main>
        <Suspense fallback={<div>Loading banner...</div>}>
          <BannerIndex divRef={divRef} />
        </Suspense>

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
    </>
  );
}
