import NavbarUser from "@/components/ui/NavbarUser";
import SantaLusia from "@/img/KontakKami/santalusia.jpg"
import Image from "next/image"
import { FaFacebookF ,FaLinkedinIn,FaYoutube   } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";
import Credits from "../About/credits";

export default function KontakKami(){
    return(
        <>
            <header className="container mx-auto">
                <NavbarUser/>
            </header>
            
            <section className="my-14">
                <div className="relative md:w-[250px] md:h-[350px] mx-auto ">
                    <Image src={SantaLusia} fill={true} sizes="(max-width: 768px) 400px, 700px" className="object-cover"></Image>
                </div>
                <h1 className="font-bebasNeue text-5xl text-center my-5 text-gray-500">TK Santa Lusia Sei Rotan</h1>
            </section>

            <section className=" bg-black md:p-32 flex justify-center items-center">
                <div className="grid grid-cols-2 container m-auto gap-5">
                    <div className="grid grid-cols-5 w-auto m-auto  gap-5">
                        <a 
                        className="md:w-14 md:h-14 p-2 mx-auto flex items-center justify-center rounded-full   bg-[#3b5998]"
                        href="https://www.facebook.com/agustinus.r.simbolon"
                        >
                            <FaFacebookF  color="white" size="fill" />
                        </a>
                        <a className="md:w-14 md:h-14 p-2 mx-auto flex items-center justify-center rounded-full   bg-[#c536a4]"
                        href="https://www.instagram.com/agustinus.r.simbolon"
                        >
                            <RiInstagramFill color="white" size="fill" />
                        </a>
                        <a className="md:w-14 md:h-14 p-2 mx-auto flex items-center justify-center rounded-full   bg-[#007ab9]"
                        href="https://www.facebook.com/agustinus.r.simbolon"
                        >
                            <FaLinkedinIn  color="white" size="fill" />
                        </a>
                        <a className="md:w-14 md:h-14 p-2 mx-auto flex items-center justify-center rounded-full   bg-[#d22215]"
                        href="https://www.facebook.com/agustinus.r.simbolon"
                        >
                            <FaYoutube   color="white" size="fill" />
                        </a>
                        <a className="md:w-14 md:h-14 p-2 mx-auto flex items-center justify-center rounded-full   bg-[#db534b]"
                        href="tksantalusia82@gmail.com"
                        >
                            <IoMdMail   color="white" size="fill" />
                        </a>
                    </div>
                    <div className="text-white font-poppins borde w-full md:max-w-lg">
                        <h1 className="font-poppinsBold md:text-3xl md:w-[500px] mb-5">Ikuti semua kegiatan seru kami di Media sosial kami</h1>
                        <p className="leading-loose">"Bergabunglah dengan kami di media sosial untuk meraih update terbaru tentang kegiatan dan prestasi sekolah kami! Jadilah bagian dari komunitas kami yang dinamis dan ikuti perjalanan pendidikan yang inspiratif bersama kami. Kunjungi akun media sosial kami dan temukan lebih banyak lagi alasan untuk bergabung dengan kami di Sekolah Santa Lusia!"</p>
                    </div>
                </div>
            </section>

            <Credits/>
        </>
    )
}