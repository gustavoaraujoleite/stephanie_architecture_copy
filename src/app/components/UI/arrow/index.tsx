import Image from "next/image";
import arrowIcon from "../../../../../public/icons/chevron_arrow.svg";

type Props = {
  isLeft?: boolean;
  onClick?: () => void;
};
export default function ArrowButton({ isLeft, onClick }: Props) {
  return (
    <button
      className={`relative w-[30px] h-[30px] ${isLeft && "rotate-180"}`}
      onClick={onClick}
    >
      <Image
        alt="icone de seta"
        src={arrowIcon}
        fill
        className="object-contain"
      />
    </button>
  );
}
