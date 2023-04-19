import * as React from "react";
import { Roboto } from "next/font/google";

import { Content, Header } from "components";

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

async function getConfig() {
  const res = await fetch(
    "http://n8n.emersongarrido.com.br:5678/webhook/88f64533-8300-439f-9210-2d828956f3e4",
    { next: { revalidate: 30 } }
  );

  return res.json();
}

export default async function Home() {
  const data = await getData();
  const config = await getConfig();

  return (
    <main
      className={`${roboto.className} bg-[#eff7e9] h-full w-full flex items-center justify-start flex-col p-4`}
    >
      <Header config={config} />

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
