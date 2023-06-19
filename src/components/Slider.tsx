"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";

import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";

import JavaScriptSvg from "@/icons/JavaScript.svg";
import ReactSvg from "@/icons/React.svg";
import TailwindSvg from "@/icons/Tailwind CSS.svg";
import NetCoreSvg from "@/icons/NET core.svg";
import SQLServerSvg from "@/icons/SQL Server.svg";
import LaravelSvg from "@/icons/Laravel.svg";
import NETSvg from "@/icons/NET.svg";
import PostgresSvg from "@/icons/PostgresSQL.svg";
import GitHubSvg from "@/icons/GitHub.svg";
import MySQLSvg from "@/icons/MySQL.svg";
import CSharpSvg from "@/icons/CSharp.svg";
import PHPSvg from "@/icons/PHP.svg";
import TypeScript from "@/icons/TypeScript.svg";
import Nextjs from "@/icons/Nextjs.svg";

const sliders = [
  {
    src: JavaScriptSvg,
    alt: "javascript",
  },
  {
    src: ReactSvg,
    alt: "reactjs",
  },
  {
    src: NetCoreSvg,
    alt: "netcore",
  },
  {
    src: TailwindSvg,
    alt: "tailwindcss",
  },
  {
    src: SQLServerSvg,
    alt: "sqlserver",
  },
  {
    src: NETSvg,
    alt: "aspnet",
  },
  {
    src: LaravelSvg,
    alt: "laravel",
  },
  {
    src: PostgresSvg,
    alt: "postgresql",
  },
  {
    src: CSharpSvg,
    alt: "csharp",
  },
  {
    src: MySQLSvg,
    alt: "mysql",
  },
  {
    src: PHPSvg,
    alt: "php",
  },
  {
    src: GitHubSvg,
    alt: "github",
  },
  {
    src: TypeScript,
    alt: "typescript",
  },
  {
    src: Nextjs,
    alt: "nextjs",
  },
];

export default function Slider() {
  return (
    <Splide
      options={{
        type: "loop",
        drag: "free",
        focus: "center",
        perPage: 4,
        autoplay: true,
        lazyLoad: "sequential",        
        wheel: true,
        waitForTransition: false,        
        speed: 2000,
        interval: 1000,
      }}
      aria-label="my skills"
    >
      {sliders.map((s) => (
        <SplideSlide key={s.alt}>
          <Image src={s.src} alt={s.alt} />
        </SplideSlide>
      ))}
    </Splide>
  );
}
