import Image from "next/image";
import { Button } from "@/components/ui/button";
import Logo from "../../img/logo.png";

export default function Dashboard() {
  return (
    <div className='w-full'>
      <div className='flex justify-between items-center'>
        <strong className='text-black font-bold text-5xl'>Dasboard</strong>
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

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 '>
          <div className='flex flex-col items-center'>
            <h2 className='text-xl font-light text-gray-800 mb-4  '>VISI</h2>
            <p className='text-gray-600 text-center font-bold italic'>
              "Menjadi Lembaga Pendidikan yang Unggul dan Berkualitas dengan
              Semangat Santa Lusia"
            </p>
          </div>

          <div className='flex flex-col items-center'>
            <h2 className='text-xl font-light text-gray-800 mb-4'>Motto</h2>
            <p className='text-gray-600 text-center italic'>
              "CERDAS, CERIA, UNGGUL DAN PEDULI SESAMA (CCUP)"
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
        <div className='flex flex-col items-center mt-28'>
          <strong className='text-center text-5xl font-extralight mb-5'>
            Halaman Pengumpulan Guru
          </strong>
        </div>
        <div class='overflow-x-auto'>
          <table class='min-w-full border-collapse block md:table'>
            <thead class='block md:table-header-group'>
              <tr class='border border-gray-300 md:border-none block md:table-row'>
                <th class='bg-gray-100 p-2 text-left block md:table-cell'>
                  No.
                </th>
                <th class='bg-gray-100 p-2 text-left block md:table-cell'>
                  Nama Guru
                </th>
                <th class='bg-gray-100 p-2 text-left block md:table-cell'>
                  Laporan Supervisi
                </th>
                <th class='bg-gray-100 p-2 text-left block md:table-cell'>
                  Laporan RPH
                </th>
              </tr>
            </thead>
            <tbody class='block md:table-row-group'>
              <tr class='bg-white border border-gray-300 md:border-none block md:table-row'>
                <td class='p-2 text-left block md:table-cell'>1</td>
                <td class='p-2 text-left block md:table-cell'>
                  Widia Nabaho S.Pd
                </td>
                <td class='p-2 text-left block md:table-cell text-green-500'>
                  Sukses
                </td>
                <td class='p-2 text-left block md:table-cell text-green-500'>
                  Sukses
                </td>
              </tr>
              <tr class='bg-white border border-gray-300 md:border-none block md:table-row'>
                <td class='p-2 text-left block md:table-cell'>2</td>
                <td class='p-2 text-left block md:table-cell'>
                  Florensia Lumban Gaol S.Pd
                </td>
                <td class='p-2 text-left block md:table-cell text-red-500'>
                  Belum Dikirim
                </td>
                <td class='p-2 text-left block md:table-cell text-green-500'>
                  Sukses
                </td>
              </tr>
            </tbody>
          </table>

          <div class='flex justify-end mt-4'>
            <button class='px-3 py-1 border rounded-l bg-gray-200 text-gray-700'>
              «
            </button>
            <button class='px-3 py-1 border bg-gray-200 text-gray-700'>
              1
            </button>
            <button class='px-3 py-1 border bg-gray-200 text-gray-700'>
              2
            </button>
            <button class='px-3 py-1 border rounded-r bg-gray-200 text-gray-700'>
              »
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
