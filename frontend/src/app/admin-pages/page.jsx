import React from "react";
import NavbarAdmin from "@/components/ui/NabbarAdmin";
import MenuAdmin from "./menu";

export default function Admin() {
  return (
    <div className='h-screen w-screen flex bg-slate-100'>
      <MenuAdmin />
      <NavbarAdmin />
    </div>
  );
}
