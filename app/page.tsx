import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import GraduationHat from "@/assets/images/graduation-hat.svg";

export const metadata: Metadata = {
  title: "Inicio - CETPRO Naciones Unidas",
};

export default function Home() {
  return (
    <section className="flex gap-[82px] items-center py-32 max-lg:flex-col-reverse max-lg:text-center max-lg:py-20 max-lg:gap-16 max-md:py-12">
      <div>
        <h1 className="text-[64px] max-xl:text-6xl max-lg:text-5xl  max-md:text-4xl font-bold [line-height:70px] text-[#353535ee] mb-5">
          CETPRO Naciones Unidas te da la Bienvenida
        </h1>
        <div className="flex gap-5 py-3 text-white text-[20px] font-bold max-lg:justify-center max-md:text-lg max-sm:text-sm">
          <Link
            href="/procedimiento-de-matricula"
            className="bg-[#1B85D0] w-full max-w-[196px] py-[15px] text-center"
          >
            Matricúlate
          </Link>
          <Link
            href="/especialidades"
            className="bg-[#353535] w-full max-w-[196px] py-[15px] text-center"
          >
            Cursos
          </Link>
        </div>
      </div>
      <Image
        width={518}
        height={374}
        src={GraduationHat}
        alt="Sombrero de graduación"
      />
    </section>
  );
}
