"use client";
import React, { useState } from "react";
import { ScrollArea } from "../../components/ui/scroll-area";

export default function DataPengajar() {
  // Data dummy untuk daftar pengajar
  const [pengajar, setPengajar] = useState([
    { id: 1, nama: "Rayuadi Sianipar, S.Pd", unit: "TK SANTA LUSIA SEI ROTAN" },
    { id: 2, nama: "Widia Naibaho, S.Pd", unit: "TK SANTA LUSIA SEI ROTAN" },
    { id: 2, nama: "Widia Naibaho, S.Pd", unit: "TK SANTA LUSIA SEI ROTAN" },
    { id: 2, nama: "Widia Naibaho, S.Pd", unit: "TK SANTA LUSIA SEI ROTAN" },
    { id: 2, nama: "Widia Naibaho, S.Pd", unit: "TK SANTA LUSIA SEI ROTAN" },
    { id: 2, nama: "Widia Naibaho, S.Pd", unit: "TK SANTA LUSIA SEI ROTAN" },
    { id: 2, nama: "Widia Naibaho, S.Pd", unit: "TK SANTA LUSIA SEI ROTAN" },
    { id: 2, nama: "Widia Naibaho, S.Pd", unit: "TK SANTA LUSIA SEI ROTAN" },
    { id: 2, nama: "Widia Naibaho, S.Pd", unit: "TK SANTA LUSIA SEI ROTAN" },
    { id: 2, nama: "Widia Naibaho, S.Pd", unit: "TK SANTA LUSIA SEI ROTAN" },
    { id: 2, nama: "Widia Naibaho, S.Pd", unit: "TK SANTA LUSIA SEI ROTAN" },
    { id: 2, nama: "Widia Naibaho, S.Pd", unit: "TK SANTA LUSIA SEI ROTAN" },
    { id: 2, nama: "Widia Naibaho, S.Pd", unit: "TK SANTA LUSIA SEI ROTAN" },
    { id: 2, nama: "Widia Naibaho, S.Pd", unit: "TK SANTA LUSIA SEI ROTAN" },
    { id: 2, nama: "Widia Naibaho, S.Pd", unit: "TK SANTA LUSIA SEI ROTAN" },
    { id: 2, nama: "Widia Naibaho, S.Pd", unit: "TK SANTA LUSIA SEI ROTAN" },
    { id: 2, nama: "Widia Naibaho, S.Pd", unit: "TK SANTA LUSIA SEI ROTAN" },
    { id: 2, nama: "Widia Naibaho, S.Pd", unit: "TK SANTA LUSIA SEI ROTAN" },
    { id: 2, nama: "Widia Naibaho, S.Pd", unit: "TK SANTA LUSIA SEI ROTAN" },
    { id: 2, nama: "Widia Naibaho, S.Pd", unit: "TK SANTA LUSIA SEI ROTAN" },
  ]);

  // Fungsi untuk menangani penghapusan pengajar
  const handleDelete = (id) => {
    setPengajar(pengajar.filter((pengajar) => pengajar.id !== id));
  };

  return (
    <div className='fixed  p-6  mt-0 '>
      <div className='flex flex-col text-center items-center justify-center'>
        <h1 className='text-3xl font-bold mb-4'>Data Pengajar</h1>
        <a
          href='#'
          className='text-blue-600 font-semibold text-lg mb-4 inline-block'>
          Tambahkan Pengajar
        </a>
      </div>

      <div className='overflow-y-auto h-[50vh]'>
        <ScrollArea className='h-96'>
          <table className='w-[80rem] bg-white shadow-md rounded-lg overflow-hidden'>
            <thead className=' bg-gray-50 border-b mb-10'>
              <tr>
                <th className='py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking -wider'>
                  No.
                </th>
                <th className='py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Guru
                </th>
                <th className='py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Unit Pengajaran
                </th>
                <th className='py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200'>
              {pengajar.map((item, index) => (
                <tr key={item.id}>
                  <td className='py-4 px-6'>{index + 1}</td>
                  <td className='py-4 px-6 font-medium text-gray-900'>
                    {item.nama}
                  </td>
                  <td className='py-4 px-6'>{item.unit}</td>
                  <td className='py-4 px-6'>
                    <button className='bg-blue-500 text-white px-4 py-1 rounded-md mr-2'>
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className='bg-red-500 text-white px-4 py-1 rounded-md'>
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollArea>
      </div>

      <div className='fixed bottom-0 right-0 w-[100rem] h-[5rem] bg-white drop-shadow-xl z-50'>
        <footer className='fixed bottom-0 text-gray-500 text-sm py-7 text-center w-full '>
          <p>
            Copyright Supervisi
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
