"use client";
import { useState ,useEffect} from "react";
import axios from "axios";
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

export default function Pengumpulan() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get("/api/teachers"); // Ganti dengan endpoint API Anda
        setTeachers(response.data);
      } catch (error) {
        console.error("Error fetching teachers:", error);
      }
    };

    fetchTeachers();
  }, []);

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
          <Select>
            <SelectTrigger className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200 '>
              <SelectValue placeholder='Nama Guru' />
            </SelectTrigger>
            <SelectContent>
              {teachers.map((teacher) => (
                <SelectItem key={teacher.id} value={teacher.id}>
                  {teacher.name}
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
          {/* w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200 */}
          <Select>
            <SelectTrigger className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200 '>
              <SelectValue placeholder='Jenis Pengumpulan' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='RPH'>RPH</SelectItem>
              <SelectItem value='Vidio'>Vidio Pembelajaran</SelectItem>
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
            className='w-full border border-gray-300 rounded-md p-2 focus:outline-none'
          />
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
            placeholder='Masukkan keterangan'></textarea>
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
                  tolong diperiksa kembali lagi apa yang akan di kumpulkan.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Batalkan</AlertDialogCancel>
                <AlertDialogAction>Kumpulkan</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
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
    </div>
  );
}
