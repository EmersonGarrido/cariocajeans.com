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
        name: "Emerson Garrido",
        number: "67993109148",
      },
    ],
    open: false,
  },
];

export default function Home() {
  const [state, setState] = React.useState(lojas);

  function handleOpenInfo(data: any) {
    data.open = !data.open;

    setState((isState) => {
      const newData: any = isState.filter((isData) => isData.id !== data.id);
      return [...newData, data];
    });
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
              className="border-black/5 bg-white shadow-sm flex flex-col items-center justify-center gap-3 border-[0.1rem] rounded-md"
            >
              <img
                onClick={() => handleOpenInfo(loja)}
                className="rounded-md contain w-[340px] h-[160px] container"
                src={`/${loja.cover}`}
                alt={loja.name}
              />
              {loja.open && (
                <>
                  <h1 className="font-bold text-center text-lg">{loja.name}</h1>
                  <button
                    onClick={() => window.open(`${loja.address}`, "blank")}
                    className="font-light flex items-center justify-center flex-col text-center text-sm"
                  >
                    <FaMapMarkedAlt color="#1a40a3" size={25} /> {loja.address}
                  </button>

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
                        className="bg-[#128C7E] flex items-center justify-center gap-3 text-white p-2 m-4 w-[300px] rounded-md"
                      >
                        <FaWhatsapp size={20} /> {contact.name}
                      </button>
                    );
                  })}
                </>
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
}
