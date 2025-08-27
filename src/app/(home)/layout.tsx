import { ReactNode } from "react";

type Props = Readonly<{
  children: ReactNode;
}>;

export default function HomeLayout({ children }: Props) {
  return (
    <section className="w-full h-full">
      <div className="h-full w-full">{children}</div>
    </section>
  );
}
