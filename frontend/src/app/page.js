import Image from "next/image";
import Fotosantalusia from "@/img/FOTOSANTALUSIA.jpg"
import iconBuku from "@/img/iconBuku.jpg"
import santaLusia from "@/img/santaLusia.jpg"
import GuruSantaLusia from "@/img/Gurusantalusia.jpg"
import Pembelajaran1 from "@/img/pembelajaran1.jpg"
import Pembelajaran2 from "@/img/pembeljaran2.jpg"
import NavbarUser from "@/components/ui/NavbarUser"
import { FaRegGem } from "react-icons/fa";
import { GoTrophy } from "react-icons/go";

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
            <Image src={Fotosantalusia} width={450} className="relative z-20"></Image>
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
            <div className="h-[15em] w-[100em] relative">
              <Image src={santaLusia} fill={true} className="object-cover"/>
            </div>
            <p className="text-md font-poppins text-pretty text-white">Sekolah Santa Lusia berkomitmen untuk menyalakan cahaya pengetahuan dan iman dalam diri setiap siswa, terinspirasi oleh semangat Santa Lusia yang penuh keberanian dan keteguhan hati. Santa Lusia, martir dari Sirakusa, adalah teladan keteguhan iman dan pengorbanan yang tak tergoyahkan. Di bawah perlindungannya, 
              kami mendidik siswa untuk memiliki iman yang kuat, pengetahuan yang luas, dan kepedulian yang mendalam terhadap sesama. Melalui berbagai kegiatan akademik dan sosial, kami mengajarkan nilai-nilai moral dan cinta kasih yang dihidupi Santa Lusia, membentuk siswa menjadi individu yang berkarakter, penuh cahaya, 
              dan siap menghadapi masa depan dengan penuh percaya diri.</p>
          </div>
        </div>
      </section>

      {/* preschool education */}
      <section>
        <div className="pt-5 px-56">
          <p className="font-bebasNeue text-center w-full text-2xl text-gray-400 font-thin uppercase">tentang kami</p>
          <h1 className="font-poppinsBold font-black text-3xl text-gray-800 text-center">Best Pre School Education!</h1>
          <div className="grid grid-cols-4 grid-rows-4 gap-3 w-full mt-5 p-5 h-[40em]">
            <div className=" text-center font-poppins text-gray-500 row-span-2 m-auto">
              <FaRegGem size={50} color="white" className="p-2 rounded-full bg-pink-500 mx-auto mb-2"/>
              <h1 className="mb-2">MOTTO KAMI</h1>
              <span>
                <p className="text-gray-800 font-medium italic font-poppinsBold">“CERDAS, CERIA, UNGGUL DAN PEDULI SESAMA (CCUP)"</p>
              </span>
            </div>
            <div className="text-center font-poppins text-gray-500 row-span-2 m-auto">
              <GoTrophy size={50} color="white" className="p-2 rounded-full bg-pink-500 mx-auto mb-2"/>
              <h1 className="mb-2">VISI KAMI</h1>
              <span className="">
                <p className="text-gray-800 font-medium italic font-poppinsBold">“Menjadi Lembaga Pendidikan yang Unggul dan Berkualitas dengan Semangat Santa Lusia”</p>
              </span>
            </div>
            <div className="border col-span-2 row-span-4 relative">
              <Image src={GuruSantaLusia} fill={true}></Image>
            </div>
            <div className="border row-span-2 relative">
              <Image src={GuruSantaLusia} fill={true} className="object-cover"></Image>
            </div>
            <div className="border row-span-2 relative">
              <Image src={GuruSantaLusia} fill={true} className="object-cover"></Image>
            </div>
          </div>
        </div>
      </section>

      {/* Keunggulan Sekolah Section */}
      <section className="bg-[#feca02] px-56 pt-5">
        <div className="grid grid-rows-6 items-center">
          <div className="font-poppins">
            <p className="font-bebasNeue text-2xl text-center">KEUNGGULAN SEKOLAH KAMI</p>
            <h1 className="font-poppinsBold text-3xl text-center">Layanan yang Kami Sediakan</h1>
          </div>
          <div className="grid grid-cols-4 gap-3 row-span-5 pt-5">
            <div className="bg-white h-full p-5 text-center">
              <div className="bg-gray-500 rounded-full h-24 w-24 mx-auto"></div>
              <h1 className="text-pink-500 font-bebasNeue text-2xl my-2">fasilitas yang sangat baik</h1>
              <p className="text-gray-600 font-poppins text-sm italic ">Sekolah Santa Lusia menyediakan ruang kelas yang ceria dan aman, lengkap dengan alat bermain edukatif yang menarik untuk mendukung pembelajaran anak-anak TK. Kami juga memiliki taman bermain yang luas dan nyaman, di mana anak-anak dapat bermain dan belajar dengan gembira setiap hari.</p>
            </div>
            <div className="bg-white h-full p-5 text-center">
              <div className="bg-gray-500 rounded-full h-24 w-24 mx-auto"></div>
              <h1 className="text-[#488df4] #488df4 font-bebasNeue text-2xl my-2">PEMBELAJARAN DAN PENUMBUHAN IMAN ANAK</h1>
              <p className="text-gray-600 font-poppins text-sm italic ">Kami menanamkan nilai-nilai iman sejak dini melalui cerita-cerita inspiratif dan kegiatan rohani yang sederhana, membimbing anak-anak untuk tumbuh dengan hati yang penuh kasih dan kebaikan. Di Sekolah Santa Lusia, pembelajaran anak TK dirancang secara menyenangkan dan interaktif, sehingga anak-anak dapat mengembangkan kreativitas dan rasa ingin tahu mereka.</p>
            </div>
            <div className="bg-white h-full p-5 text-center">
              <div className="bg-gray-500 rounded-full h-24 w-24 mx-auto"></div>
              <h1 className="text-[#3cc4c4] font-bebasNeue text-2xl my-2">Pembelajaran yang kreatif</h1>
              <p className="text-gray-600 font-poppins text-sm italic ">Di Sekolah Santa Lusia, pembelajaran anak TK dirancang secara menyenangkan dan interaktif, memanfaatkan alat bermain edukatif yang kreatif. Metode pembelajaran kami mendorong anak-anak untuk bereksplorasi, berkreasi, dan mengembangkan rasa ingin tahu mereka secara alami.</p>
            </div>
            <div className="bg-white h-full p-5 text-center">
              <div className="bg-gray-500 rounded-full h-24 w-24 mx-auto"></div>
              <h1 className="text-[#feca02] font-bebasNeue text-2xl my-2">GURU GURU YANG KOMPETEN</h1>
              <p className="text-gray-600 font-poppins text-sm italic ">Guru-guru di Sekolah Santa Lusia adalah tenaga pengajar yang kompeten dan berpengalaman, selalu siap membimbing dan menginspirasi setiap anak. Dengan pendekatan yang penuh kasih dan metode pengajaran yang inovatif, mereka memastikan setiap siswa mendapatkan perhatian dan pendidikan terbaik.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CCUP section */}
      <section>
        <div className="grid grid-cols-5 px-56 p-12">
          <div className="col-span-3 relative">
            <Image src={Pembelajaran2} className="absolute w-[350px] h-[500px] object-cover z-10"></Image>
            <div className="relative w-[400px] h-[450px] bg-gradient-to-tr to-pink-500 from-[#feca02] top-14 left-14 z-20">
              <Image src={Pembelajaran1} className="absolute  w-[350px] h-[450px] object-cover top-6 right-6"></Image>
            </div>
          </div>
          <div className="font-poppins w-full col-span-2">
            <h1 className="mb-2 font-bebasNeue text-5xl text-blue-500 ">“CERDAS, CERIA, UNGGUL DAN PEDULI SESAMA (CCUP)"</h1>
            <p className="mb-1 text-gray-600 text-md">"Filosofi CCUP, yaitu Cerdas, Ceria, Unggul, dan Peduli Sesama, menjadi landasan utama bagi setiap siswa di Sekolah Santa Lusia, mengilhami mereka untuk berkembang secara holistik dan menjadi individu yang berkontribusi dalam masyarakat."</p>
            <p className=" text-gray-600 text-md">"Dengan komitmen terhadap nilai-nilai CCUP, kami memastikan bahwa setiap siswa tidak hanya memiliki kecerdasan akademis, tetapi juga kepribadian yang ceria, prestasi yang unggul, serta rasa peduli yang mendalam terhadap sesama dan lingkungan."</p>
          </div>
        </div>
      </section>
    </div>
  );
}
