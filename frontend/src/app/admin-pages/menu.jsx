"use client";
import React, { useContext, useState } from "react";
import Logo from "../../img/iconSalib.png";
import Dashboard from "./dasboard";
import Chatgrup from "./Chatgrup";
import Datapengajar from "./datapengajar";
import Downloadpage from "./Downloadpage";
import Menumaster from "./menumaster";
import Pengumpulan from "./Pengumpulanpage";
import Pengumunan from "./Pengumumanpage";
import Supervicepage from "./supervicepage";
import AuthContext from "../../lib/Context/AuthProvider";
import Image from "next/image";


export default function MenuAdmin() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const { userData } = useContext(AuthContext);

  useState(() => {
    console.log(userData);
  },[])

  const MenuGuru = [
    {
      title: "Dasboard",
      onclick: () => handleMenuClick("Dashboard"),
    },
    {
      title: "Halaman Pengumuman",
      onclick: () => handleMenuClick("Pengumunan"),
    },
    {
      title: "Pengumpulan RPH dan Vidio",
      onclick: () => handleMenuClick("Pengumpulan"),
    },
    {
      title: "Halaman Supervisi",
      onclick: () => handleMenuClick("Supervicepage"),
    },
    {
      title: "Halaman Grup Chat",
      onclick: () => handleMenuClick("Chatgrup"),
    },
    {
      title: "Halaman Download",
      onclick: () => handleMenuClick("Downloadpage"),
    },
  ];

  const MenuKepsek = [
    {
      title: "Dasboard",
      onclick: () => handleMenuClick("Dashboard"),
    },
    {
      title: "Halaman Pengumuman",
      onclick: () => handleMenuClick("Pengumunan"),
    },
    {
      title: "Pengumpulan RPH dan Vidio",
      onclick: () => handleMenuClick("Pengumpulan"),
    },
    {
      title: "Halaman Supervisi",
      onclick: () => handleMenuClick("Supervicepage"),
    },
    {
      title: "Halaman Grup Chat",
      onclick: () => handleMenuClick("Chatgrup"),
    },
    {
      title: "Data Pengajar",
      onclick: () => handleMenuClick("Datapengajar"),
    },
    {
      title: "Master Menu",
      onclick: () => handleMenuClick("Menumaster"),
    },
    {
      title: "Halaman Download",
      onclick: () => handleMenuClick("Downloadpage"),
    },
  ];

  const handleMenuClick = (title) => {
    setActiveMenu(title);
  };

  const renderContent = () => {
    switch (activeMenu) {
      case "Dashboard":
        return <Dashboard />;
      case "Pengumunan":
        return <Pengumunan />;
      case "Pengumpulan":
        return <Pengumpulan />;
      case "Supervicepage":
        return <Supervicepage />;
      case "Chatgrup":
        return <Chatgrup />;
      case "Datapengajar":
        return <Datapengajar />;
      case "Menumaster":
        return <Menumaster />;
      case "Downloadpage":
        return <Downloadpage />;
      default:
        return null;
    }
  };



  return (
    <div className='h-screen w-screen flex'>
      <div className='w-[20rem] bg-DF text-white font-bold'>
        <div className='uppercase flex flex-col justify-center items-center mt-5 text-2xl'>
          <Image src={Logo} className='' alt='Logo TK Santo Lusia' />
          <span>supervice</span>
          <span>tk santa lusia</span>
        </div>
        <ul className='flex flex-col mt-10 space-y-10 ml-[3rem] font-poppins font-bold'>

          {
          !userData? <h1 className="animate-pulse font-bold text-3xl">Loading</h1> 
          : 
          userData.user.role == "guru" ?
          MenuGuru.map((menus, index) => {
            return(
              <li key={index} onClick={menus.onclick}>
                <span className={`border-b-2 border-transparent hover:border-white cursor-pointer`}>
                  {menus.title}
                </span>
              </li>
            )
              
          }) : 
          MenuKepsek.map((menus,index) => {
            return(
              <li key={index} onClick={menus.onclick}>
                <span className={`border-b-2 border-transparent hover:border-white cursor-pointer`}>
                  {menus.title}
                </span>
              </li>
            )
          })
        }
        </ul>
      </div>
      <div className='flex-1 flex justify-center items-center p-8'>
        {renderContent()}
      </div>
    </div>
  );
}