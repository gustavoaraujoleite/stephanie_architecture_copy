import AboutFooter from "./AboutFooter";
import AboutHeader from "./AboutHeader";
import AboutImg from "./AboutImg";

export default function AboutMe() {
  return (
    <section className="md:flex md:justify-between font-nunito" id="about-me-container">
      <section className="w-full flex flex-col items-center gap-4 md:justify-evenly md:w-[50%] md:min-h-[620px] lg:min-h-[420px]">
        <div className="mb-2 md:mb-0">
          <AboutHeader />
        </div>
        <div className="w-full px-12 md:hidden">
          <AboutImg />
        </div>
        <div className="mt-2 md:mt-0">
          <AboutFooter />
        </div>
      </section>
      <section className="hidden md:flex md:items-center">
        <div>
          <AboutImg />
        </div>
      </section>
    </section>
  );
}
