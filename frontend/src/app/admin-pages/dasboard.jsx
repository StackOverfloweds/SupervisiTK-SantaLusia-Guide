"use client";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import Logo from "../../img/logo.png";
// import { ScrollArea } from "../../components/ui/scroll-area";
import { useState } from "react";

export default function Dashboard() {
  const teachersPerPage = 3; 
  const [currentPage, setCurrentPage] = useState(1);

  const teachers = [
    { id: 1, name: "Widia Nabaho S.Pd", supervisi: "Sukses", rph: "Sukses" },
    {
      id: 2,
      name: "Florensia Lumban Gaol S.Pd",
      supervisi: "Belum Dikirim",
      rph: "Sukses",
    },
    { id: 3, name: "Guru 3", supervisi: "Sukses", rph: "Sukses" },
    { id: 4, name: "Guru 4", supervisi: "Belum Dikirim", rph: "Sukses" },
    { id: 5, name: "Guru 5", supervisi: "Sukses", rph: "Sukses" },
    { id: 6, name: "Guru 6", supervisi: "Belum Dikirim", rph: "Sukses" },
    { id: 7, name: "Guru 7", supervisi: "Sukses", rph: "Sukses" },
    { id: 8, name: "Guru 8", supervisi: "Belum Dikirim", rph: "Sukses" },
    { id: 9, name: "Guru 9", supervisi: "Sukses", rph: "Sukses" },
    { id: 10, name: "Guru 10", supervisi: "Belum Dikirim", rph: "Sukses" },
    // Add more data as needed
  ];
  // Hitung total halaman
  const totalPages = Math.ceil(teachers.length / teachersPerPage);

  // Dapatkan data guru untuk halaman saat ini
  const indexOfLastTeacher = currentPage * teachersPerPage;
  const indexOfFirstTeacher = indexOfLastTeacher - teachersPerPage;
  const currentTeachers = teachers.slice(
    indexOfFirstTeacher,
    indexOfLastTeacher
  );

  // Fungsi untuk ganti halaman
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  return (
    <div className='w-full h-full'>
      <div className='flex justify-between items-center'>
        <strong className='text-black font-bold text-5xl'>Dashboard</strong>
        <Button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Download Laporan
        </Button>
      </div>

      <div className='bg-white rounded-lg shadow-lg p-8 mt-8'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold text-gray-800'>
            TK SANTA LUSIA SEI ROTAN
          </h1>
          <p className='text-gray-600'>Jalan Medan Batang Kuis KM 14 No 123</p>
        </div>

        <div className='flex justify-center mt-8'>
          <Image
            src={Logo}
            alt='Logo TK Santa Lusia Sei Rotan'
            width={150}
            height={150}
          />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-8'>
          <div className='flex flex-col items-center'>
            <h2 className='text-xl font-light text-gray-800 mb-4'>VISI</h2>
            <p className='text-gray-600 text-center font-bold italic'>
              &quot;Menjadi Lembaga Pendidikan yang Unggul dan Berkualitas dengan
              Semangat Santa Lusia&quot;
            </p>
          </div>

          <div className='flex flex-col items-center'>
            <h2 className='text-xl font-light text-gray-800 mb-4'>Motto</h2>
            <p className='text-gray-600 text-center italic'>
              &quot;CERDAS, CERIA, UNGGUL DAN PEDULI SESAMA (CCUP)&quot;
            </p>
          </div>

          <div className='flex flex-col items-center'>
            <h2 className='text-xl font-light text-gray-800 mb-4'>
              Email dan Nomor Kontak
            </h2>
            <p className='text-gray-600 text-center'>
              Email:{" "}
              <a href='mailto:tksantalusia@gmail.com' className='text-blue-500'>
                tksantalusia@gmail.com
              </a>
              <br />
              Nomor telepon: 0851-8312-1507
            </p>
          </div>
        </div>

        <div className='flex flex-col items-center mt-10'>
          <strong className='text-center text-3xl font-extralight mb-5'>
            Halaman Pengumpulan Guru
          </strong>
        </div>
        <div className=''>

          <table className='min-w-full border-collapse block md:table'>
            <thead className='block md:table-header-group'>
              <tr className='border border-gray-300 md:border-none block md:table-row'>
                <th className='bg-gray-100 p-2 text-left block md:table-cell'>
                  No.
                </th>
                <th className='bg-gray-100 p-2 text-left block md:table-cell'>
                  Nama Guru
                </th>
                <th className='bg-gray-100 p-2 text-left block md:table-cell'>
                  Laporan Supervisi
                </th>
                <th className='bg-gray-100 p-2 text-left block md:table-cell'>
                  Laporan RPH
                </th>
              </tr>
            </thead>
            <tbody className='block md:table-row-group'>

              {currentTeachers.map((teacher, index) => (
                <tr
                  key={teacher.id}
                  className='bg-white border border-gray-300 md:border-none block md:table-row'>
                  <td className='p-2 text-left block md:table-cell'>
                    {indexOfFirstTeacher + index + 1}
                  </td>
                  <td className='p-2 text-left block md:table-cell'>
                    {teacher.name}
                  </td>
                  <td
                    className={`p-2 text-left block md:table-cell ${
                      teacher.supervisi === "Sukses"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}>
                    {teacher.supervisi}
                  </td>
                  <td className='p-2 text-left block md:table-cell text-green-500'>
                    {teacher.rph}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='flex justify-between mt-4'>
          <Button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}>
            Previous
          </Button>
          <p>
            Halaman {currentPage} dari {totalPages}
          </p>
          <Button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
