"use client";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{
        backgroundImage: "url('assets/paginaP.jpeg')",
      }}
    >
      <div className="bg-gray-200 rounded w-[450px] h-[250px] px-5 pt-7 flex flex-col space-y-4">
        <Link
          href="/ejercicio1"
          className="text-blue-500 text-center text-7xl font-extrabold hover:underline"
        >
          Ejercicio 1
        </Link>
        {/* <Link
          href="/ejercicio2"
          className="text-blue-500 text-7xl font-extrabold hover:underline"
        >
          Ejercicio 2
        </Link> */}
      </div>
    </div>
  );
};

export default Page;
