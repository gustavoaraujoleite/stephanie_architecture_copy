import Image from "next/image";
import Link from "next/link";
import InstaIcon from "../../../../public/icons/insta_icon.svg";
import PinterestIcon from "../../../../public/icons/pinterest_icon.svg";
import FacebookIcon from "../../../../public/icons/face_icon.svg";
import SteLogo from "../../../../public/images/STEPHANIE_TOLOI_logo branco.webp";

export default function Footer() {
  const socialMediaList = [
    {
      id: 1,
      href: "https://www.instagram.com/stephanietoloi/",
      alt: "instagram icon",
      src: InstaIcon,
    },
    {
      id: 2,
      href: "https://pin.it/4ORm5tYfz",
      alt: "pinterest icon",
      src: PinterestIcon,
    },
    {
      id: 3,
      href: "https://www.facebook.com/share/12DXChspn4e/?mibextid=wwXIfr",
      alt: "facebook icon",
      src: FacebookIcon,
    },
  ];
  return (
    <section className="bg-secondary font-nunito place-items-center gap-1 py-4  justify-center w-full px-4 md:px-8">
      <div className="w-full max-w-[640px] lg:max-w-[720px] xl:max-w-[800px] flex flex-col md:flex-row  md:justify-between items-center">
        <div className="relative h-[68px] w-[242px]">
          <Image
            src={SteLogo}
            alt="stephanie logo"
            fill
            className="object-fill z-0 md:ml-[-8px]"
            quality={100}
            loading="lazy"
            sizes="242px"
          />
        </div>
        <div className="text-primary text-[11px] sm:text-[12px] md:text-[15px]">
          <span>contato@stephanietoloi.com.br</span>
        </div>
        <div className="flex items-center gap-5 md:gap-4 mt-2.5 md:mt-0">
          {socialMediaList.map((media) => {
            return (
              <Link href={media.href} target="_blank" key={media.id}>
                <div className="relative h-[26px] w-[26px] sm:h-[32px] sm:w-[32px] hover:scale-125 transition-transform duration-200 ease-in-out">
                  <Image
                    alt={media.alt}
                    src={media.src}
                    fill
                    sizes="(max-width: 640px) 26px, 32px"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
