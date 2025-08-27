"use client";
import { useState } from "react";
import Image from "next/image";
import carousel_img_1 from "../../../../../public/images/carousel_1.webp";
import carousel_img_2 from "../../../../../public/images/carousel_2.webp";
import carousel_img_3 from "../../../../../public/images/carousel_3.webp";
import carousel_img_4 from "../../../../../public/images/carousel_4.webp";
import carousel_img_5 from "../../../../../public/images/carousel_5.webp";
import carousel_img_6 from "../../../../../public/images/carousel_6.webp";
import carousel_img_7 from "../../../../../public/images/carousel_7.webp";
import filledCircle from "../../../../../public/icons/filled_circle.svg";
import emptyCircle from "../../../../../public/icons/empty_circle.svg";
import ArrowButton from "../arrow";

export default function Carousel() {
  const [imgIndex, setImgIndex] = useState<number>(0);
  const options = [
    { id: 1, address: carousel_img_1 },
    { id: 2, address: carousel_img_2 },
    { id: 3, address: carousel_img_3 },
    { id: 4, address: carousel_img_4 },
    { id: 5, address: carousel_img_5 },
    { id: 6, address: carousel_img_6 },
    { id: 7, address: carousel_img_7 },
  ];

  function previousImgHandler() {
    if (imgIndex === 0) {
      setImgIndex(6);
    } else {
      setImgIndex(imgIndex - 1);
    }
  }
  function nextImgHandler() {
    if (imgIndex === 6) {
      setImgIndex(0);
    } else {
      setImgIndex(imgIndex + 1);
    }
  }
  return (
    <section>
      <figure className="relative w-full aspect-video rounded-md">
        <Image
          src={options[imgIndex].address}
          alt="ícone do Carousel"
          fill
          className="object-cover z-0 rounded-md"
          quality={100}
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw"
        />

        <div className="flex absolute gap-1.5 bottom-4 right-0 left-0 items-center justify-center">
          {options.map((item, index: number) => {
            return (
              <button
                key={item.id}
                className="relative w-[10px] h-[10px] md:w-[18px] md:h-[18px]"
                onClick={() => setImgIndex(index)}
              >
                <Image
                  alt="icone de circulo"
                  src={imgIndex === index ? filledCircle : emptyCircle}
                  fill
                  className="object-contain"
                />
              </button>
            );
          })}
        </div>
        <div className="mx-2.5 flex absolute z-30 right-0 left-0 bottom-[46%] justify-between">
          <div>
            <ArrowButton isLeft onClick={previousImgHandler} />
          </div>
          <div onClick={nextImgHandler}>
            <ArrowButton />
          </div>
        </div>
      </figure>
    </section>
  );
}
