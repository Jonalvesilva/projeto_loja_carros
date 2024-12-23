import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { CarFrontIcon } from "lucide-react";
import UserClerkLoginButton from "@/server_actions/UserClerkLoginButton";

export default async function Header() {
  return (
    <nav className="h-[5rem] bg-[#016ea7] flex items-center">
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="w-full flex items-center justify-between px-6 xl:justify-center xl:gap-x-[100px] xl:px-0">
          <div className="flex items-center justify-between gap-x-2">
            <Image
              src="/logo.png"
              alt="logo"
              height={120}
              width={120}
              className="relative bottom-1"
            />
            <p className="text-3xl text-white relative bottom-1">BestAuto</p>
          </div>
          <div className="hidden xl:flex items-center">
            <div className="flex items-center gap-x-6 relative bottom-[2px]">
              <Link href="/" className="text-2xl text-white">
                Alugar
              </Link>
              <Link href="/" className="text-2xl text-white">
                Comprar
              </Link>
              <Link href="/" className="text-2xl text-white">
                Quem Somos
              </Link>
              <Link href="/" className="text-2xl text-white">
                Atendimento
              </Link>
            </div>
            <div className="border-l-2 border-white flex flex-col items-start pl-2 ml-5">
              <Link href="/">
                <span className="text-md text-white inline-flex">
                  <CarFrontIcon size={25} className="text-white pr-2" />
                  Minhas Reservas
                </span>
              </Link>

              <UserClerkLoginButton />
            </div>
          </div>
          <div className="flex items-center xl:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}
