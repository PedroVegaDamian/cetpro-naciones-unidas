import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { videos } from "@/data/students";
import { ItemTutorial } from "./components/ItemTutorial";
import GoogleClassroomLogo from "@/assets/images/google-classroom-logo.svg";

export const metadata: Metadata = {
  title: "Alumnos",
};

export default function Students() {
  return (
    <section className="text-[#353535] text-center">
      <h1 className="text-5xl font-bold my-[50px] max-md:text-4xl max-md:my-10 max-sm:text-3xl max-sm:my-8">
        Plataforma
      </h1>
      <Link
        target="_blank"
        className="inline-block mb-[70px] max-md:mb-12 max-sm:mb-10"
        href="https://classroom.google.com"
      >
        <Image
          width={298}
          height={228}
          src={GoogleClassroomLogo}
          alt="Logo de Google Classroom"
        />
      </Link>
      <h2 className="text-5xl font-bold mb-[50px] max-md:text-4xl max-md:mb-10 max-sm:text-3xl max-sm:mb-8">
        Tutoriales
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(260px,_1fr))] gap-6 mb-[50px]">
        {videos.map((video) => (
          <ItemTutorial
            id={video.id}
            key={video.id}
            title={video.title}
            thumbnail={video?.thumbnail}
          />
        ))}
      </div>
    </section>
  );
}
