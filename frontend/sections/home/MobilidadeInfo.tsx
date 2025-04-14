import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components_shadcn/ui/select";
import Link from "next/link";

export default function MobilidadeInfo() {
  return (
    <section className="hidden xl:flex xl:flex-col xl:px-10 bg-gray-100 lg:items-center pb-16">
      <div className="py-12">
        <h2 className="text-5xl text-[#0066c2]">
          Conheça nossas soluções de mobilidade
        </h2>
        <div className="h-1 mt-5 w-28 bg-blue-500 mx-auto"></div>
      </div>
      <div className="w-full  flex items-center justify-between max-w-screen-xl py-2">
        <h1 className="w-full text-lg">
          Confira abaixo nossas soluções ou selecione ao lado o que você
          precisa:
        </h1>
        <InputSelect />
      </div>
      <div className="w-full grid grid-cols-2 gap-x-6 items-center justify-between max-w-screen-xl my-10">
        <div className="w-full h-full rows-span-2">
          <img
            src="/mobilidade/1.jpg"
            className="h-full w-full rounded-xl border border-gray-300"
          />
        </div>
        <div className="w-full h-full flex flex-col justify-between gap-y-4">
          <div className="w-full h-full">
            <img
              src="/mobilidade/2.png"
              className="h-full rounded-xl border border-gray-300"
            />
          </div>
          <div className="w-full h-full">
            <img
              src="/mobilidade/3.png"
              className="h-full rounded-xl border border-gray-300"
            />
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-4 gap-x-16 max-w-screen-xl my-2">
        <div className="h-[300px]  bg-white rounded-xl  shadow-sm shadow-gray-900 flex flex-col items-center justify-evenly">
          <img src="/mobilidade/car1.png" className="w-32" />
          <p className="text-center px-6">
            Aluguel de carro por mínimo de 30 dias, mais prático e barato que
            pagar a diária
          </p>
          <Link
            href="/"
            className="text-[#0066c2] text-lg underline font-semibold"
          >
            Conheça
          </Link>
        </div>
        <div className="h-[300px]  bg-white rounded-xl  shadow-sm shadow-gray-900 flex flex-col items-center justify-evenly">
          <img src="/mobilidade/car2.png" className="w-32" />
          <p className="text-center px-6">
            Livre é seu carro 0km. Com mensalidades fixas, você roda de carro
            zero e fica Livre de burocracias.
          </p>
          <Link
            href="/"
            className="text-[#0066c2] text-lg underline font-semibold"
          >
            Conheça
          </Link>
        </div>
        <div className="h-[300px]  bg-white rounded-xl  shadow-sm shadow-gray-900 flex flex-col items-center justify-evenly">
          <img src="/mobilidade/car3.png" className="w-32" />
          <p className="text-center px-6">
            Aproveite as tarifas diferenciadas de aluguel de curto ou longo
            prazo.
          </p>
          <Link
            href="/"
            className="text-[#0066c2] text-lg underline font-semibold"
          >
            Conheça
          </Link>
        </div>
        <div className="h-[300px]  bg-white rounded-xl  shadow-sm shadow-gray-900 flex flex-col items-center justify-evenly">
          <img src="/mobilidade/car4.png" className="w-32" />
          <p className="text-center px-6">
            Troque o seu usado por um seminovo BestAuto e garanta as melhores
            condições.
          </p>
          <Link
            href="/"
            className="text-[#0066c2] text-lg underline font-semibold"
          >
            Conheça
          </Link>
        </div>
      </div>
    </section>
  );
}

const InputSelect = () => (
  <Select>
    <SelectTrigger className="rounded-xl border-gray-400">
      <SelectValue placeholder="Selecione aqui a melhor opção para sua necessidade" />
    </SelectTrigger>
    <SelectContent className="bg-white">
      <SelectItem value="light" className="cursor-pointer">
        Plano de assinatura mensal de carros
      </SelectItem>
      <SelectItem value="dark" className="cursor-pointer">
        Aluguel de carros para a minha empresa
      </SelectItem>
      <SelectItem value="system" className="cursor-pointer">
        Escolha seu seminovo
      </SelectItem>
    </SelectContent>
  </Select>
);
