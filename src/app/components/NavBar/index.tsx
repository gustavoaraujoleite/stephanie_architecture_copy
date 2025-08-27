"use client";
import { scrollToHandler } from "./utils/scrollToHandler";
import Image from "next/image";
import SteLogo from "../../../../public/images/STEPHANIE_TOLOI_logo branco.webp";
import NavButton from "../UI/navButton";

export default function NavBar() {
  const menuList = [
    { id: 1, title: "A Arquiteta", scrollTo: "about-me-container" },
    { id: 2, title: "Porque contratar", scrollTo: "service-description" },
    { id: 3, title: "Projetos", scrollTo: "portfolio-container" },
    { id: 4, title: "Contato", scrollTo: "contact-form" },
  ];
  return (
    <section className=" flex justify-start sm:justify-between sm:items-start">
      <div className="relative h-[44px] w-[140px] sm:w-[220px] sm:h-[68px] ">
        <Image
          src={SteLogo}
          alt="stephanie logo"
          fill
          className="object-fill z-0 md:ml-[-8px]"
          quality={100}
          loading="lazy"
          sizes="(max-width: 640px) 140px, 220px"
        />
      </div>

      <div className="hidden sm:flex items-center sm:gap-2 md:gap-4 lg:gap-6">
        {menuList.map((menu) => {
          return (
            <div key={menu.id}>
              <NavButton
                onClick={() => scrollToHandler(menu.scrollTo)}
                title={menu.title}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
