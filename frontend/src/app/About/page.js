"use client"
import { useState,useEffect, useRef } from "react";
import NavbarUser from "../../components/ui/NavbarUser";
import { IoStar } from "react-icons/io5";
import GuruSantaLusia from "../../img/Gurusantalusia.png";
import gambarDepan from "../../img/About/gambardepan.png"
import kantor from "../../img/About/kantor.jpg"
import kegiatan from "../../img/About/kegiatannn.jpg"
import ruangBermain from "../../img/About/ruangbermain.png"
import ruangKelas1 from "../../img/About/ruangkelas.jpg"
import ruangKelas2 from "../../img/About/ruangkelass.jpg"
import pembelajaran1 from "../../img/About/pembelajaran1.jpg"
import pembelajaran2 from "../../img/About/pembelajaran2.jpg"
import pembelajaran3 from "../../img/About/pembelajaran3.jpg"
import KegiatanLainnya1 from "../../img/About/KegiatanLainnya1.jpg"
import KegiatanLainnya2 from "../../img/About/KegiatanLainnya2.jpg"
import KegiatanLainnya3 from "../../img/About/KegiatanLainnya3.jpg"
import KegiatanLainnya4 from "../../img/About/KegiatanLainnya4.jpg"
import KegiatanLainnya5 from "../../img/About/KegiatanLainnya5.jpg"
import KegiatanLainnya6 from "../../img/About/KegiatanLainnya6.jpg"
import KegiatanLainnya7 from "../../img/About/KegiatanLainnya7.jpg"
import KegiatanLainnya8 from "../../img/About/KegiatanLainnya8.jpg"
import Image from "next/image";
import { Button } from "../../components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "../../components/ui/carousel"

import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css'
import Autoplay from "embla-carousel-autoplay"
import useCheckClientDimension from "../../lib/hooks";


function SimpleGallery({galleryID,children, className}) {
    useEffect(()=>{
        let lightbox = new PhotoSwipeLightbox({
            gallery: '#' + galleryID,
            children: 'a',
            pswpModule: () => import('photoswipe'),
        })
        lightbox.init();

        console.log(galleryID)

        return() => {
            lightbox.destroy();
            lightbox = null
        }
    },[galleryID]);

    return (
        <div id={galleryID} className={className}>
            {children}
        </div>
    )
}

