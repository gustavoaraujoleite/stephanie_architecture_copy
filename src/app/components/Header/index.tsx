"use client";
import { openContactClient } from "@/app/utils/getInContact";
import MobileHeader from "../MobileHeader";
import DesktopHeader from "../DesktopHeader";
import NavBar from "../NavBar";
import Button from "../UI/button/button";
import HeaderBannerContainer from "../HeaderBannerContainer";

export default function Header() {
  return (
    <section className="relative w-full h-full">
      <div className="hidden sm:block h-[90vh] w-full">
        <DesktopHeader />
      </div>

      <div className="block sm:hidden h-[92vh] w-full">
        <MobileHeader />
      </div>

      <div className="w-full absolute inset-0 bg-[#11121a] bg-opacity-50 sm:bg-opacity-40 z-10"></div>

      <section className="h-full px-4 md:px-8 z-50 py-8  absolute top-0 w-full sm:place-items-center">
        <div className="flex flex-col w-full max-w-[1400px] h-full">
          <NavBar />

          <section className="flex h-full sm:h-[80%] flex-col sm:items-start">
            <div className="flex sm:ml-[10%] mt-4 sm:mt-0 items-center flex-col h-full justify-between sm:justify-center pt-8 sm:pt-0 sm:max-w-[46%]">
              <div className="flex flex-col items-center whitespace-pre-line font-bold text-[28px] md:text-[32px] md:text-5xl font-nunito text-center text-gray-50">
                Sua história contada{"\n"}em um espaço
                <div
                  style={{ textWrap: "balance" }}
                  className=" flex flex-col my-4 whitespace-pre-line font-normal text-[15px] sm:text-[16px] font-nunito text-center text-gray-50"
                >
                  com um projeto que economiza seu tempo, protege seu
                  investimento e evita dores de cabeça.
                </div>
              </div>
              <div className="mt-4">
                <Button
                  text="Solicitar reunião"
                  onClick={openContactClient}
                  style="text-[18px] px-10 py-2.5 sm:py-4 shadow-lg hover:shadow-xl"
                />
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className="hidden sm:block z-10 py-4 absolute bg-[#11121a] bg-opacity-5 px-4 md:px-8 place-items-center w-full mt-[-152px] backdrop-blur-sm">
        <div className="max-w-[1400px] w-full">
          <HeaderBannerContainer />
        </div>
      </section>
    </section>
  );
}
