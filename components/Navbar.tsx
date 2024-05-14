"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/logo.svg";
import { Bellefair } from "next/font/google";
import { useState } from "react";

const bellefair = Bellefair({ weight: "400", subsets: ["latin"] });

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-white h-[100px] border border-[#E5E9F2] px-4">
      <div className="h-full lg:max-w-[1140px] flex justify-between items-center mx-auto">
        <Link
          href="/"
          className={`${bellefair.className} flex items-center gap-[10px]`}
        >
          <Image src={Logo} alt="Cetpro Logo" width={64} height={64} />
          <p className="w-[180px] text-[8px] sm:w-[229px] md:w-[249px] sm:text-[9px] md:text-[10px] [line-height:12px] text-[#1B85D0]">
            MINISTERIO DE EDUCACIÓN <br /> DIRECCIÓN REGIONAL DE EDUCACIÓN DEL
            CALLAO CENTRO EDUCATIVO TÉCNICO PRODUCTIVA NACIONES UNIDAS
          </p>
        </Link>
        <div
          className={`flex md:gap-4 lg:gap-8 text-[#353535] md:text-sm lg:text-base max-md:absolute max-md:bg-white max-md:left-0 max-md:top-0 max-md:w-full max-md:h-full max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-3 ${
            !showMenu && "max-md:hidden"
          }`}
        >
          <Link onClick={() => setShowMenu(false)} href="/">
            Inicio
          </Link>
          <Link onClick={() => setShowMenu(false)} href="/especialidades">
            Especialidades
          </Link>
          <Link onClick={() => setShowMenu(false)} href="/alumnos">
            Alumnos
          </Link>
          <Link onClick={() => setShowMenu(false)} href="/docentes">
            Docentes
          </Link>
          <Link onClick={() => setShowMenu(false)} href="/contacto">
            Contacto
          </Link>
        </div>
        <div
          className="w-6 h-full md:hidden flex flex-col items-end justify-center gap-1"
          onClick={handleToggleMenu}
        >
          <span className="block w-full h-[2px] bg-[#1B85D0]"></span>
          <span className="block w-full h-[2px] bg-[#1B85D0]"></span>
          <span className="block w-full h-[2px] bg-[#1B85D0]"></span>
        </div>
      </div>
    </nav>
  );
};
