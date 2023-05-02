"use client";
import * as React from "react";
import Image from "next/image";
import { HiShoppingCart } from "react-icons/hi";
import Link from "next/link";

interface HeaderProps {
  config: any[];
}

const Header: React.FC<HeaderProps> = ({ config }) => {
  return (
    <>
      <div className="flex items-cente justify-center w-full">
        <Image src="/logo.png" width={130} height={100} alt="carioca jeans" />
      </div>

      {config[0]?.loja_ativa === "on" && (
        <Link href={config[0].loja}>
          <button className="flex gap-3 w-full max-w-[340px] items-center justify-center text-base mt-5 mb-3 bg-[#1a77f3] shadow-md p-4 rounded-md text-white">
            <HiShoppingCart size={20} /> {config[0]?.titulo_bottao}
          </button>
        </Link>
      )}

      <span className="text-center">
        Rede Carioca Jeans | Campo Grande - MS <br />
        🏝️ Desfrute à Melhor experiência em Jeans <br />
        🏝️ Veja qual Loja fica mais perto de Você <br />
      </span>
    </>
  );
};

export default Header;
