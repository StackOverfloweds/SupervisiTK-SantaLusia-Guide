"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../components/ui/alert-dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { useEffect, useState } from "react"; // Import useEffect and useState
import { Router } from "next/router";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Toaster } from "../../components/ui/toaster";
import { useToast } from "../../hooks/use-toast";

export default function Pengumpulan() {
  const [users, setUsers] = useState([]); // State to hold users
  const [selectedUserId, setSelectedUserId] = useState(null); // State to hold selected user ID
  const [selectedFile, setSelectedFile] = useState(null); // State to hold selected file
  const [submissionType, setSubmissionType] = useState(null); // State to hold submission type
  const [description, setDescription] = useState(""); // State to hold description
  const [loading, setLoading] = useState(false); // State to track loading status
  const {toast} = useToast();
  
  useEffect(() => {
    // Fetch users from the backend
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_API}/api/users/prof-user`
        ); // Adjust the API endpoint as necessary
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  // Handle form submission
  const handleSubmit = async () => {
    if (!selectedUserId || !selectedFile || !submissionType || !description) {
      toast({
        variant:"destructive",
        title:"Failed to upload file",
        description:"harap cek lagi syarat penguploadan dan pastikan tidak ada input yang kosong"
      })
      return;
    }

    const formData = new FormData();
    formData.append("user_id", selectedUserId);
    formData.append("file", selectedFile);
    formData.append("file_type", submissionType);
    formData.append("description", description);
    console.log(formData.get("user_id"))
    console.log(formData.get("file"))
    console.log(formData.get("file_type"))
    console.log(formData.get("description"))

    setLoading(true); // Set loading to true when the upload starts
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/api/rph/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Error uploading file.");
      }

      const result = await response.json();
      toast({
        variant:"success",
        title:"Penguploadan berhasil",
        description:result.message
      })
    } catch (error) {
      toast({
        variant:"destructive",
        title:"Failed to upload file",
        description:"harap cek lagi syarat penguploadan dan pastikan tidak ada input yang kosong"
      })
    } finally {
      setLoading(false); // Reset loading state after the upload attempt
    }
  };

  return (
    <div className='p-8'>
      {/* Header */}
      <h1 className='text-2xl font-bold mb-6'>
        Halaman Pengumpulan RPH dan Video Pembelajaran
      </h1>

      <div className='bg-white p-6 shadow-md rounded-lg max-w-lg mx-auto'>
        {/* Nama Guru */}
        <div className='mb-4'>
          <label
            className='block text-gray-700 font-bold mb-2'
            htmlFor='namaGuru'>
            Nama Guru :
          </label>
          <Select onValueChange={setSelectedUserId}>
            <SelectTrigger className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200 '>
              <SelectValue placeholder='Pilih Nama Guru' />
            </SelectTrigger>
            <SelectContent>
              {users.map((user) => (
                <SelectItem key={user.user_id} value={user.user_id}>
                  {user.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Jenis Pengumpulan */}
        <div className='mb-4'>
          <label
            className='block text-gray-700 font-bold mb-2'
            htmlFor='jenisPengumpulan'>
            Jenis Pengumpulan
          </label>
          <Select onValueChange={setSubmissionType}>
            <SelectTrigger className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200 '>
              <SelectValue placeholder='Jenis Pengumpulan' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='RPH'>RPH</SelectItem>
              <SelectItem value='Video'>Video Pembelajaran</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Upload File */}
        <div className='mb-4'>
          <label
            className='block text-gray-700 font-bold mb-2'
            htmlFor='uploadFile'>
            Upload File
          </label>
          <input
            id='uploadFile'
            type='file'
            accept={submissionType == "RPH" ? ".pdf": "video/mp4,video/x-m4v,video/*"}
            className='w-full border border-gray-300 rounded-md p-2 focus:outline-none'
            onChange={(e) => {
              if(!submissionType){
                toast({
                  variant:"destructive",
                  title:"Kesalahan",
                  description:"harap isi jenis pengumpulan sebelum mengupload file"
                })
                e.target.value = null;
                return;
              }
              if(e.target.files[0].type != "application/pdf" && submissionType == "RPH"){
                toast({
                  variant:"destructive",
                  title:"File tidak sesuai",
                  description:"file yang diupload harusnya PDF"
                })
                e.target.value = null;
                return;
              }else if(e.target.files[0].type != "video/mp4" && submissionType == "Video"){
                toast({
                  variant:"destructive",
                  title:"File tidak sesuai",
                  description:"file yang diupload harusnya Video"
                })
                e.target.value = null;
                return;
              }
              setSelectedFile(e.target.files[0])
              // if(setSelectedFil)
            }} // Update selected file
          />
          <p className="text-xs">Syarat penguploadan vidio : </p>
          <ul role="list" className="text-xs marker:text-red-500 text-red-500 marker">
            <li>*format vidio mp4</li>
            <li>*berukuran maks 60mb</li>
          </ul>
        </div>

        {/* Keterangan */}
        <div className='mb-4'>
          <label
            className='block text-gray-700 font-bold mb-2'
            htmlFor='keterangan'>
            Keterangan
          </label>
          <textarea
            id='keterangan'
            rows='3'
            className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200'
            placeholder='Masukkan keterangan'
            onChange={(e) => setDescription(e.target.value)} // Update description
          ></textarea>
        </div>

        <div className='text-center'>
          <AlertDialog>
            <AlertDialogTrigger className='bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300'>
              Kumpulkan
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Anda Yakin Untuk Mengumpulkannya?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  Tolong diperiksa kembali lagi apa yang akan dikumpulkan.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Batalkan</AlertDialogCancel>
                <AlertDialogAction asChild>
                  <Button onClick={handleSubmit} disabled={loading}>
                    {loading ? "Mengupload..." : "Kumpulkan"}
                  </Button>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          {loading && (
            <div className='flex justify-center items-center mt-4'>
              <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600'></div>{" "}
              {/* Spinner */}
            </div>
          )}
          <div className='fixed bottom-0 right-0 w-[100rem] h-[5rem] bg-white drop-shadow-xl z-50'>
            <footer className='fixed bottom-0 text-gray-500 text-sm py-7 items-center justify-center w-full '>
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
      </div>
      <Toaster/>
    </div>
  );
}
