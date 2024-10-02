import Image from "next/image";
import Fotosantalusia from "@/img/FOTOSANTALUSIA.jpg"
import iconBuku from "@/img/iconBuku.jpg"
import NavbarUser from "@/components/ui/NavbarUser"

export default function Home() {
  return (
    <div className="">
      <NavbarUser/>
      <section className="w-full h-[600px] py-5 ">
        <div className="flex items-center gap-24 relative">
          <div className="relative">
            
            <Image Image src={Fotosantalusia} width={450} className="relative z-20"></Image>
            <div className="absolute w-[450px] h-[450px] bg-gradient-to-tr to-pink-500 from-[#feca02] top-14 left-14 z-10"></div>
          </div>
          <div className="w-60">
            <h1 className="uppercase font-bebasNeue text-[70px] text-pretty  tracking-normal leading-none text-blue-500">tk santa lusia sei rotan</h1>
            <p className="font-poppins font-bold">Kami belajar dan bermain</p>
          </div>
          <div className="absolute w-[45em] h-[10em] bg-slate-500 right-0 -bottom-24 grid grid-cols-4 z-30">
            <div className="w-full h-full bg-[#38c4c1] flex items-center justify-center ">
              <div className="mx-auto">
                <Image src={iconBuku} width={80}></Image>
                <p className="font-bebasNeue text-2xl font-bold text-white text-center mt-1">Belajar</p>
              </div>
            </div>
            <div className="w-full h-full bg-[#feca02] flex items-center justify-center ">
              <div className="mx-auto">
                <Image src={iconBuku} width={80}></Image>
                <p className="font-bebasNeue text-2xl font-bold text-white text-center mt-1">Belajar</p>
              </div>
            </div>
            <div className="w-full h-full bg-pink-500 flex items-center justify-center ">
              <div className="mx-auto">
                <Image src={iconBuku} width={80}></Image>
                <p className="font-bebasNeue text-2xl font-bold text-white text-center mt-1">Belajar</p>
              </div>
            </div>
            <div className="w-full h-full bg-[#488df4] flex items-center justify-center ">
              <div className="mx-auto">
                <Image src={iconBuku} width={80}></Image>
                <p className="font-bebasNeue text-2xl font-bold text-white text-center mt-1">Belajar</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
