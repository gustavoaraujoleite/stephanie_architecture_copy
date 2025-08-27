import Image from "next/image";
import MobileBGImg from "../../../../public/images/background_mobile.webp";

export default function MobileHeader() {
  return (
    <section className="relative w-full h-full">
      <figure className="relative w-full h-full">
        <Image
          src={MobileBGImg}
          alt="mobile background"
          fill
          className="object-cover z-0"
          priority
          sizes="(max-width: 640px) 100vw, 640px"
        />
      </figure>
    </section>
  );
}
