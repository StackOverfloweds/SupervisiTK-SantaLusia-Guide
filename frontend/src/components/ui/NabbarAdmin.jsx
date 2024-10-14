"use client"
import React, {useContext} from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import AuthContext from "@/lib/Context/AuthProvider";

export default function NavbarAdmin() {
  const { userData } = useContext(AuthContext)
  return (
    <nav className='fixed top-0 right-0 w-[100rem] h-[5rem] flex justify-end bg-white drop-shadow-xl z-50'>
      <ul className='flex gap-1 items-center justify-end w-full max-w-screen-xl mx-auto px-4 font-poppins text-sm'>
        <div className='h-6 w-0.5 mr-5 bg-gray-300'></div>
        <p className='font-sans'>{userData?.name ? userData.name : "Not Loggedin yet"}</p>
        <Avatar className='mr-5 '>
          <AvatarImage src='https://github.com/shadcn.png' className=" object-cover " />
          <AvatarFallback>Profile</AvatarFallback>
        </Avatar>
      </ul>
    </nav>
  );
}
