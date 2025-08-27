"use client";
import { useState } from "react";
import Button from "../UI/button/button";
import ContactInput from "../UI/contactInput";
import ContactAreaInput from "../UI/contactAreaInput";

export type DataType = {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  propertyType: string;
  metric: string;
};
export default function Form() {
  const [userName, setUserName] = useState<string>("");
  const [userMessage, setUserMessage] = useState<string>("");

  function openContactClient() {
    const message = `
      Olá Stephanie, tudo bem?
   
    O meu nome é ${userName}.
    ${userMessage}
    `.trim();
    const whatsAppLink = `https://wa.me/${
      process.env.NEXT_PUBLIC_CLIENT_NUMBER
    }?text=${encodeURIComponent(message)}`;
    window.open(whatsAppLink, "_blank");
    setUserMessage("");
    setUserName("");
  }

  return (
    <section id="contact-form" className="relative place-items-center font-nunito flex flex-col border-primary border-[2px] rounded-2xl p-8 sm:p-10">
      <div className="absolute inset-0 bg-secondary opacity-75 pointer-events-none rounded-2xl"></div>

      <div className="sm:max-w-[90%] lg:max-w-[75%]  z-10 flex flex-col gap-4 sm:flex-row sm:justify-center sm:items-start sm:gap-12">
        <div className="sm:max-w-[50%] flex flex-col items-center sm:items-start">
          <p className="text-[32px] lg:text-[42px] font-semibold font-nunito text-black">
            Contato
          </p>
          <p className="text-black text-[12px] sm:text-[14px] text-center sm:text-start">
            Basta preencher nosso formulário de contato ou agendar uma reunião
            inicial gratuita. nessa conversa, entenderemos suas necessidades e
            forneceremos um proposta personalizada
          </p>
        </div>
        <div className="z-10 flex flex-col items-center sm:items-start gap-4 sm:w-full">
          <div className="flex flex-col gap-2 w-full">
            <ContactInput
              ariaLabel="Coletar nome"
              inputName="nome"
              inputType="text"
              placeholder="*Nome"
              required
              onChange={(data) => setUserName(data)}
              value={userName}
            />
            <ContactAreaInput
              ariaLabel="Coletar mensagem"
              inputName="mensagem"
              placeholder="*Mensagem"
              required
              onChange={(data) => setUserMessage(data)}
              value={userMessage}
            />
          </div>
          <div className="w-full max-w-[50%] sm:max-w-[56%] ">
            <Button
              text="Enviar"
              onClick={openContactClient}
              disabled={userName === "" || userMessage === ""}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
