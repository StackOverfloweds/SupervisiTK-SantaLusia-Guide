import Image from "next/image";
import Fotosantalusia from "@/img/FOTOSANTALUSIA.jpg"
import iconBuku from "@/img/iconBuku.jpg"
import santaLusia from "@/img/santaLusia.jpg"
import NavbarUser from "@/components/ui/NavbarUser"

export default function Home() {
  return (
    <div className="">
      <div className="px-56">
        <NavbarUser/>
      </div>

      {/* Hero Section */}
      <section className="w-full h-[600px] py-5  px-56">
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

      {/* Berlandaskan section */}
      <section className="py-5 bg-[#38c4c1]">
        <div className="px-56 ">
          <h1 className="font-bebasNeue font-bold text-4xl text-white pb-5 tracking-wider">Berlandaskan Semangat Santa Lusia</h1>
          <div className="flex gap-10 justify-center w-[55em] mx-auto">
            <div className="h-[15em] w-[100em] ">
              <Image src={santaLusia} className="w-full h-full object-cover object-top"/>
            </div>
            <p className="text-md font-poppins text-pretty text-white">Sekolah Santa Lusia berkomitmen untuk menyalakan cahaya pengetahuan dan iman dalam diri setiap siswa, terinspirasi oleh semangat Santa Lusia yang penuh keberanian dan keteguhan hati. Santa Lusia, martir dari Sirakusa, adalah teladan keteguhan iman dan pengorbanan yang tak tergoyahkan. Di bawah perlindungannya, 
              kami mendidik siswa untuk memiliki iman yang kuat, pengetahuan yang luas, dan kepedulian yang mendalam terhadap sesama. Melalui berbagai kegiatan akademik dan sosial, kami mengajarkan nilai-nilai moral dan cinta kasih yang dihidupi Santa Lusia, membentuk siswa menjadi individu yang berkarakter, penuh cahaya, 
              dan siap menghadapi masa depan dengan penuh percaya diri.</p>
          </div>
        </div>
      </section>

      {/* preschool education */}
      <section>
        <div className="py-5 px-56">
          <p className="font-bebasNeue text-center w-full text-xl">tentang kami</p>
          <h1 className="font-poppins font-black text-3xl">Best Pre School Education!</h1>
        </div>
      </section>
    </div>
  );
}