export default function About() {
    const[imageId, setImageId] = useState();
    const datFasil  = [gambarDepan,kantor,kegiatan,ruangBermain,ruangKelas1,ruangKelas2]
    const dataPembelajaran = [pembelajaran1,pembelajaran2,pembelajaran3]
    const dataKegiatan = [KegiatanLainnya1,KegiatanLainnya2,KegiatanLainnya3,KegiatanLainnya4,KegiatanLainnya5,KegiatanLainnya6,KegiatanLainnya7,KegiatanLainnya8]
    const plugin = useRef(
        Autoplay({delay:2000, stopOnInteraction:true})
    )
    const [api,setApi] = useState();
    const [selectedImage,setSelectedImage] = useState();
    const clientWidth = useCheckClientDimension();
    const [pemFormat,setPemFormat] = useState("vertical")

    useEffect(() => {
        if(!api ) return;
        plugin.current.stop
        api.scrollTo(selectedImage, true)
        plugin.current.reset
    },[api,selectedImage])

    useEffect(()  => {
        if(!clientWidth)return;
        const {width} = clientWidth
        if(width < 768){
            setPemFormat("horizontal")
        }else{
            setPemFormat("vertical")
        }
    },[clientWidth])
    

    return (
            <>
                    <div className="container mx-auto px-5 " >
                        <div className="sticky md:static top-0 z-50 bg-white">
                            <NavbarUser/>
                        </div>
                        {/* hero section */}
                        <section className="py-5 md:py-14">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 container p-5 md:px-24 ">
                                <div className="font-poppins md:text-lg text-sm text-center md:my-auto my-5 order-2 md:order-1">
                                    <IoStar color="white" className="p-1 h-5 w-5 md:w-14 md:h-14 md:p-3 bg-pink-500 rounded-full mx-auto "/>
                                    <h1 className=" uppercase text-xl md:text-4xl my-2 text-pretty"><span className="font-poppinsBold">Kepala sekolah</span> TK Santa Lusia Sei Rotan</h1>
                                    <p>&quot;Pendidikan dini yang berkualitas adalah investasi terbaik untuk masa depan, karena fondasi yang kuat ditanamkan sejak dini akan membawa keberhasilan yang berkelanjutan.&quot;</p>
                                    <p>~SR. FERDINANDA, KSFL ~</p>
                                </div>
                                <div className="relative md:h-[700px] h-[400px] overflow-hidden md:order-2 order-1 md:rounded-none rounded-xl">
                                    <Image src={GuruSantaLusia} fill={true} sizes="(max-width: 768px) 400px, 700px" alt="foto guru-guru di tk santa lusia" className="relative object-cover"></Image>
                                </div>
                            </div>
                        </section>
                        
                        {/* Struktur Pengajar Section */}
                        <section className="py-5 md:py-14">
                            <div className="">
                                <h1 className="font-poppins text-xl md:text-4xl text-center mb-10"><span className="font-poppinsBold">Struktur Pengajar</span> <br></br>TK Santa Lusia Sei Rotan</h1>
                                <div className="h-[500px] md:h-[700px] overflow-hidden overflow-y-auto ">
                                    <div className="grid grid-cols-1 md:grid-cols-3 ">
                                        <div className="text-center md:col-span-3">
                                            <Image src={GuruSantaLusia} width={208} height={208} sizes="(max-width: 768px) 96px, 208px" alt="foto sr. ferdinanda (kepala sekolah)" className="mx-auto my-5 w-24 md:w-52 h-24 md:h-52 object-cover object-top rounded-full border-[5px]  border-yellow-400 "></Image>
                                            <h1 className="font-bebasNeue text-lg md:text-4xl uppercase">SR. FERDINANDA, KSFL</h1>
                                            <p className="font-poppins text-sm md:text-lg">Kepala Sekolah</p>
                                        </div>
                                        <div className="text-center ">
                                            <Image src={GuruSantaLusia} width={208} height={208} sizes="(max-width: 768px) 96px, 208px" alt="foto bu floren (guru)" className="mx-auto my-5 w-24 md:w-52 h-24 md:h-52 object-cover object-top rounded-full border-[5px]  border-yellow-400 "></Image>
                                            <h1 className="font-bebasNeue text-lg md:text-4xl uppercase">Floren Agustian, Lumban Gaol, S.Pd</h1>
                                            <p className="font-poppins text-sm md:text-lg">Guru TK</p>
                                        </div>
                                        <div className="text-center ">
                                            <Image src={GuruSantaLusia} width={208} height={208} sizes="(max-width: 768px) 96px, 208px" alt="foto bu widia (guru)" className="mx-auto my-5 w-24 md:w-52 h-24 md:h-52 object-cover object-top rounded-full border-[5px]  border-yellow-400 "></Image>
                                            <h1 className="font-bebasNeue text-lg md:text-4xl uppercase">Widia Naibaho, S.Pd</h1>
                                            <p className="font-poppins text-sm md:text-lg">Guru TK</p>
                                        </div>
                                        <div className="text-center ">
                                            <Image src={GuruSantaLusia} width={208} height={208} sizes="(max-width: 768px) 96px, 208px" alt="foto bu Yuselina (guru)" className="mx-auto my-5 w-24 md:w-52 h-24 md:h-52 object-cover object-top rounded-full border-[5px]  border-yellow-400 "></Image>
                                            <h1 className="font-bebasNeue text-lg md:text-4xl uppercase">Yuselina</h1>
                                            <p className="font-poppins text-sm md:text-lg">Guru TK</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Fasilitas sekolah section */}
                        <section className="">
                            <h1 className="uppercase font-poppins text-center text-lg md:text-4xl py-5"><span className="font-poppinsBold">fasilitas</span> <br/> TK Santa lusia</h1>
                            <SimpleGallery galleryID="galleryFasilitias" className="grid grid-cols-3 gap-3" >
                                {
                                    datFasil.map((data,key) => {
                                        return(
                                                <a 
                                                key={"galleryFasilitias-" + key} 
                                                href={data.src}
                                                data-pswp-width={data.width}
                                                data-pswp-height={data.height}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="relative overflow-hidden h-full p-0 rounded-md" onClick={() => {
                                                    setImageId(data)
                                                    }}>
                                                    <Image 
                                                    src={data.src} 
                                                    key={key} 
                                                    width={data.width} 
                                                    height={data.width}  
                                                    sizes="(max-width: 768px) 400px, 800px" 
                                                    alt="Depan sekolah" 
                                                    className="aspect-square object-cover object-center hover:opacity-75"/>
                                                </a>   
                                        )
                                    })
                                }  
                            </SimpleGallery>
                        </section>
                            
                        {/*  */}
                        <section className="py-5 md:py-14">
                            <h1 className="uppercase font-poppins text-center text-lg md:text-4xl "><span className="font-poppinsBold">Dokumentasi</span> <br/> Pembelajaran</h1>
                            <div className="grid md:grid-cols-3 pt-5">
                                <div className="md:col-span-2 px-14 flex items-center">
                                        <Carousel
                                        plugins={[plugin.current]}
                                        className="w-full   mx-auto "
                                        onMouseEnter={plugin.current.stop}
                                        onMouseLeave={plugin.current.reset}
                                        setApi={setApi}                                        
                                        >
                                            <CarouselContent className="aspect-video">
                                                {dataPembelajaran.map((data, index) => (
                                                    <CarouselItem key={index} id={index}>
                                                        <Image src={data.src} width={data.width} height={data.height} alt={data.src} className="aspect-square object-cover object-center rounded-xl w-full h-full max-h-lg"></Image>
                                                    </CarouselItem>
                                                ))}
                                            </CarouselContent>
                                            <CarouselPrevious />
                                            <CarouselNext />
                                        </Carousel>
                                </div>
                                <div className="w-full">
                                    <Carousel orientation={pemFormat} className="w-full max-w-[270px] md:max-w-[500px] mx-auto p-2  ">
                                        <CarouselContent className="h-full md:max-h-[440px] rounded-xl w-full max-w-[100px] md:max-w-[500px]">
                                                {dataPembelajaran.map((data, index) => (
                                                        <CarouselItem key={index}>
                                                                <a
                                                                key={"galleryPembelajaran-" + index} 
                                                                href={data.src}
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    setSelectedImage(index)
                                                                }}
                                                                >
                                                                    <Image src={data.src} width={data.width} height={data.height} alt={`${data.src}`} className="aspect-video object-cover object-center w-full rounded-xl"></Image>
                                                                </a>
                                                        </CarouselItem>
                                                    ))}
                                        </CarouselContent>
                                    </Carousel>
                                </div>
                            </div>
                        </section>
                        
                        <section className="">
                            <h1 className="uppercase font-poppins text-center text-lg md:text-4xl py-5"><span className="font-poppinsBold">Kegiatan</span> <br/> Lainnya</h1>
                            <SimpleGallery galleryID="galleryKegiatan" className="grid grid-cols-3 gap-3" >
                                {
                                    dataKegiatan.map((data,key) => {
                                        return(
                                                <a 
                                                key={"galleryKegiatan-" + key} 
                                                href={data.src}
                                                data-pswp-width={data.width}
                                                data-pswp-height={data.height}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="relative overflow-hidden h-full p-0 rounded-md" >
                                                    <Image 
                                                    src={data.src} 
                                                    key={key} 
                                                    width={data.width} 
                                                    height={data.width}  
                                                    sizes="(max-width: 768px) 400px, 800px" 
                                                    alt={"kegiatanSekolah" + key}
                                                    className="aspect-square object-cover object-center hover:opacity-75"/>
                                                </a>   
                                        )
                                    })
                                }  
                            </SimpleGallery>
                        </section>
                    </div>
                    
            </>
    )
}