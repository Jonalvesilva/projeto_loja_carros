import Link from "next/link";
export default function RentInfo() {
  return (
    <section className="flex flex-col items-center justify-center h-[300px] gap-y-7 px-4 max-w-screen-xl xl:mx-auto xl:gap-y-8">
      <h1 className="text-[#0066c2] text-center text-lg sm:text-3xl lg:text-4xl xl:text-5xl">
        BestAuto, as melhores ofertas em aluguel de carros
      </h1>
      <h2 className="text-center sm:text-lg">
        Atendimento de qualidade e a melhor experiência em aluguel de carros com
        a BestAuto.
      </h2>
      <Link
        href="/"
        className="bg-[#0066c2] px-10 py-2 rounded-full text-white font-semibold"
      >
        Quero Alugar Agora
      </Link>
    </section>
  );
}
