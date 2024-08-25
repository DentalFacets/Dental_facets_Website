import "@/styles/globals.css";
import CommonNAV from "./components/CommonNAV";
import Footer from "./components/Footer";
import Head from "next/head";
import { Caudex } from 'next/font/google';

// Configure the Caudex font
const caudex = Caudex({
  weight: ['700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>Dental Facets | Your Smile, Our Priority</title>
        <meta name="description" content="Dental Facets offers expert dental care services including preventive, cosmetic, restorative, and pediatric dentistry in a comfortable and welcoming environment." />
        <meta name="keywords" content="dentist, dental care, dental clinic, cosmetic dentistry, restorative dentistry, pediatric dentistry" />
        <meta name="author" content="Dental Facets" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#0073e6" />
      </Head>
      <main className={caudex.className}>
        <CommonNAV />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
