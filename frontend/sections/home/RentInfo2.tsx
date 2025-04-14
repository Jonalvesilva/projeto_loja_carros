import Link from "next/link";
export default function RentInfo2() {
  return (
    <section className="bg-[#016ea7] flex items-center justify-center h-[150px]">
      <div className="w-full max-w-screen-xl flex items-center justify-between">
        <h1 className="text-2xl text-white w-[65%]">
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
