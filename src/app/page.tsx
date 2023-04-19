"use client";
import * as React from "react";
import { Roboto } from "next/font/google";
import Image from "next/image";
import { FaWhatsapp, FaMapMarkedAlt } from "react-icons/fa";

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
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
      className={`${roboto.className} bg-[#eff7e9] h-screen w-full flex items-center justify-start flex-col p-4`}
    >
      <div className="flex items-cente justify-center w-full">
        <Image src="/logo.png" width={150} height={120} alt="carioca jeans" />
      </div>
      <div className="mt-5 flex flex-col gap-3">
        {state.map((loja, index) => {
          return (
            <div
              key={index}
              className="border-black/5 w-[340px] bg-white shadow-sm flex flex-col items-center justify-center gap-3 border-[0.1rem] rounded-md"
            >
              <img
                onClick={() => handleOpenInfo(loja)}
                className="rounded-md contain w-[340px] h-[160px] container"
                src={`/${loja.cover}`}
                alt={loja.name}
              />
              {loja.open && (
                <div className="p-1">
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
    </main>
  );
}
