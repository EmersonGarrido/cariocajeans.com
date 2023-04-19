import * as React from "react";
import { Roboto } from "next/font/google";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import { HiShoppingCart } from "react-icons/hi";
import Link from "next/link";

import { Content } from "components";

const roboto = Roboto({
  weight: ["100", "400", "500", "700", "900"],
  subsets: ["latin"],
});

async function getData() {
  const res = await fetch(
    "http://n8n.emersongarrido.com.br:5678/webhook/10baea80-222a-480f-b1e6-fe2623e527c4",
    { next: { revalidate: 30 } }
  );
  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <main
      className={`${roboto.className} bg-[#eff7e9] h-full w-full flex items-center justify-start flex-col p-4`}
    >
      <div className="flex items-cente justify-center w-full">
        <Image src="/logo.png" width={130} height={100} alt="carioca jeans" />
      </div>
      <h1 className="flex items-center justify-center gap-1 font-semibold text-lg">
        @cariocajeans <MdVerified color="#1a40a3" size={18} />
      </h1>

      <Link href="https://cariocajeans.com.br">
        <button className="flex gap-3 w-full max-w-[340px] items-center justify-center text-base mt-5 mb-3 bg-[#1a77f3] shadow-md p-4 rounded-md text-white">
          <HiShoppingCart size={20} /> Compre na Loja Online
        </button>
      </Link>

      <h1 className="font-thin text-xl mt-3 mb-3">
        ou Escolha uma Lojas Fisícas
      </h1>

      <Content lojas={data} />

      <div className="text-xs text-center mt-5 mb-4">
        <span>
          Todos os direitos reservados a Carioca Jeans <br /> Desenvolvido por{" "}
          <a
            className="text-center font-bold"
            href="https://emersongarrido.com.br"
          >
            Emerson Garrido
          </a>
        </span>
      </div>
    </main>
  );
}
