"use client";

import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full min-h-[30px] relative flex items-center justify-center bg-[#12395b] p-[20px] py-[15px]">
      <Image src="https://i.imgur.com/vzVuvwZ.png" width={200} height={200} className="w-[70px] h-[70px]" alt="logo" />
    </div>
  );
}
