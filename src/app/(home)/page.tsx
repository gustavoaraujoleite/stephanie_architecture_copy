import AboutMe from "../components/About";
import ContactLogo from "../components/ContactLogo";
import FAQContainer from "../components/FAQContainer";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import ServicesDescription from "../components/ServicesDescription";
import Testimonials from "../components/Testimonials";
import MainContainer from "../components/UI/mainContainer";

export default function HomePage() {
  return (
    <div className="w-full h-full">
      <Header />
      <ContactLogo />
      <MainContainer>
        <AboutMe />
        <ServicesDescription />
        <Portfolio />
        <Testimonials />
        <FAQContainer />
        <Form />
      </MainContainer>
      <Footer />
    </div>
  );
}
