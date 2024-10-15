"use client"
import Image from "next/image"
import logo from "../../img/logo.png"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { IoMenu } from "react-icons/io5";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

  


export default function NavbarUser() {
    const pathName = usePathname()
    let defaultStyle = "px-2 py-2 uppercase text-sm md:text-lg"

    const navbarSheets = ()=>{
        defaultStyle = defaultStyle + " my-14"
        return(
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="sm"><IoMenu size={30}/></Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                    <SheetTitle className="font-poppinsBold text-center">Navigasi</SheetTitle>
                    </SheetHeader>
                    <ul className=" w-full grid grid-cols-1 grid-rows-5 gap-5 items-center font-poppins text-sm pt-5">
                        <li><Link href="/" className={ `${pathName == "/" ? "bg-pink-500 text-white" : "hover:bg-pink-500 hover:text-white active:bg-pink-500 active:text-white"} ${defaultStyle}`} >Home</Link></li>
                        <li><Link href="/About" className={ `${pathName == "/About" ? "bg-pink-500 text-white" : "hover:bg-pink-500 hover:text-white active:bg-pink-500 active:text-white"} ${defaultStyle}`}>Tentang kami</Link></li>
                        <li><Link href="/Contact" className={ `${pathName == "/Contact" ? "bg-pink-500 text-white" : "hover:bg-pink-500 hover:text-white active:bg-pink-500 active:text-white"} ${defaultStyle}`}>Kontak kami</Link></li>
                        <li><Link href="/Registration" className={ `${pathName == "/Registration" ? "bg-pink-500 text-white" : "hover:bg-pink-500 hover:text-white active:bg-pink-500 active:text-white"} ${defaultStyle}`}>Pendaftaran</Link></li>
                        <li><Link href="/Authentication" className={ `${pathName == "/Authentication" ? "bg-pink-500 text-white" : "hover:bg-pink-500 hover:text-white active:bg-pink-500 active:text-white"} ${defaultStyle}`}>Login</Link></li>
                    </ul>
                </SheetContent>
            </Sheet>
        )
    }

    return (
            <nav className="w-full md:flex grid grid-cols-2 grid-rows-1">
                <div className=" grid grid-cols-2 items-center gap-3">
                    <span className="relative h-28 md:h-36 ">
                        <Image src={logo} fill={true} alt="logo TK santa lusia" sizes="(max-width: 768px) 50px, 100px" className="object-cover" />
                    </span>
                    <a href="/" className={` uppercase font-bold leading-none text-2xl md:text-4xl w-14 md:w-auto font-bebasNeue text-pink-500`}>
                        tk santa lusia
                    </a>
                </div>

                <div className="md:hidden visible flex items-center justify-end ">
                    {navbarSheets()}
                </div>
                <ul className="hidden md:visible md:flex w-full  gap-1 items-center justify-end font-poppins text-sm ">
                    <li><Link href="/" className={ `${pathName == "/" ? "bg-pink-500 text-white" : "hover:bg-pink-500 hover:text-white active:bg-pink-500 active:text-white"} ${defaultStyle}`} >Home</Link></li>
                    <li><Link href="/About" className={ `${pathName == "/About" ? "bg-pink-500 text-white" : "hover:bg-pink-500 hover:text-white active:bg-pink-500 active:text-white"} ${defaultStyle}`}>Tentang kami</Link></li>
                    <li><Link href="/Contact" className={ `${pathName == "/Contact" ? "bg-pink-500 text-white" : "hover:bg-pink-500 hover:text-white active:bg-pink-500 active:text-white"} ${defaultStyle}`}>Kontak kami</Link></li>
                    <li><Link href="/Registration" className={ `${pathName == "/Registration" ? "bg-pink-500 text-white" : "hover:bg-pink-500 hover:text-white active:bg-pink-500 active:text-white"} ${defaultStyle}`}>Pendaftaran</Link></li>
                    <li><Link href="/Authentication" className={ `${pathName == "/Authentication" ? "bg-pink-500 text-white" : "hover:bg-pink-500 hover:text-white active:bg-pink-500 active:text-white"} ${defaultStyle}`}>Login</Link></li>
                </ul>
            </nav>
    )
}

