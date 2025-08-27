"use client";
import { QUESTIONS } from "./utils/question";
import { useState } from "react";

import Image from "next/image";
import PersonalImage from "../../../../public/images/faq_image.webp";
import Accordion from "../UI/accordion";
import useWindowDimensions from "@/app/hooks/useWindowDimensions";

export default function FAQContainer() {
  const [accordionId, setAccordionId] = useState<number | null>(null);
  const { width } = useWindowDimensions();
  return (
    <section className="flex flex-col md:flex-row md:items-center">
      {width && width >= 768 && (
        <div className="relative w-full h-[500px] md:h-[720px] rounded-2xl max-w-[460px]">
          <Image
            src={PersonalImage}
            alt="Personal Image"
            fill
            className="rounded-2xl object-cover"
            sizes="(min-width: 1600px) 460px, (min-width: 1400px) 380px, (min-width: 1210px) 280px, (min-width: 940px) 220px, 200px"
          />
          <div className="absolute top-0 right-0 h-full w-[76%] bg-gradient-to-r from-transparent to-primary" />
        </div>
      )}

      <div className="z-10 md:ml-[-8rem] w-full  flex flex-col font-nunito">
        {width && width >= 768 && (
          <div>
            <p className="text-secondary text-[26px] font-semibold">FAQ</p>
            <div className="text-black text-[38px] font-semibold">
              <p>Perguntas frequentes</p>
            </div>
          </div>
        )}

        <div className="mt-2 relative w-full border-primary border-[2px] rounded-2xl p-6 lg:p-8 flex flex-col gap-4">
          {width && width < 768 && (
            <div>
              <p className="text-black text-[26px] font-semibold">FAQ</p>
              <div className="text-white text-[38px] font-semibold">
                <p>Perguntas frequentes</p>
              </div>
            </div>
          )}
          <div className="absolute w-full inset-0 bg-secondary opacity-75 pointer-events-none rounded-2xl -z-10"></div>

          {QUESTIONS.map((question) => {
            return (
              <div key={question.id}>
                <Accordion
                  question={question.question}
                  answer={question.answer}
                  isOpen={question.id === accordionId}
                  onClick={() => {
                    if (accordionId === question.id) {
                      return setAccordionId(null);
                    } else {
                      setAccordionId(question.id);
                    }
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
