import React from "react";
import Logo from "@/img/iconSalib.png";
import {Sidebar} from "@/components/ui/sidebar";

export default function MenuAdmin() {
  return (
    <div className='h-screen w-screen flex'>
      <div className='w-[20rem] bg-DF text-white font-bold'>
        <div className='uppercase flex flex-col justify-center items-center mt-5 text-2xl'>
          <img src={Logo} className='' alt='' />
          <span>supervice</span>
          <span>tk santa lusia</span>
          <Sidebar />
        </div>
        <div className="">
        </div>
      </div>
    </div>
  );
}
