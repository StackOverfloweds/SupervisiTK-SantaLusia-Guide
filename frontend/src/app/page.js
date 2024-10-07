import Image from "next/image";
import Fotosantalusia from "@/img/FOTOSANTALUSIA.jpg"
import iconBuku from "@/img/iconBuku.jpg"
import iconSalib from "@/img/iconSalib.png"
import santaLusia from "@/img/santaLusia.jpg"
import GuruSantaLusia from "@/img/Gurusantalusia.jpg"
import Pembelajaran1 from "@/img/pembelajaran1.jpg"
import Pembelajaran2 from "@/img/pembeljaran2.jpg"
import CookingClass from "@/img/cookingclass.jpg"
import Gambar2 from "@/img/gambbar2.jpg"
import Gambar3 from "@/img/DokumentasiKegiatan/001.jpg"
import Learn from "@/img/learning_17643541.png"
import Partners from "@/img/partners_5371115.png"
import creative from "@/img/creative.png"
import teach from "@/img/teaching_769658.png"
import NavbarUser from "@/components/ui/NavbarUser"
import { Button } from "@/components/ui/button"
import { FaRegGem } from "react-icons/fa";
import { GoTrophy } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
import { IoPhonePortrait } from "react-icons/io5";
import { MdEmail,MdModelTraining } from "react-icons/md";
import { PiPersonSimpleThrowBold } from "react-icons/pi";
import { GiSpellBook } from "react-icons/gi";
import Credits from "./About/credits";

