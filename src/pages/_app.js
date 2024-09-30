import "@/styles/globals.css";
import Navigation from "@/components/CommonComponents/Navigation";
import Footer from "@/components/CommonComponents/Footer";
import Head from "next/head";
import { Amiri } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import PageTransition from "@/components/transition/PageTransition";

const amiri = Amiri({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export default function App({ Component, pageProps, router }) {
  return (
    <main className={amiri.className}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content=" Your trusted dental clinic for teeth whitening, dental implants, braces, and more. Experienced dentists, personalized care, comfortable atmosphere."
        />
        <meta
          name="keywords"
          content="dentist, dental clinic, dental care, cosmetic dentistry, restorative dentistry, pediatric dentistry, dental implants, teeth whitening, braces, orthodontics, root canal, dental cleaning, dental checkup, dental emergency, dental services, Gurugram dentist"
        />
        <meta name="author" content="Dental Facets" />
        <meta name="robots" content="max-snippet:200" />
        <link rel="icon" href="/image/favicon.webp" />
      </Head>

      <AnimatePresence mode="wait">
        <PageTransition key={router.asPath}>
          <Navigation />
          <Component {...pageProps} />
          <Footer />
        </PageTransition>
      </AnimatePresence>
    </main>
  );
}
