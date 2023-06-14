"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <Link
      className={`m-4 font-semibold p-2 hover:text-amber-600 ${
        genre && 
        genre === param && 
        "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg" }`}
      href={`/?genre=${param}`}
    >
      {title}
    </Link>                          // /?genre= this is the params needed in URL
  );
}
