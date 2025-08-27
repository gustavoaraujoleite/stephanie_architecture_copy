import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import carousel_img_1 from "../../../../public/images/carousel_1.webp";
import carousel_img_2 from "../../../../public/images/carousel_2.webp";
import carousel_img_3 from "../../../../public/images/carousel_3.webp";
import carousel_img_4 from "../../../../public/images/carousel_4.webp";
import carousel_img_5 from "../../../../public/images/carousel_5.webp";
import Modal from "../UI/Modal";

export default function DesktopImageSet() {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [modalSrc, setModalSrc] = useState<StaticImageData | null>(null);

  const imageList = [
    { id: 1, src: carousel_img_1 },
    { id: 2, src: carousel_img_2 },
    { id: 3, src: carousel_img_3 },
    { id: 4, src: carousel_img_4 },
    { id: 5, src: carousel_img_5 },
  ];

  function modalVisibilityHandler(src: StaticImageData) {
    setModalSrc(src);
    setIsModalVisible(true);
  }

  function closeModalHandler() {
    setIsModalVisible(false);
    setModalSrc(null);
  }
  return (
    <section className="grid grid-cols-3 w-full gap-y-12 gap-x-6 place-items-center">
      {isModalVisible && <Modal src={modalSrc} onClick={closeModalHandler} />}
      <div
        className={`text-black font-nunito w-full max-w-[460px] flex flex-col  justify-center`}
      >
        <p className="text-[32px] xl:text-[42px] font-semibold">Projetos ST</p>
        <p className="text-[14px] xl:text-[18px] text-start">
          Explore alguns dos projetos residenciais que transformam ambientes e
          proporcionam resultados reais:
        </p>
      </div>

      {imageList.map((image) => {
        return (
          <button
            key={image.id}
            className="relative w-full max-w-[460px] aspect-square shadow-sm rounded-3xl hover:shadow-xl transition-all ease-in-out delay-75"
            onClick={() => modalVisibilityHandler(image.src)}
          >
            <Image
              src={image.src}
              alt="project image"
              fill
              sizes="(min-width: 1600px) 460px, (min-width: 1400px) 380px, (min-width: 1210px) 280px, (min-width: 940px) 220px, 200px"
              className="rounded-3xl object-cover hover:shadow-xl transition-all ease-in-out delay-75 shadow-sm "
            />
          </button>
        );
      })}
    </section>
  );
}
