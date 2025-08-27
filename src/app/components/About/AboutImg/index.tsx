import Image from "next/image";
import StephanieAboutImg from "../../../../../public/images/sobre_mim_pic.webp";

export default function AboutImg() {
  return (
    <div>
      <div className="relative shadow-lg rounded-2xl h-auto w-full md:h-[620px] md:w-[310px] xl:w-[380px] xl:h-[480px] aspect-[9/16] md:aspect-none">
        <Image
          src={StephanieAboutImg}
          alt="stephanie about me image"
          fill
          className="object-cover rounded-2xl shadow-xl"
          quality={100}
          priority
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 310px, 380px"
        />
      </div>
    </div>
  );
}
