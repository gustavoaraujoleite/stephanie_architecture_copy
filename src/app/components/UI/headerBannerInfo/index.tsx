import { ReactElement } from "react";

type Props = {
  leftSubject: ReactElement;
  rightSubject: string;
};

export default function HeaderBannerInfo({ leftSubject, rightSubject }: Props) {
  return (
    <div className="text-white flex gap-4 items-center max-w-[160px] h-[120px]">
      <div>{leftSubject}</div>
      <div className="text-[11px] sm:text-[14px] font-nunito">
        {rightSubject}
      </div>
    </div>
  );
}
