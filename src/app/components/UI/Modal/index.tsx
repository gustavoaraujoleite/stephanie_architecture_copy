"use client";
import Image, { StaticImageData } from "next/image";
import CloseIcon from "../../../../../public/icons/close.svg";
type Props = {
  src: StaticImageData | null;
  onClick: () => void;
};

export default function Modal({ src, onClick }: Props) {
  return (
    <section
      className="fixed inset-0 bg-[#11121a] bg-opacity-55 backdrop-blur-sm z-50"
      onClick={onClick}
    >
      <div className="flex items-center justify-center h-full">
        <div className=" rounded-3xl flex items-start px-4">
          <Image
            src={src ?? ""}
            alt="project image"
            width={800}
            height={600}
            className="rounded-3xl"
          />
          <button
            className="ml-[-2.75rem] mt-[1rem] backdrop-blur-sm bg-[#11121a] bg-opacity-10 rounded-full p-[2px]"
            onClick={onClick}
          >
            <Image alt="close icon" src={CloseIcon} />
          </button>
        </div>
      </div>
    </section>
  );
}
