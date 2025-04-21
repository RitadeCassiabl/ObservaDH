/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import Texto from "@/components/ui/componente-texto";
import { useRouter } from "next/navigation";

const page: React.FC = () => {
  const router = useRouter();
  const retornar = () => {
    router.push("/");
  };
  return (
    <div className="h-screen w-screen flex items-center justify-center text-white flex-col gap-4">
      <div >
        <Texto.Raiz>
          <Texto.Linha className="text-9xl text-center">
            <Texto.Forte.Oswald>404</Texto.Forte.Oswald>
          </Texto.Linha>
          <Texto.Linha className="text-3xl text-center">
            <Texto.Forte.Titillium>
              Página não encontrada...
            </Texto.Forte.Titillium>
          </Texto.Linha>
        </Texto.Raiz>
      </div>
      <button className="h-10 w-44 bg-slate-500 text-2xl font-semibold rounded-2xl" onClick={retornar}>Voltar ao início</button>
    </div>
  );
};
export default page;
