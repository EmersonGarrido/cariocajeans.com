"use client";
import Image from "next/image";
import * as React from "react";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { FaWhatsapp, FaMapMarkedAlt } from "react-icons/fa";

interface ContentProp {
  lojas: any[];
}

const Content: React.FC<ContentProp> = ({ lojas }) => {
  console.log(lojas);
  return (
    <>
      <div className="mt-5 flex flex-col gap-5 w-full items-center justify-center max-w-[340px]">
        {lojas.map((loja: any, index: number) => {
          return (
            <div
              key={index}
              className="border-black/5 relative w-full max-w-[340px] bg-white shadow-sm flex flex-col items-center justify-center gap-3 border-[0.1rem] rounded-md"
            >
              <Image
                className="rounded-md contain w-full max-w-[340px] h-[160px] container backdrop-brightness-50"
                src={`/lojas/${loja.loja}.png`}
                alt={loja.nome}
                width={340}
                height={160}
              />

              <div className="p-1 w-full flex items-center justify-center flex-col gap-3 max-w-[350px]">
                <h1 className="font-bold text-center text-lg">{loja.nome}</h1>
                <button
                  onClick={() => window.open(`${loja.map}`, "blank")}
                  className="font-light flex items-center justify-center flex-col text-center text-sm"
                >
                  <FaMapMarkedAlt color="#1a40a3" size={25} /> {loja.endereco}
                </button>

                <div className="mt-3 flex items-center justify-center gap-2">
                  <button
                    className="w-full flex items-center justify-center gap-2 text-[#d62976] bg-[#d62976]/20 border-[0.1rem] border-[#d62976] rounded-full px-2 py-1"
                    onClick={() =>
                      window.open(
                        `https://instagram.com/${loja.instagram}`,
                        "blank"
                      )
                    }
                  >
                    <AiFillInstagram size={30} color="#d62976" />
                    Instagram
                  </button>
                  <button
                    className="w-full flex items-center justify-center gap-2 text-[#3b5998] bg-[#3b5998]/20 border-[0.1rem] border-[#3b5998] rounded-full px-2 py-1"
                    onClick={() =>
                      window.open(
                        `https://facebook.com/${loja.facebook}`,
                        "blank"
                      )
                    }
                  >
                    <AiFillFacebook size={30} color="#3b5998" />
                    Facebook
                  </button>
                </div>

                <div className="flex items-center flex-col w-full p-2 justify-center">
                  <button
                    onClick={() =>
                      window.open(`https://wa.me/55${loja.numero_1}`, "blank")
                    }
                    className="bg-[#128C7E] flex items-center text-base justify-center gap-3 text-white p-3 m-2 w-full rounded-md"
                  >
                    <FaWhatsapp size={25} /> {loja.nome_1}
                  </button>

                  <button
                    onClick={() =>
                      window.open(`https://wa.me/55${loja.numero_2}`, "blank")
                    }
                    className="bg-[#128C7E] flex items-center text-base justify-center gap-3 text-white p-3 m-2 w-full rounded-md"
                  >
                    <FaWhatsapp size={25} /> {loja.nome_2}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Content;
