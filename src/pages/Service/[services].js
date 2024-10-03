import React, { useState } from "react";
import { useRouter } from "next/router";
import { useRef, useEffect } from "react";
import styles from "@/styles/Slug/Slug.module.css";
import Image from "next/image";
import Head from "next/head";
import LoadingSpinner from "@/components/transition/PageLoading";
import slugbanner from "../../../public/image/SlugBanner.webp";

export async function getStaticPaths() {
  // Fetch all services
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/serData`);
  const services = await res.json();

  // Generate paths for each service based on the 'head' field
  const paths = services.map((service) => ({
    params: { services: service.head },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/serData?head=${params.services}`
  );
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      services: data,
    },
    revalidate: 60, // Revalidate every 60 seconds
  };
}

const Services = ({ services }) => {
  const router = useRouter();
  const path = router.query.services;
  const cardRefs = useRef([]);
  // const [services, setServices] = useState([]);

  //fetching data using useEffect // Calling data from local API
  // useEffect(() => {
  //   const fetchServices = async () => {
  //     if (path) {
  //       try {
  //         const response = await fetch(
  //           `${process.env.NEXT_PUBLIC_BASE_URL}/api/serData?head=${path}`
  //         );
  //         const data = await response.json();
  //         setServices(data);
  //       } catch (error) {
  //         console.error("Error fetching services data:", error);
  //       }
  //     }
  //   };

  //   fetchServices();
  // }, [path]);

  // Scroll to card function
  const scrollToCard = (index) => {
    if (cardRefs.current[index]) {
      cardRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  };

  if (!services) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Head>
        <title>{`Dental Facets | ${services.head} `}</title>
        <link
          rel="canonical"
          href={`${`https://dentalfacets.netlify.app/Service/${path}`}`}
        />
        <meta name="description" content={services.description} />
        <meta name="keywords" content={services.keywords} />
      </Head>
      {services.length == 0 ? (
        <LoadingSpinner />
      ) : (
        <div className="relative top-20 mb-20">
          <>
            <div className={styles.bannerOverlay}></div>
            <Image
              src={slugbanner}
              alt={"temp"}
              sizes="{max-width:768px} 384px, 1280px"
              style={{ objectFit: "cover" }}
              placeholder="blur"
              priority
              className={styles.slugbanner}
            />
          </>
          <div id="div3">
            <div id="div3_2">
              {/* main container head*/}
              <div className={styles.mainContianer}>
                <h2 className={styles.mainHead}>{services.head}</h2>
                <div className={styles.imageF1para}>
                  {services.img && (
                    <Image
                      src={services.img}
                      alt={services.head ? services.head : "temp"}
                      sizes="{max-width:768px} 384px, 640px"
                      width={335}
                      height={187}
                      placeholder="blur"
                      blurDataURL={services.img}
                      className={styles.imageWrapper}
                      priority
                    />
                  )}
                  <p className={styles.para}>{services.detail}</p>
                </div>
                <p className={styles.para}>{services.detail2}</p>
              </div>

              {/* table of Content*/}
              <div className={styles.toc}>
                <h3>Find What You Need</h3>
                {Array.isArray(services.defi) && (
                  <ul className="md:columns-2">
                    {services.defi.map((item, index) => {
                      return (
                        <li key={index} onClick={() => scrollToCard(index)}>
                          {item.Label}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>

              {/* content of services  */}
              {Array.isArray(services.defi) &&
                services.defi.map((item, index) => {
                  return (
                    <div
                      className={styles.container}
                      key={index}
                      ref={(el) => (cardRefs.current[index] = el)}
                    >
                      <h2 className={styles.conHead}>
                        {item.key} - {item.Label}
                      </h2>
                      <p className={styles.para}>{item.para}</p>
                      <div className={styles.conImgPara}>
                        <Image
                          src={item.img ? item.img : "/image/favicon.webp"}
                          alt={item.Label}
                          sizes="{max-width:768px} 384px, 640px"
                          width={335}
                          height={187}
                          className={styles.conImgWrapper}
                        />
                        <p className={`${styles.para} `}>{item.para2}</p>
                      </div>
                      <hr className="border-gray-400" />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;
