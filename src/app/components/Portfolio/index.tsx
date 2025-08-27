"use client";
import useWindowDimensions from "@/app/hooks/useWindowDimensions";
import CarouselContainer from "../CarouselContainer";
import DesktopImageSet from "../DesktopImageSet";

export default function Portfolio() {
  const { width, height } = useWindowDimensions();
  if (!width || !height) {
    return null;
  }
  return (
    <section className="mt-6" id="portfolio-container">
      {width < 768 ? <CarouselContainer /> : <DesktopImageSet />}
    </section>
  );
}
