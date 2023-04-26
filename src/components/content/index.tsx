"use client";
import * as React from "react";

import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { FaWhatsapp, FaMapMarkedAlt } from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";

interface ContentProp {
  lojas: any[];
}

const Content: React.FC<ContentProp> = ({ lojas }) => {
  const [state, setState] = React.useState<any>(lojas);

  function handleOpenInfo(data: any, index: number) {
    const newState = [...state];
    const isOpen = newState[index].open;

    if (isOpen) {
      newState[index].open = false;
      setState(newState);
    } else {
      newState[index].open = true;
      setState(newState);
    }
  }
  return (
    <>
      <div className="mt-5 flex flex-col gap-5 w-full items-center justify-center max-w-[340px]">
        {state.map((loja: any, index: number) => {
          return (
            <div
              key={index}
              className="border-black/5 relative w-full max-w-[340px] bg-white shadow-sm flex flex-col items-center justify-center gap-3 border-[0.1rem] rounded-md"
            >
              <img
                onClick={() => handleOpenInfo(loja, index)}
                className="rounded-md contain w-full max-w-[340px] h-[160px] container backdrop-brightness-50"
                src={`https://drive.google.com/uc?export=download&id=${loja.cover}`}
                alt={loja.nome}
              />

              {/* {loja?.open !== true && (
                <div
                  onClick={() => handleOpenInfo(loja, index)}
                  className="absolute flex-col gap-3 w-full max-w-[340px] h-[160px] flex items-center justify-between p-2 bg-black/50 rounded-md"
                >
                  <div></div>
                  <div className="flex items-center justify-center">
                    <HiCursorClick
                      color="#FFF"
                      size={35}
                      className="animate-pulse"
                    />
                  </div>
                  <h1 className="font-bold text-xl text-white">{loja.nome}</h1>
                </div>
              )} */}

              <div className="p-1 w-full flex items-center justify-center flex-col gap-3 max-w-[350px]">
                <h1 className="font-bold text-center text-lg">{loja.nome}</h1>
                <button
                  onClick={() => window.open(`${loja.map}`, "blank")}
                  className="font-light flex items-center justify-center flex-col text-center text-sm"
                >
                  <FaMapMarkedAlt color="#1a40a3" size={25} /> {loja.endereco}
                </button>

                <div className="mt-3">
                  <button
                    onClick={() =>
                      window.open(
                        `https://instagram.com/${loja.instagram}`,
                        "blank"
                      )
                    }
                  >
                    <AiFillInstagram size={35} color="#d62976" />
                  </button>
                  <button
                    onClick={() =>
                      window.open(
                        `https://facebook.com/${loja.facebook}`,
                        "blank"
                      )
                    }
                  >
                    <AiFillFacebook size={35} color="#3b5998" />
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
