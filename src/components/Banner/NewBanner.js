import React, { useEffect, useState } from "react";
import BannerImager from "../../../public/image/newBanner.webp";
// import BannerImager from "../../../public/image/body-Bg3.webp ";
import Image from "next/image";
import Link from "next/link";

const ModernDentalHero = ({ divRef }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toform = () => {
    if (divRef) {
      divRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated circles */}
        <div
          className={`absolute w-64 h-64 rounded-full bg-gradient-to-r from-green-200 to-blue-200 opacity-40 blur-xl transition-all duration-1000 ease-in-out ${
            isLoaded ? "top-1/4 left-1/3" : "-left-20 -top-20"
          }`}
          style={{ transform: `translateY(${scrollPosition * 0.1}px)` }}
        ></div>
        <div
          className={`absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-100 to-green-100 opacity-30 blur-xl transition-all duration-1500 delay-300 ease-in-out ${
            isLoaded ? "top-1/2 right-1/4" : "right-full top-full"
          }`}
          style={{ transform: `translateY(${scrollPosition * -0.05}px)` }}
        ></div>
        <div
          className={`absolute w-80 h-80 rounded-full bg-gradient-to-r from-teal-100 to-blue-100 opacity-20 blur-xl transition-all duration-1500 delay-500 ease-in-out ${
            isLoaded ? "bottom-1/4 right-1/3" : "right-full bottom-full"
          }`}
          style={{ transform: `translateY(${scrollPosition * 0.08}px)` }}
        ></div>

        {/* Animated tooth icons */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute text-blue-100 transition-all duration-1000 delay-${
              i * 100
            } ${isLoaded ? "opacity-20" : "opacity-0"}`}
          >
            <svg
              width={40 + i * 5}
              height={40 + i * 5}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-6.02 2.5c-.5-.75-.84-1.61-.98-2.5h2c.14.89.5 1.75 1 2.5l-2.02 2.5c-.5-.75-.84-1.61-.98-2.5h-2c.16-3.06 1.72-5.8 4.02-7.5L9 6.5C8.5 5.75 8.16 4.89 8.02 4h-2c.16 3.06 1.72 5.8 4.02 7.5L8.02 14c-.14-.89-.5-1.75-1-2.5l-2.02-2.5c.14.89.5 1.75 1 2.5L8.02 14c.5.75.84 1.61.98 2.5h2c-.16-3.06-1.72-5.8-4.02-7.5L9 6.5c.5.75.84 1.61.98 2.5h2c-.16-3.06-1.72-5.8-4.02-7.5L5.98 4c.14.89.5 1.75 1 2.5L9 9c-.5-.75-.84-1.61-.98-2.5h-2c.16 3.06 1.72 5.8 4.02 7.5L6.02 16.5z" />
            </svg>
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative pt-20 md:pt-0 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center min-h-screen">
          {/* Left Column */}
          <div className="w-full md:w-1/2 py-12 md:py-24">
            <h1
              className={`text-5xl md:text-6xl font-bold leading-tight text-gray-800 mb-6 transition-all duration-700 ${
                isLoaded
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 opacity-0"
              }`}
            >
              Your Smile
              <br />
              <span className="text-green-500">Our Priority</span>
            </h1>

            <p
              className={`text-lg text-gray-600 mb-8 max-w-lg transition-all duration-700 delay-300 ${
                isLoaded
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 opacity-0"
              }`}
            >
              Experience world-class dental care at Gurugram&apos;s most
              advanced clinic. Our team of specialists uses cutting-edge
              technology to provide exceptional treatments with your comfort in
              mind.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-500 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <button
                onClick={() => toform()}
                className="bg-green-500 text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center transition-all duration-300 hover:bg-green-600 hover:shadow-lg group"
              >
                Book Appointment
                <svg
                  className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </button>

              <Link
                href={"/Service"}
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium flex items-center justify-center transition-all duration-300 hover:border-green-500 hover:text-green-500"
              >
                Our Services
              </Link>
            </div>

            <div
              className={`flex items-center mt-12 gap-6 transition-all duration-700 delay-700 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-green-500"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2a9 9 0 019 9c0 4.95-2.77 7.55-5.5 9.82A32.47 32.47 0 0112 23a32.47 32.47 0 01-3.5-2.18C5.77 18.55 3 15.95 3 11a9 9 0 019-9z" />
                    </svg>
                  </div>
                ))}
              </div>
              <div>
                <div className="text-gray-700 font-medium">
                  2000+ Happy Patients
                </div>
                <div className="text-yellow-500 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 relative">
            <div
              className={`relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-1000 transform ${
                isLoaded
                  ? "translate-x-0 opacity-100"
                  : "translate-x-20 opacity-0"
              }`}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/30 to-blue-500/20 z-10"></div>

              {/* Main image */}
              <div className="aspect-[4/3] bg-gray-100 relative p-3">
                <Image
                  src={BannerImager}
                  alt="Dental care professionals"
                  className="w-full h-full object-cover"
                />

                {/* Floating elements */}
                <div
                  className={`absolute top-6 left-6 bg-white/90 backdrop-blur rounded-lg p-4 shadow-lg z-20 transition-all duration-700 delay-300 ${
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-10 opacity-0"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-green-100 rounded-full text-green-500">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-gray-800">
                        Modern Equipment
                      </div>
                      <div className="text-sm text-gray-600">
                        Latest dental technology
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`absolute bottom-6 right-6 bg-white/90 backdrop-blur rounded-lg p-4 shadow-lg z-20 transition-all duration-700 delay-600 ${
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-100 rounded-full text-blue-500">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-gray-800">
                        Expert Dentists
                      </div>
                      <div className="text-sm text-gray-600">
                        Specialized care for you
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div
              className={`absolute -bottom-6 -left-6 md:-left-12 bg-white rounded-xl shadow-xl p-6 z-30 transition-all duration-1000 delay-700 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              <div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500 ">24+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Shape Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 200" className="w-full">
          <path
            fill="#dcfce7"
            fillOpacity="1"
            d="M0,160L48,144C96,128,192,96,288,90.7C384,85,480,107,576,112C672,117,768,107,864,101.3C960,96,1056,96,1152,96C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            className={`transition-all duration-1000 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          />
        </svg>
      </div>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes float-0 {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          100% {
            transform: translate(10px, -10px) rotate(5deg);
          }
        }
        @keyframes float-1 {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          100% {
            transform: translate(-8px, 12px) rotate(-10deg);
          }
        }
        @keyframes float-2 {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          100% {
            transform: translate(15px, 5px) rotate(8deg);
          }
        }
        @keyframes float-3 {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          100% {
            transform: translate(-12px, -8px) rotate(-15deg);
          }
        }
        @keyframes float-4 {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          100% {
            transform: translate(8px, 15px) rotate(12deg);
          }
        }
        @keyframes float-5 {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          100% {
            transform: translate(-10px, 10px) rotate(-5deg);
          }
        }
      `}</style>
    </div>
  );
};

export default ModernDentalHero;
