import Image from "next/image";
import React from "react";
import { type Video } from "@/data/students";
import Link from "next/link";

export const ItemTutorial = ({ id, title, thumbnail }: Video) => {
  return (
    <Link href={`https://www.youtube.com/watch?v=${id}`} target="_blank">
      <Image
        alt={title}
        width={300}
        height={200}
        src={thumbnail}
        className="aspect-video w-full"
      />
    </Link>
  );
};
