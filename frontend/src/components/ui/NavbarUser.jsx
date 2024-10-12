
import Image from "next/image"
import logo from "../../img/logo.png"
import Link from "next/link"

export default function NavbarUser() {
    return (
            <nav className="w-full h-auto py-2  flex">
                <div className="flex items-center">
                    <Image src={logo} width={100}/>
                    <a href="/" className={` uppercase font-bold text-4xl font-bebasNeue text-pink-500`}>
                        tk santa lusia
                    </a>
                </div>
                <ul className="flex w-full gap-1 items-center justify-end font-poppins text-sm">
                    <li><Link href="/" className="hover:bg-pink-500 hover:text-white active:bg-pink-500 active:text-white px-2 py-2 uppercase">Home</Link></li>
                    <li><Link href="/About" className="hover:bg-pink-500 hover:text-white active:bg-pink-500 active:text-white px-2 py-2 uppercase">Tentang kami</Link></li>
                    <li><Link href="/Contact" className="hover:bg-pink-500 hover:text-white active:bg-pink-500 active:text-white px-2 py-2 uppercase">Kontak kami</Link></li>
                    <li><Link href="/Registration" className="hover:bg-pink-500 hover:text-white active:bg-pink-500 active:text-white px-2 py-2 uppercase">Pendaftaran</Link></li>
                    <li><Link href="#" className=" hover:bg-pink-500 hover:text-white active:bg-pink-500 active:text-white px-2 py-2 uppercase">Login</Link></li>
                </ul>
            </nav>
    )
}