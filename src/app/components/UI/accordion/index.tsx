"use client";

type Props = {
  question: string;
  answer: string;
  onClick: () => void;
  isOpen: boolean;
};

export default function Accordion({
  question,
  answer,
  isOpen,
  onClick,
}: Props) {
  return (
    <div className="flex flex-col text-white w-full font-nunito">
      <button
        className="w-full flex items-start gap-2 font-bold text-[16px]"
        onClick={onClick}
      >
        <p>{!isOpen ? "+" : "-"}</p>
        <p className=" text-start">{question}</p>
      </button>

      <div
        className={`transition-opacity transition-scale duration-1000 ease-in-out
    ${
      isOpen
        ? "max-h-50 scale-y-100 opacity-100 mt-2 px-4"
        : "max-h-0  scale-y-0 opacity-0"
    }
  `}
      >
        <p className="text-[14px] italic">{answer}</p>
      </div>
    </div>
  );
}
