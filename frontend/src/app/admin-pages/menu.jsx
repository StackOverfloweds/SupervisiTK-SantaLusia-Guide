import React from "react";
import Logo from "@/img/iconSalib.png";
import { Button } from "@/components/ui/button";


export default function MenuAdmin() {
  return (
    <div className='h-screen w-screen flex'>
      <div className='w-[20rem] bg-DF text-white font-bold'>
        <div className='uppercase flex flex-col justify-center items-center mt-5 text-2xl'>
          <img src={Logo} className='' alt='' />
          <span>supervice</span>
          <span>tk santa lusia</span>
        </div>
        <div className='flex flex-col mt-10 space-y-10 ml-[3rem] font-poppins font-semibold'>
          <div>
            <button className='border-b-2 border-transparent hover:border-white'>Dasboard</button>
          </div>
          <div>
            <button className='border-b-2 border-transparent hover:border-white'>Halaman Pengumuman</button>
          </div>
          <div>
            <button className='border-b-2 border-transparent hover:border-white'>Pengumpulan RPH dan Vidio</button>
          </div>
          <div>
            <button className='border-b-2 border-transparent hover:border-white'>Halaman Supervice</button>
          </div>
          <div>
            <button className='border-b-2 border-transparent hover:border-white'>Halaman Grup Chat</button>
          </div>
          <div>
            <button className='border-b-2 border-transparent hover:border-white'>Data Pengajar</button>
          </div>
          <div>
            <button className='border-b-2 border-transparent hover:border-white'>Master Menu</button>
          </div>
          <div>
            <button className='border-b-2 border-transparent hover:border-white'>Halaman Dowload</button>
          </div>
        </div>
      </div>
    </div>
  );
}
