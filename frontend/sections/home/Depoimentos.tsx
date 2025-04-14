type CardProps = {
  image: string;
  className?: string;
  cardTitle: string;
  cardDescription: string;
};

export default function Depoimentos() {
  return (
    <>
      <section className="bg-white flex items-center justify-center py-6 mb-12">
        <div className="w-full">
          <div className="py-12 flex flex-col items-center">
            <h2 className="text-5xl text-center text-[#0066c2]">
              Depoimentos de nossos clientes
            </h2>
            <div className="h-1 mt-5 w-28 bg-blue-500 mx-auto"></div>
            <span className="py-6 text-2xl font-semibold text-gray-800">
              O que eles estão dizendo
            </span>
          </div>

          <div className="grid justify-items-center sm:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto item">
            <Card
              cardTitle="Isa Campos"
              cardDescription="Atendimento excelente, funcionários aptos em resolver qualquer problema de forma imediata, como opção de upgrade quando não há opção de escolha de veículos em alta demanda. Método de reserva no aplicativo é muito fácil e rápido."
              image="depoimentos/isa-campos.png"
            />
            <Card
              cardTitle="Rafael  Beserra"
              cardDescription="Gosto muito da BestAuto, excelentes carros, atendimento humanizado, se tem algum problema resolvem na hora, fora que os valores condizem com a realidade perto de outras locadoras. E mais os descontos de até 25% são excelentes... Valeu BestAuto!"
              image="depoimentos/beserra.png"
            />
            <Card
              cardTitle="Luís Fernando"
              cardDescription="Pessoal sempre super atenciosos, comunicativos, respeitosos, com toda agilidade para entregar ao cliente um bom atendimento… Luís Fernando"
              image="depoimentos/luis.png"
              className="sm:col-span-2 lg:col-span-1"
            />
          </div>
        </div>
      </section>
    </>
  );
}

const Card = ({ image, cardTitle, cardDescription, className }: CardProps) => {
  return (
    <div className={`w-full max-w-[250px] ${className} h-full flex`}>
      <div className="flex flex-col justify-between p-4 rounded  w-full">
        <div className="flex flex-col items-center">
          <div className="rounded w-28 mb-4">
            <img src={image} alt={cardTitle} className="w-full" />
          </div>
          <h3 className="text-lg font-semibold text-center mb-2">
            {cardTitle}
          </h3>
          <p className="text-justify text-xs text-cyan-900 font-semibold">
            {cardDescription}
          </p>
        </div>
      </div>
    </div>
  );
};
