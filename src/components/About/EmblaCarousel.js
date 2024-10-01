"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

function EmblaCarousel() {
  const image = [
    "/image/webImages/about3img.webp",
    "/image/webImages/about2img.webp",
    "/image/webImages/About2img_.webp",
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [
    Autoplay({ delay: 2000 }),
  ]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container w-full ">
        {image.map((elem, index) => {
          return (
            <div
              className="embla__slide flex items-center justify-center"
              key={index}
            >
              <Image
                src={elem}
                width={180}
                height={310}
                alt="imges"
                sizes="(max-widht: 768px) 180px, 200px"
                className="w-[180px] md:w-[200px] h-auto border-2 border-black rounded-lg"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EmblaCarousel;
