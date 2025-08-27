import Image from "next/image";
import HeaderBannerInfo from "../UI/headerBannerInfo";
import CompassImg from "../../../../public/icons/compass.svg";
export default function HeaderBannerContainer() {
  function elementGenerator(value: string) {
    return (
      <div className="flex w-full font-nunito text-[32px] sm:text-[42px] font-bold">
        <div>+</div>
        <div>{value}</div>
      </div>
    );
  }

  function iconElementGenerator() {
    return (
      <div className="mr-[-10px]">
        <Image
          src={CompassImg}
          height={86}
          width={86}
          alt="ícone de compasso da arquiteta"
          color="#fff"
        />
      </div>
    );
  }
  const bannerInfoList = [
    { id: 1, subject: "anos de experiência", element: elementGenerator("12") },
    { id: 2, subject: "projetos entregues", element: elementGenerator("100") },
    {
      id: 3,
      subject: "do traço até a última almofada",
      element: iconElementGenerator(),
    },
  ];

  return (
    <div className="flex w-full flex-row justify-between z-0 items-center">
      {bannerInfoList.map((info, ) => {
        return (
          <div key={info.id}>
            <HeaderBannerInfo
              leftSubject={info.element}
              rightSubject={info.subject}
            />
          </div>
        );
      })}
    </div>
  );
}
