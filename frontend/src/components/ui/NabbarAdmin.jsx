import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function NavbarAdmin() {
  return (
    <nav className='fixed top-0 right-0 w-[100rem] h-[5rem] flex justify-end bg-white drop-shadow-xl z-50'>
      <ul className='flex gap-1 items-center justify-end w-full max-w-screen-xl mx-auto px-4 font-poppins text-sm'>
        <div className='h-6 w-0.5 mr-5 bg-gray-300'></div>
        <p className='font-sans'>Jeffan Sulastyo u.dasa</p>
        <Avatar className='px-2 py-2 mr-5 rounded-full object-cover'>
          <AvatarImage src='https://github.com/shadcn.png' />
          <AvatarFallback>Profile</AvatarFallback>
        </Avatar>
      </ul>
    </nav>
  );
}
