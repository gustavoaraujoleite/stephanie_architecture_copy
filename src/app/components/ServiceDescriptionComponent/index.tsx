import Image from "next/image";
import GoldenArrow from "../../../../public/icons/golden_arrow.svg";
type Props = {
  serviceIndex: number;
  title: string;
  content: string;
};
export default function ServiceDescriptionComponent({
  serviceIndex,
  title,
  content,
}: Props) {
  return (
    <div className=" w-[170px] font-nunito flex flex-col gap-2">
      <div className="text-[22px] text-golden flex justify-between items-center">
        <p>{serviceIndex}</p>
        <div className="relative h-[10px] w-[120px]">
          <Image
            src={GoldenArrow}
            alt="arrow icon"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1 flex-wrap whitespace-pre-line">
        <p className="text-[22px] font-semibold">{title}</p>
        <p className="text-[14px]">{content}</p>
      </div>
    </div>
  );
}
