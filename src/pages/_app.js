import "@/styles/globals.css";
import Navigation from "@/components/CommonComponents/Navigation";
import Footer from "@/components/CommonComponents/Footer";
import Head from "next/head";
import { Amiri } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import PageTransition from "@/components/transition/PageTransition";

const amiri = Amiri({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>Dental   Facets - Your Trusted Dental Clinic</title>
        <meta
          name="description"
          content="Dental Facets offers comprehensive dental care services, including preventive, cosmetic, restorative, and pediatric dentistry. Our experienced team is dedicated to providing personalized care in a comfortable and welcoming environment."
        />
        <meta
          name="keywords"
          content="dentist, dental clinic, dental care, cosmetic dentistry, restorative dentistry, pediatric dentistry, dental implants, teeth whitening, braces, orthodontics, root canal, dental cleaning, dental checkup, dental emergency, dental services, Gurugram dentist"
        />
        <meta name="author" content="Dental Facets" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/image/favicon.webp" />
      </Head>

      <main className={`${amiri.className}`}>
        <AnimatePresence mode="wait">
          <PageTransition key={router.asPath}>
            <Navigation />
            <Component {...pageProps} />
            <Footer />
          </PageTransition>
        </AnimatePresence>
      </main>
    </>
  );
}
