import React from "react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
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
      <h1 className="flex items-center justify-center gap-1 font-semibold text-lg">
        @{config[0].instagram} <MdVerified color="#1a40a3" size={18} />
      </h1>

      {config[0].loja_ativa !== "off" && (
        <Link href={config[0].loja}>
          <button className="flex gap-3 w-full max-w-[340px] items-center justify-center text-base mt-5 mb-3 bg-[#1a77f3] shadow-md p-4 rounded-md text-white">
            <HiShoppingCart size={20} /> {config[0].titulo_bottao}
          </button>
        </Link>
      )}

      <h1 className="font-thin text-xl mt-3 mb-3">{config[0].sub_titulo}</h1>
    </>
  );
};

export default Header;
