import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export default function MainContainer({ children }: Props) {
  return (
    <section
      className={`w-full h-fit py-8 px-4 md:px-8 flex flex-col items-center  bg-primary `}
    >
      <div className="max-w-[1400px] h-full flex flex-col gap-12 md:gap-24">{children}</div>
    </section>
  );
}
