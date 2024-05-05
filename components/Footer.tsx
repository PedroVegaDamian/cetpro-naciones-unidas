import Link from "next/link";
import Image from "next/image";
import LogoWhite from "@/assets/images/logo-white.svg";

export const Footer = () => {
  return (
    <footer className="bg-[#1B85D0] text-white text-sm md:text-base">
      <div className="max-w-[1140px] mx-auto text-center">
        <Image
          width={64}
          height={64}
          src={LogoWhite}
          alt="Cetpro Logo Blanco"
          className="mx-auto pt-6 mb-[10px]"
        />
        <nav className="flex justify-center gap-6 mb-3 max-sm:flex-col max-sm:gap-2 text-sm sm:text-base">
          <Link href="/">Inicio</Link>
          <Link href="/especialidades">Especialidades</Link>
          <Link href="/alumnos">Alumnos</Link>
          <Link href="/docentes">Docentes</Link>
          <Link href="/contacto">Contacto</Link>
        </nav>
        <hr className="border-t-[0.78px] border-[#FFFFFF33]" />
        <p className="text-[12px] sm:text-sm mt-3 pb-6">
          © {new Date().getFullYear()} CETPRO Naciones Unidas
        </p>
      </div>
    </footer>
  );
};
