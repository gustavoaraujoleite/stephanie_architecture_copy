import Image from "next/image";
import FeedbackImg_1 from "../../../../public/images/Feedback_1.webp";
import FeedbackImg_2 from "../../../../public/images/Feedback_2.webp";
import FeedbackImg_3 from "../../../../public/images/Feedback_3.webp";
import FeedbackImg_4 from "../../../../public/images/Feedback_4.webp";

export default function Testimonials() {
  const imageList = [
    { id: 1, src: FeedbackImg_1 },
    { id: 2, src: FeedbackImg_2 },
    { id: 3, src: FeedbackImg_3 },
    { id: 4, src: FeedbackImg_4 },
  ];
  return (
    <section className="w-full flex flex-col items-center gap-12">
      <div
        className={`text-black font-nunito w-full max-w-[460px] flex flex-col text-center justify-center`}
      >
        <p className="text-[32px] xl:text-[42px] font-semibold">Depoimentos</p>
        <p className="text-[14px] xl:text-[18px] ">
          O que meus clientes dizem sobre o meu trabalho:
        </p>
      </div>
      <div className="flex flex-wrap gap-y-12 gap-x-6 items-center justify-center lg:grid lg:grid-cols-2">
        {imageList.map((image) => {
          return (
            <div
              key={image.id}
              className="relative w-full max-w-[280px] sm:max-w-[340px] h-[280px] sm:h-[320px] aspect-square shadow-sm rounded-3xl hover:shadow-xl transition-all ease-in-out delay-75"
            >
              <Image
                src={image.src}
                alt="project image"
                fill
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 340px"
                className="rounded-3xl object-fill hover:shadow-xl transition-all ease-in-out delay-75 shadow-sm "
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
