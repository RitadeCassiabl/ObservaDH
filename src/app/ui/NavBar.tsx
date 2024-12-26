/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import UseDiscovery from "../lib/useDiscover";

interface Cabecalho {
  titulo: string;
  text: string;
}

const navBar: React.FC = () => {
  const [title, setTitle] = useState<Cabecalho>();
  const router = usePathname();
  const { encontrarCabecalho } = UseDiscovery();

  useEffect(() => {
    const item = encontrarCabecalho(router);
    setTitle(item);
  }, [router, encontrarCabecalho]);

  return (
    <div className="w-full h-full flex flex-col items-center bg-senado bg-cover bg-center border-b-2 border-[#001745]">
      <nav className="p-8 w-full items-center flex flex-col gap-40">
        <div className="flex w-full items-center justify-center flex-col">
          <div className="w-11/12 flex flex-col">
            <div className="flex gap-[12.5rem] items-center justify-between">
              <Link href={"/"}>
                <h1 className="text-[3.125rem] text-white logo" />
              </Link>
              <ul className="flex text-3xl font-normal text-white gap-[3.125rem] font">
                {[
                  { titulo: "PLs", rota: "/projetos" },
                  { titulo: "Parlamentares", rota: "/parlamentares" },
                  { titulo: "Direitos", rota: "/direitos" },
                  { titulo: "Sobre", rota: "/sobre" },
                  { titulo: "Desenvolvedores", rota: "/desenvolvedores" },
                ].map((item) => {
                  return (
                    <li key={item.titulo}>
                      <Link href={item.rota}>{item.titulo}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <span className="border-b-[1px] shadow-bottom shadow-white w-full" />
        </div>
        <div className="w-full flex flex-col px-14">
          {router === "/" ? 
          <div className="gap-8 flex flex-col">
            <span className="logo text-8xl text-white"></span>
            <p className="text-white text-3xl font-normal">
              {title?.text}
            </p>
          </div> 
          :
          <div className="gap-8 flex flex-col">
            <h1 className="text-8xl text-white">
              {title?.titulo}
            </h1>
            <p className="text-white text-3xl font-normal">
              {title?.text}
            </p>
          </div>
          }     
        </div>
      </nav>
    </div>
  );
};

export default navBar;