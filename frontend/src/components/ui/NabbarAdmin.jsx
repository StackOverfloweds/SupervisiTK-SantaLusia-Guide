"use client";
import { useContext, useEffect, useState } from "react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import AuthContext from "@/lib/Context/AuthProvider";


export default function NavbarAdmin() {
  const [active, setActive] = useState(null);
  const {userData} = useContext(AuthContext);

  return (
    <nav className='fixed top-0 right-0 w-[100rem] h-[5rem] flex justify-end bg-white drop-shadow-xl z-50'>
      <ul className='flex gap-1 items-center justify-end w-full max-w-screen-xl mx-auto px-4 font-poppins text-sm'>
        <div className='h-6 w-0.5 mr-5 bg-gray-300'></div>
        <Menu setActive={setActive}>
          <MenuItem
            setActive={setActive}
            active={active}
            item={`${userData? userData.user.name : "Loading..."}`}>
            <div className='flex flex-col space-y-4 text-sm'>
              <HoveredLink href='/'>Log-out</HoveredLink>
            </div>
          </MenuItem>
        </Menu>
        <Avatar className='px-2 py-2 mr-2 rounded-full object-cover'>
          <AvatarImage src='https://github.com/shadcn.png' />
          <AvatarFallback>Profile</AvatarFallback>
        </Avatar>
      </ul>
    </nav>
  );
}