export default function Home() {
  return (
    <div className="">
      <div className="container mx-auto px-5">
        <NavbarUser/>
      </div>

      {/* Hero Section */}
      <section className="w-full h-[500px] md:h-[600px] my-5  container mx-auto px-5">
        <div className="grid md:flex items-center  md:gap-24 relative w-full md:max-w-5xl  mx-auto">
          <div className="relative border">
            <Image src={Fotosantalusia} width={500} className="aspect-video md:aspect-square w-full md:w-[500px] relative z-20 object-cover"></Image>
            <div className="absolute w- h-full md:w-[450px] md:h-[450px] top-0 md:top-20 left-0 md:left-20 z-10 bg-gradient-to-tr to-pink-500 from-[#feca02] "></div>
          </div>
          <div className="w-full md:w-60 text-center md:text-left my-14 md:my-0">
            <h1 className="uppercase font-bebasNeue text-3xl md:text-[70px] text-center md:text-left text-pretty  tracking-normal leading-none text-blue-500">tk santa lusia sei rotan</h1>
            <p className="font-poppins text-md md:text-lg">Kami belajar dan bermain</p>
          </div>
          <div className="md:absolute w-full max-w-[25em] md:max-w-[45em] h-full max-h-[1.5em] md:max-h-[10em]   right-0 -bottom-24 grid grid-cols-4 z-30 bg-slate-500 rounded-xl md:rounded-none mx-auto">
            <div className="p-2 w-full h-full  bg-[#38c4c1] flex  items-center justify-center ">
              <div className="mx-auto  my-auto md:h-full md:w-full">
                <div className="relative   w-[30px] md:w-[100px] mx-auto">
                  <GiSpellBook size="fill" color="white" className=""/>
                </div>
                <p className="font-bebasNeue text-lg md:text-2xl font-bold text-white text-center md:mt-1 ">Belajar</p>
              </div>
            </div>
            <div className="p-2 w-full h-full bg-[#feca02] flex items-center justify-center ">
              <div className="mx-auto">
                <div className="relative w-[30px] md:w-[100px] mx-auto">
                  <Image src={iconSalib} width={50}  alt="gambar salib" className="w-full "></Image>
                </div>
                <p className="font-bebasNeue text-lg md:text-2xl font-bold text-white text-center md:mt-1">Beriman</p>
              </div>
            </div>
            <div className="p-2 w-full h-full bg-pink-500 flex items-center justify-center ">
              <div className="mx-auto">
                <div className="relative w-[30px] md:w-[100px] mx-auto">
                  <MdModelTraining  size="fill" color="white"/>
                </div>
                <p className="font-bebasNeue text-lg md:text-2xl font-bold text-white text-center md:mt-1">Berlatih</p>
              </div>
            </div>
            <div className="p-2 w-full h-full bg-[#488df4] flex items-center justify-center ">
              <div className="mx-auto">
                <div className="relative w-[30px] md:w-[100px] mx-auto">
                  <PiPersonSimpleThrowBold size="fill" color="white"/>
                </div>
                <p className="font-bebasNeue text-lg md:text-2xl font-bold text-white text-center md:mt-1">Bermain</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Berlandaskan section */}
      <section className="py-5 bg-[#38c4c1] ">
        <div className="container mx-auto px-5">
          <h1 className="font-bebasNeue font-bold text-2xl md:text-4xl text-center md:text-left text-white pb-5 tracking-wider">Berlandaskan Semangat Santa Lusia</h1>
          <div className="grid grid-rows-2 md:grid-cols-2 gap-2 md:gap-10 justify-center w-full md:w-[55em] border mx-auto">
            <div className="  relative m-5">
              <Image src={santaLusia} width="100em" height="15em" className="object-cover object-top"/>
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
              <Image src={Gambar2} fill={true} className="object-cover"></Image>
            </div>
            <div className="border row-span-2 relative">
              <Image src={Gambar3} fill={true} className="object-cover"></Image>
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
              <div className="bg-pink-500 rounded-full h-24 w-24 mx-auto relative">
                <Image src={Learn} fill={true}></Image>
              </div>
              <h1 className="text-pink-500 font-bebasNeue text-2xl my-2">fasilitas yang sangat baik</h1>
              <p className="text-gray-600 font-poppins text-sm italic ">Sekolah Santa Lusia menyediakan ruang kelas yang ceria dan aman, lengkap dengan alat bermain edukatif yang menarik untuk mendukung pembelajaran anak-anak TK. Kami juga memiliki taman bermain yang luas dan nyaman, di mana anak-anak dapat bermain dan belajar dengan gembira setiap hari.</p>
            </div>
            <div className="bg-white h-full p-5 text-center">
              <div className="bg-[#488df4] rounded-full h-24 w-24 mx-auto relative">
                <Image src={Partners} fill={true}></Image>
              </div>
              <h1 className="text-[#488df4] #488df4 font-bebasNeue text-2xl my-2">PEMBELAJARAN DAN PENUMBUHAN IMAN ANAK</h1>
              <p className="text-gray-600 font-poppins text-sm italic ">Kami menanamkan nilai-nilai iman sejak dini melalui cerita-cerita inspiratif dan kegiatan rohani yang sederhana, membimbing anak-anak untuk tumbuh dengan hati yang penuh kasih dan kebaikan. Di Sekolah Santa Lusia, pembelajaran anak TK dirancang secara menyenangkan dan interaktif, sehingga anak-anak dapat mengembangkan kreativitas dan rasa ingin tahu mereka.</p>
            </div>
            <div className="bg-white h-full p-5 text-center">
              <div className="bg-[#3cc4c4] rounded-full h-24 w-24 mx-auto relative">
                <Image src={creative} fill={true}></Image>
              </div>
              <h1 className="text-[#3cc4c4] font-bebasNeue text-2xl my-2">Pembelajaran yang kreatif</h1>
              <p className="text-gray-600 font-poppins text-sm italic ">Di Sekolah Santa Lusia, pembelajaran anak TK dirancang secara menyenangkan dan interaktif, memanfaatkan alat bermain edukatif yang kreatif. Metode pembelajaran kami mendorong anak-anak untuk bereksplorasi, berkreasi, dan mengembangkan rasa ingin tahu mereka secara alami.</p>
            </div>
            <div className="bg-white h-full p-5 text-center">
              <div className="bg-[#feca02] rounded-full h-24 w-24 mx-auto relative">
                <Image src={teach} fill={true}></Image>
              </div>
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

      {/* Section tentang kami 2 */}
      <section>
        <div className="py-5 px-56">
          <p className="font-bebasNeue text-gray-400 uppercase text-3xl text-center">tentang kami</p>
          <h1 className="font-bebasNeue text-gray-600 text-5xl text-center w-[500px] mx-auto mt-2 mb-3">Pembelajaran yang diberikan guru terbaik kami</h1>
          <div className="grid grid-cols-3 grid-rows-3 gap-10">
            <span>
              <h1 className="font-bebasNeue text-gray-600 text-3xl text-right ">Menyenangkan dan Menarik</h1>
              <p className="text-right">Guru-guru kami tidak hanya ahli dalam bidang mereka, tetapi juga mampu menciptakan pengalaman pembelajaran yang menyenangkan dan menarik bagi setiap siswa.</p>
            </span>
            <span className="row-span-3 border relative">
              <Image src={CookingClass} fill={true} className="object-cover object-bottom"></Image>
            </span>
            <span>
              <h1 className="font-bebasNeue text-gray-600 text-3xl text-left ">Pengajaran Yang Profesional</h1>
              <p className="text-left">Pengajaran di Sekolah Santa Lusia dilakukan secara profesional, dengan pendekatan yang berpusat pada siswa dan komitmen yang kuat untuk mencapai keunggulan dalam pendidikan.</p>
            </span>
            <span>
              <h1 className="font-bebasNeue text-gray-600 text-3xl text-right ">Penuhi Dengan Cinta</h1>
              <p className="text-right">Kami adalah kelompok guru yang sangat mencintai anak-anak dan menikmati setiap saat.</p>
            </span>
            <span>
              <h1 className="font-bebasNeue text-gray-600 text-3xl text-left ">Mempersiapkan diri sebelum mengajar</h1>
              <p className="text-left">Guru-guru TK kami adalah para profesional yang rajin dan teliti, yang selalu mempersiapkan materi pembelajaran dengan cermat sebelum masuk ke dalam kelas.</p>
            </span>
            <span>
              <h1 className="font-bebasNeue text-gray-600 text-3xl text-right ">Pendidikan Spesial</h1>
              <p className="text-right">Guru-guru kami memiliki kemampuan khusus untuk mengajar dengan penuh dedikasi dan inovasi, menciptakan pengalaman belajar yang unik dan berkesan bagi setiap siswa.</p>
            </span>
            <span>
              <h1 className="font-bebasNeue text-gray-600 text-3xl text-left ">Berspiritualitas yang baik</h1>
              <p className="text-left">Guru-guru kami tidak hanya berkomitmen pada pembelajaran akademis, tetapi juga memiliki spiritualitas yang baik, memperkuat nilai-nilai moral dan keberagaman di dalam lingkungan pendidikan.</p>
            </span>
          </div>

        </div>
      </section>

      {/* Pendaftaran Section */}
      <section className="bg-[#488df4]">
        <div className="px-56 pt-5">
          <h1 className="font-poppinsBold text-3xl text-center text-white">Mari daftarkan anak-anak anda bersama kami</h1>
          <div className="grid grid-cols-4 mt-5">
            <div className="col-span-3 text-white grid grid-cols-2 border-r-2 px-2">
              <h1 className="font-bebasNeue text-3xl text-center col-span-2">Pendaftaran</h1>
              
              {/* */}
              <span className="text-md ">
                <p className="font-poppins text-center py-2">Langsung</p>
                <h3 className="font-poppins text-center">"Silakan datang ke <span className="font-poppinsBold">Sekolah Santa Lusia berlokasi  </span> di <span className="font-poppinsBold">Jalan Medan Batang KUIS km 14 No.123 SEI ROTAN KEC.Percut sei TUAN KABUPATEN DELI SERDANG.</span>"</h3>
              </span>
              <span className="text-md ">
                <p className="font-poppins text-center py-2">Online</p>
                <div className="flex justify-center">
                  <Button className="bg-[#FE7EC9]" size="lg">Klik sini</Button>
                </div>
              </span>
            </div>
            <div className="col-span-1 text-white">
              <h1 className="font-bebasNeue text-xl text-center col-span-2">Brosur</h1>
              <div className="flex justify-center">
                <Button className="bg-gradient-to-tr from-[#FE7EC9] to-[#38c4c1]" size="lg">Download Brosur</Button>
              </div>
              <h1 className="font-bebasNeue text-xl text-center col-span-2 mt-5">Syarat dan ketentuan</h1>
              <div className="flex justify-center">
                <Button className="bg-gradient-to-tr from-[#FE7EC9] to-[#38c4c1]" size="lg">Download S&K</Button>
              </div>
            </div>
          </div>
          <h1 className="font-poppinsBold text-center w-[700px] mx-auto text-white mt-4 pb-5">"Kami dengan senang hati menyambut kedatangan Anda untuk mengenal lebih jauh tentang lingkungan pembelajaran kami yang inspiratif."</h1>
        </div>
      </section>

      {/* Contact Section */}
      <section>
        <div className="grid grid-cols-3 px-56 py-28 text-center">
          <div>
            <FaLocationDot size={80} color="white" className="p-2 rounded-full bg-pink-500 mx-auto mb-2"/>
            <h1 className="font-poppins">Jalan Medan Batang KUIS km 14 No.123 SEI ROTAN KEC.Percut sei TUAN KABUPATEN DELI SERDANG</h1>
          </div>
          <div>
            <IoPhonePortrait size={80} color="white" className="p-2 rounded-full bg-yellow-500 mx-auto mb-2"/>
            <h1 className="font-poppins">+62 822-4802-6244</h1>
          </div>
          <div>
            <MdEmail size={80} color="white" className="p-2 rounded-full bg-[#38c4c1] mx-auto mb-2"/>
            <h1 className="font-poppins">tksantalusia82@gmail.com</h1>
          </div>
        </div>
      </section>

      {/* Credits section */}
      <Credits/>
    </div>
  );
}
