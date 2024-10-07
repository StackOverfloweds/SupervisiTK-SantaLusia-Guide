import React from "react";
// import logo from "@/img/logo.png"
import NavbarAdmin from "./NabbarAdmin";
import MenuAdmin from "./menu";

export default function Admin() {
  return (
    <div className='h-screen w-screen flex bg-slate-100'>
      <MenuAdmin />
      <NavbarAdmin />
    </div>
  );
}
