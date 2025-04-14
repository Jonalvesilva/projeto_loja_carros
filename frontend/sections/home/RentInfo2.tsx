import Link from "next/link";
export default function RentInfo2() {
  return (
    <section className="bg-[#016ea7] flex items-center justify-center py-6 xl:h-[150px]">
      <div className="w-[90%] max-w-screen-xl flex flex-col items-center gap-y-6 xl:flex-row xl:justify-between xl:px-2 xl:gap-y-0 xl:w-full">
        <h1 className="text-2xl text-white text-center xl:w-[65%] xl:text-justify">
          Mais de 180 lojas em todo o Brasil, com uma frota moderna e
          diversificada. Escolha a Unidas para a sua próxima viagem.
        </h1>

        <Link
          href="/"
          className="bg-[#00aadb] py-3 px-16 rounded-full text-white font-semibold"
        >
          Quero Alugar Agora
        </Link>
      </div>
    </section>
  );
}
