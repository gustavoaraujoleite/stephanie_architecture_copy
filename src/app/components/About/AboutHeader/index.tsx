export default function AboutHeader() {
  return (
    <div className="flex flex-col items-center md:items-start gap-4">
      <div>
        <p className="text-black text-[32px] lg:text-[42px] font-bold">
          Sobre mim
        </p>
      </div>
      <section className="text-black text-[16px] text-center md:text-start flex flex-col gap-6">
        <div>
          Focando em projetos voltados para a área de interiores, Stephanie
          Toloi tem o comprometimento como diretriz do seu trabalho. Sejam
          projetos residenciais, corporativos ou comerciais, o escritório foca
          em obter a melhor solução funcional e estética visando a qualidade das
          entregas e a excelência no atendimento.
        </div>
        <div>
          Os projetos nascem a partir da mescla das ideias inovadoras e
          contemporâneas do escritório com a personalidade e identidade única de
          cada cliente. A partir dessa interação a criatividade acontece dando
          vida à projetos autênticos e personalizados. A intenção é unir
          conceito e qualidade, garantindo a entrega de projetos únicos para
          cliente únicos.
        </div>
      </section>
    </div>
  );
}
