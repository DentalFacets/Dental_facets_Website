import dynamic from "next/dynamic";
import { Suspense } from "react";

const AboutUS = dynamic(() => import("./components/AboutUS"), { ssr: true });
const ServiceCards = dynamic(() => import("./components/ServiceCards"), {
  ssr: true,
});
const Doctorbanner = dynamic(() => import("./components/Doctorbanner"), {
  ssr: true,
});
const Form = dynamic(() => import("./components/Form"), { ssr: true });
const BannerIndex = dynamic(() => import("./components/BannerIndex"), {
  ssr: true,
});

export default function Home() {
  return (
    <main>
      <Suspense fallback={<div>Loading banner...</div>}>
        <BannerIndex />
      </Suspense>

      <Suspense fallback={<div>Loading About Us...</div>}>
        <AboutUS />
      </Suspense>

      <Suspense fallback={<div>Loading Services...</div>}>
        <ServiceCards />
      </Suspense>

      <div id="form">
        <Suspense fallback={<div>Loading Form...</div>}>
          <Form />
        </Suspense>
      </div>

      <Suspense fallback={<div>Loading Doctor Banner...</div>}>
        <Doctorbanner />
      </Suspense>
    </main>
  );
}
