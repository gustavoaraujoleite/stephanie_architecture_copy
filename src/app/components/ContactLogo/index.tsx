"use client";
import { openContactClient } from "@/app/utils/getInContact";
import Image from "next/image";
import WhatsappLogo from "../../../../public/icons/whatsapp_logo.svg";
export default function ContactLogo() {

  return (
    <button onClick={openContactClient} className="z-50 fixed right-0 bottom-0 p-3 lg:p-8">
      <Image
        alt="Whatsapp icon"
        className="h-[44px] w-[44px] md:h-[48px] md:w-[48px] hover:scale-150 transition-all ease-in-out delay-75"
        src={WhatsappLogo}
      />
    </button>
  );
}
