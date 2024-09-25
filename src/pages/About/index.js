import React from "react";
import AboutUS from "@/components/About/AboutUS";
import Image from "next/image";
import styles from "@/styles/AboutPage.module.css";
import Doctorbanner from "@/components/DoctorComponent/Doctorbanner";
import Appointementbanner from "@/components/CommonComponents/Appointementbanner";
import ImageGallery from "@/components/About/ImageGallery";
import Head from "next/head";

function About() {
  return (
    <>
      <Head>
        <title>Dental Facets - Your Trusted Dental Clinic</title>
        <meta
          name="description"
          content="Discover Dental Facets, a leading dental clinic offering comprehensive care. Our experienced team specializes in teeth whitening, veneers, dental implants, braces, and more. Experience personalized treatment in a welcoming environment."
        />
        <meta
          name="keywords"
          content="dental clinic, dentist, dental services, teeth whitening, veneers, dental implants, braces, orthodontics, root canal, dental cleaning, dental checkup, dental emergency, dental services, Gurugram dentist"
        />
        <link rel="canonical" href="https://dentalfacets.netlify.app/About" />
      </Head>
      <div className="relative top-16">
        <h1 className={styles.abtUsHeading}> About Us</h1>

        <div
          className={`${`${styles.StaticContainers} md:flex md:items-center`} md:flex md:items-center`}
        >
          <div className={`md:w-2/3 lg:w-2/3`}>
            <h2 className={`${styles.welHead} md:text-4xl md:mb-[2rem]`}>
              Welcome to Dental Facets
            </h2>
            <p className={"text-pretty text-lg my-5 text-justify md:text-xl "}>
              At Dental Facets, we believe that a healthy, beautiful smile is
              essential to overall well-being. Our clinic is dedicated to
              provide comprehensive dental care with a focus on your comfort and
              satisfaction. We combine the latest technology with personalized
              service to ensure that every visit leaves you feeling confident in
              your dental health.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              className=" rounded-3xl shadow-lg ld:rounded-lg mx-1 saturate-[1.5]"
              src={"/image/webImages/welDenFac.webp"}
              fill
              sizes="100vh"
              alt="welcome image "
              style={{ objectFit: "cover" }}
              loading="lazy"
            />
          </div>
        </div>

        <AboutUS />
        <Appointementbanner />

        <div className={`${styles.StaticContainers} md:flex md:items-center`}>
          <div className={" md:w-2/3 lg:w-2/3"}>
            <h2 className={styles.welHead}>Our Story</h2>
            <p className={"text-pretty text-lg my-5 text-justify md:text-xl "}>
              Founded with a deep passion for patient-centered care, Dental
              Facets has grown into a trusted name in the dental community. Our
              journey began with a clear mission: to provide exceptional dental
              care in a warm and welcoming environment. Over the years, we have
              remained true to this mission, consistently upgrading our skills
              and technology to meet the evolving needs of our patients.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              className=" rounded-3xl shadow-lg ld:rounded-lg lg:mx-1"
              src={"/image/webImages/OurStory.webp"}
              fill
              sizes="100vh"
              alt="welcome image "
              style={{ objectFit: "cover" }}
              loading="lazy"
            />
          </div>
        </div>

        <ImageGallery />

        <div className={`${styles.StaticContainers} md:flex md:items-center`}>
          <div className={`md:w-2/3 lg:w-2/3`}>
            <h2 className={styles.welHead}>Meet Our Team</h2>
            <p className={"text-pretty text-lg my-5 text-justify md:text-xl"}>
              Our skilled and compassionate team is led by Dr. Promod, a highly
              experienced dentist specialized in faciomaxillary oral surgery
              surgery and implantology . With a dedication to excellence and a
              gentle approach, Dr. Promod ensures that each patient receives the
              highest standard of care. Our staff is not only knowledgeable but
              also passionate about making your experience as comfortable and
              stress-free as possible.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              className="rounded-full md:rounded-xl"
              src={"/image/webImages/welDenFac.webp"}
              fill
              alt="welcome image"
              sizes="100vh"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
        <Doctorbanner />
        <div className={`${styles.StaticContainers} md:flex md:items-center`}>
          <div className={"md:w-2/3 lg:w-2/3"}>
            <h2 className={styles.welHead}>Our Commitment to You</h2>
            <p className={"text-pretty text-lg my-5 text-justify md:text-xl "}>
              At Dental Facets, our commitment is to provide exceptional dental
              care while building lasting relationships with our patients. We
              strive to create a positive and relaxing atmosphere, where you can
              feel confident that your health is in good hands. We take the time
              to understand your unique needs and tailor our approach to ensure
              you receive the best possible care.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
