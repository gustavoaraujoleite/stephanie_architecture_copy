import Carousel from "../UI/carousel";

export default function CarouselContainer() {
  return (
    <div>
      <div className="text-[32px] lg:text-[42px] font-bold font-nunito text-black flex justify-center">
        Projetos ST
      </div>

      <div className="w-full lg:w-[60%] h-full mt-4">
        <Carousel />
      </div>
    </div>
  );
}
