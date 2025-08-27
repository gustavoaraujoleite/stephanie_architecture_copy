import Image from "next/image";
import BackgroundImage from "../../../../public/images/background_image.webp";

export default function DesktopHeader() {
  return (
    <div className="relative w-full h-[90vh]">
      <Image
        src={BackgroundImage}
        alt="background image"
        fill
        className="object-cover object-top"
        priority
        sizes="(max-width: 640px) 0px, 100vw"
      />
    </div>
  );
}
