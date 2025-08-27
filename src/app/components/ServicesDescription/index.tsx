import ServiceDescriptionComponent from "../ServiceDescriptionComponent";
export default function ServicesDescription() {
  const serviceDescriptionList = [
    {
      id: 1,
      title: "Autoridade Comprovada",
      content:
        "Reconhecida no mercado de alto padrão, entrego soluções de valor que inspiram confiança.",
    },
    {
      id: 2,
      title: "Projeto Exclusivo",
      content:
        "Seu projeto é único, pensado exclusivamente para seu estilo de vida e sua família.",
    },
    {
      id: 3,
      title: `Segurança \nTotal`,
      content:
        "Você toma decisões embasadas, com transparência nos custos e clareza em cada etapa.",
    },
    {
      id: 4,
      title: "Resultado Concreto",
      content:
        "Transformo sonhos em espaços reais que valorizam sua casa e sua história.",
    },
  ];

  return (
    <section
      className="font-nunito w-full flex flex-col gap-6 sm:gap-12 items-center"
      id="service-description"
    >
      <div className="max-w-[480px] flex flex-col w-full items-center">
        <p className="text-[18px] xl:text-[22px] text-secondary">
          Por que contratar,
        </p>
        <p className="text-center text-[32px] xl:text-[42px] font-semibold">
          Um projeto de arquitetura de interiores?
        </p>
      </div>

      <div className="max-w-[72%] flex flex-col w-full gap-4 items-center sm:flex-row sm:justify-between sm:flex-wrap md:gap-4">
        {serviceDescriptionList.map((item, index) => {
          return (
            <div key={item.id}>
              <ServiceDescriptionComponent
                title={item.title}
                content={item.content}
                serviceIndex={index + 1}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
