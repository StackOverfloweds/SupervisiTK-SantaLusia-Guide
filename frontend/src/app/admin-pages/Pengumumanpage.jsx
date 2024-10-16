"use client"
import {useState,useEffect, useContext} from 'react'
import { useRouter } from "next/navigation";
import { ScrollArea } from "../../components/ui/scroll-area";
import { Toaster } from "../../components/ui/toaster";
import { useToast } from "../../hooks/use-toast";
import AuthContext from '../../lib/Context/AuthProvider';

export default function Pengumunan() {
  const router = useRouter();
  const {toast} = useToast();
  const [pengumuman, setPengumuman] = useState(null);
  const {userData} = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    handleGet()
  },[])

  const handleUpload = async (announcement) => {
    try{
      const upload = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/api/announcement/store`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          Authorization:`bearer ${sessionStorage.getItem("token")}`
        },
        body:JSON.stringify({
          content:announcement
        })
      })

      if(upload.ok){
        const ann = await upload.json();
        toast({
          variant:"success",
          title:"Pengumuman berhasil diupload",
          description:ann.message
        })
        window.location.reload();
        return;
      }
      return;
    }catch(e){
      console.log(e)
      toast({
        variant:"destructive",
        title:"Gagal upload",
        description:e,
      })
    }
  }

  const handleGet = async () => {
    try{
      const upload = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/api/announcement/getData`,{
        method:"GET",
        headers:{
          "Content-Type":"application/json",
          Authorization:`bearer ${sessionStorage.getItem("token")}`
        },
      })

      if(upload.ok){
        const ann = await upload.json();
        setPengumuman(ann.data)
        return;
      }
      return;
    }catch(e){
      console.log(e)
      toast({
        variant:"destructive",
        title:"Gagal memuat data",
        description:e,
      })
    }
  }

  
  return (
    <div className='p-4'>
      <div className='text-center mb-4'>
        <h1 className='text-3xl font-bold mb-2'>Halaman Pengumuman</h1>
        {
          userData?.user.role == "kepala_sekolah" ?
          <button
            onClick={() => setOpenModal(true)}
            className='border-b-2 border-transparent hover:border-black cursor-pointer'>
            Tambahkan Pengumuman
          </button>
          :
          ""
        }
        
      </div>
      <ScrollArea className='max-h-[35rem] overflow-y-auto space-y-4'>
      {!pengumuman? <h1 className='text-center text-pink-500 font-bold text-3xl'>Pengumuman belum tersedia</h1> : (
        pengumuman.map((peng,index) => {
          return(
            <div key={index} className='bg-gray-50 p-4 border border-gray-200 rounded-md shadow-sm'>
              <p className='text-gray-800 mb-2'>
                {peng.content}
              </p>
            </div>
          )
          
        })
      )}
      <AnnouncementPopup isOpen={openModal} onClose={() => setOpenModal(false)} handleUpload={handleUpload}/>
        <Toaster/>
      </ScrollArea>
      <div className='fixed bottom-0 right-0 w-[100rem] h-[5rem] bg-white drop-shadow-xl z-50'>
        <footer className='fixed bottom-0 text-gray-500 text-sm py-7 text-center w-full '>
          <p>
            Copyright © Supervisi
            <a href='#' className='text-blue-500 hover:underline'>
              TK SANTA LUSIA
            </a>{" "}
            2024 @ Saloma Banjarnahor
          </p>
        </footer>
      </div>
    </div>
  );
}


function AnnouncementPopup({ isOpen, onClose, handleUpload}) {
  const [announcement, setAnnouncement] = useState(null);
  const [isSubmitDisabled, setSubmitDisabled] = useState(false);
  const {toast} = useToast();
  
  // Handle the announcement text change
  const handleTextChange = (e) => {
    const text = e.target.value;
    setAnnouncement(text);
    setSubmitDisabled(text.length <= 10); // Enable button if text length > 10
  };

  // Handle form submission
  const handleSubmit = () => {
    if (announcement) {
      handleUpload(announcement);
      onClose(); // Close the modal after uploading
    } else {
      toast({
        variant: "destructive",
        title: "Input belum diisi",
        description: "Silakan masukkan pengumuman",
      });
    }
  };

  // Only render the popup if `isOpen` is true
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
        <p className="text-lg font-semibold mb-4">Masukkan Pengumuman Anda:</p>
        <textarea
          placeholder="Tulis pengumuman di sini..."
          className="w-full p-2 border rounded mb-4 h-32 resize-none focus:ring-2 focus:ring-blue-500"
          onChange={handleTextChange}
          value={announcement}
        />
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleSubmit}
            disabled={isSubmitDisabled}
            className={`${
              isSubmitDisabled
                ? "bg-gray-500"
                : "bg-blue-500 hover:bg-blue-600"
            } text-white px-4 py-2 rounded`}
          >
            Submit
          </button>
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>
      <Toaster/>
    </div>
  );
}
