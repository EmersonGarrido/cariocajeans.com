"use client";
import * as React from "react";
import { Roboto } from "next/font/google";
import Image from "next/image";
import { FaWhatsapp, FaMapMarkedAlt } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { HiShoppingCart } from "react-icons/hi";

const roboto = Roboto({
  weight: ["100", "400", "500", "700", "900"],
  subsets: ["latin"],
});

const lojas = [
  {
    id: 1,
    cover: "cover-leblon.png",
    name: "Carioca Jeans Leblon",
    address: "R. Clineu da Costa Morães, 627 - Jardim Leblon",
    map: "https://goo.gl/maps/1NWbgXWJjH9mPBDEA",
    contact: [
      {
        name: "Whatsapp 1",
        number: "67991355709",
      },
      {
        name: "Whatsapp 2",
        number: "67993020672",
      },
    ],
    open: false,
  },
  {
    id: 2,
    cover: "cover-leblon.png",
    name: "Carioca Jeans Monte Castelo",
    address: "Av. Mascarenhas de Moraes, 1826 - Monte Castelo",
    map: "https://goo.gl/maps/NZgKpWERyigCQw447",
    contact: [
      {
        name: "Whatsapp 1",
        number: "67991179242",
      },
      {
        name: "Whatsapp 2",
        number: "67992137114",
      },
    ],
    open: false,
  },
  {
    id: 3,
    cover: "cover-leblon.png",
    name: "Carioca Jeans Aero Rancho",
    address: "Av. Ezequiel Ferreira Lima, 1228 - Loja 1 - Jardim Aero Rancho",
    map: "https://goo.gl/maps/P4K1DHBmUFM5w6sx9",
    contact: [
      {
        name: "Whatsapp 1",
        number: "67992151555",
      },
      {
        name: "Whatsapp 2",
        number: "67992632717",
      },
    ],
    open: false,
  },
  {
    id: 4,
    cover: "cover-leblon.png",
    name: "Carioca Jeans Tiradentes",
    address: "Av. Ezequiel Ferreira Lima, 1228 - Loja 1 - Jardim Aero Rancho",
    map: "https://goo.gl/maps/P4K1DHBmUFM5w6sx9",
    contact: [
      {
        name: "Whatsapp 1",
        number: "67992151555",
      },
      {
        name: "Whatsapp 2",
        number: "67992632717",
      },
    ],
    open: false,
  },
];

export default function Home() {
  const [state, setState] = React.useState(lojas);

  function handleOpenInfo(data: any) {
    const newState = [...state];

    const item = newState.find((isState) => isState.id === data.id);

    if (item) {
      item.open = !data.open;
      setState(newState);
    }
  }

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

      <button
        onClick={() => window.open("https://cariocajeans.com.br", "blank")}
        className="flex gap-3 w-full max-w-[340px] items-center justify-center text-base mt-5 mb-3 bg-[#1a77f3] shadow-md p-4 rounded-md text-white"
      >
        <HiShoppingCart size={20} /> Compre na Loja Online
      </button>

      <h1 className="font-thin text-xl mt-3 mb-3">
        ou Escolha uma Lojas Fisícas
      </h1>
      <div className="mt-5 flex flex-col gap-5 w-full items-center justify-center max-w-[340px]">
        {state.map((loja, index) => {
          return (
            <div
              key={index}
              className="border-black/5 w-full max-w-[340px] bg-white shadow-sm flex flex-col items-center justify-center gap-3 border-[0.1rem] rounded-md"
            >
              <img
                onClick={() => handleOpenInfo(loja)}
                className="rounded-md contain w-full max-w-[340px] h-[160px] container"
                src={`/${loja.cover}`}
                alt={loja.name}
              />

              {loja.open && (
                <div className="p-1 w-full flex items-center justify-center flex-col gap-3 max-w-[350px]">
                  <h1 className="font-bold text-center text-lg">{loja.name}</h1>
                  <button
                    onClick={() => window.open(`${loja.map}`, "blank")}
                    className="font-light flex items-center justify-center flex-col text-center text-sm"
                  >
                    <FaMapMarkedAlt color="#1a40a3" size={25} /> {loja.address}
                  </button>

                  <div className="flex items-center justify-center">
                    {loja.contact.map((contact, isIndex) => {
                      return (
                        <button
                          key={isIndex}
                          onClick={() =>
                            window.open(
                              `https://wa.me/55${contact.number}`,
                              "blank"
                            )
                          }
                          className="bg-[#128C7E] flex items-center justify-center gap-3 text-white p-3 m-2 w-full rounded-md"
                        >
                          <FaWhatsapp size={25} /> {contact.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

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
