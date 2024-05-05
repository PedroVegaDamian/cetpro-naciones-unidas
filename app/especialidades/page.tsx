import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { specialities } from "../../data/specialities";

export const metadata: Metadata = {
  title: "Especialidades",
};

export default function Specialities() {
  return (
    <section className="text-[#353535]">
      <h1 className="text-5xl max-lg:text-4xl max-md:text-3xl font-bold my-[50px] max-md:my-8">
        Especialidades
      </h1>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-[47px] mb-[50px]">
        {specialities.map((speciality) => (
          <div
            key={speciality.name}
            className="shadow-[2px_2px_6px_0px_rgba(0,0,0,0.15)] "
          >
            <Image
              width={250}
              height={167}
              className="w-full"
              alt={speciality.name}
              src={speciality.image}
            />
            <div className="text-center p-4">
              <p className="font-bold mb-1">{speciality.name}</p>

              <Link href="#" className="text-[#1B85D0] font-bold text-[10px]">
                Ver por docente
              </Link>
              <div className="flex gap-2 justify-center">
                <Link href="#" className="text-[#1B85D0] font-bold text-[10px]">
                  Ver por turno
                </Link>
                <Link href="#" className="text-[#1B85D0] font-bold text-[10px]">
                  Ver todos
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
