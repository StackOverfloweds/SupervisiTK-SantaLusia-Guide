import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function NavbarAdmin() {
  return (
    <nav className='w-screen h-screen flex justify-end'>
      <ul className='h-[5rem] w-[113.3rem] flex gap-1 items-center justify-end font-poppins text-sm bg-white drop-shadow-xl '>
        <p className="font-sans">
            Jeffaan Sulastyo U.Dasa
        </p>
        <Avatar className=" px-2 py-2 mr-5 rounded-full object-cover">
          <AvatarImage src='https://github.com/shadcn.png' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </ul>
    </nav>
  );
}
