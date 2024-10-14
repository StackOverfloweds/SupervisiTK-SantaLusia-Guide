import { useRouter } from "next/navigation";
import { ScrollArea } from "../../components/ui/scroll-area";

export default function Pengumunan() {
  const router = useRouter();

  const gotopage = () => {
    const r =  router.push("/admin-pages/component-admin/tambah-pengumuman");
    console.log('isi nya', r)
  };
  return (
    <div className='p-4'>
      <div className='text-center mb-4'>
        <h1 className='text-3xl font-bold mb-2'>Halaman Pengumuman</h1>
        <button
          onClick={gotopage}
          className='border-b-2 border-transparent hover:border-black cursor-pointer'>
          Tambahkan Pengumuman
        </button>
      </div>

      <ScrollArea className='max-h-[35rem] overflow-y-auto space-y-4'>
        <div className='bg-gray-50 p-4 border border-gray-200 rounded-md shadow-sm'>
          <p className='text-gray-800 mb-2'>
            Kepada Yth. Bapak/Ibu Guru, Kami mengingatkan bahwa batas waktu
            pengiriman video pembelajaran untuk keperluan supervisi adalah{" "}
            <strong>[tanggal batas waktu]</strong>. Harap unggah video
            pembelajaran Anda melalui halaman supervisi di website sesuai
            instruksi berikut:
          </p>
          <ul className='list-disc pl-5 mb-2'>
            <li>
              <strong>Format Video:</strong> Pastikan video yang diunggah dalam
              format MP4 atau MOV dengan resolusi minimal 720p.
            </li>
            <li>
              <strong>Durasi Video:</strong> Maksimal durasi video adalah 30
              menit.
            </li>
            <li>
              <strong>Konten Video:</strong> Pastikan video memuat materi
              pembelajaran yang sudah disesuaikan dengan kurikulum dan rencana
              pembelajaran harian (RPH) Anda.
            </li>
            <li>
              <strong>Nama File:</strong> Gunakan format penamaan file:
              [Nama_Kelas_Mata_Pelajaran_Tanggal]. Contoh:
              6A_Matematika_2024-08-08.mp4.
            </li>
          </ul>
          <p className='text-gray-800'>
            Jika ada pertanyaan atau kesulitan terkait pengunggahan video,
            silakan hubungi tim IT atau administrator sekolah. Terima kasih atas
            kerja sama dan dedikasi Bapak/Ibu dalam meningkatkan kualitas
            pembelajaran.
          </p>
        </div>

        <div className='bg-gray-50 p-4 border border-gray-200 rounded-md shadow-sm'>
          <p className='text-gray-800 mb-2'>
            Kepada Yth. Orang Tua/Wali Siswa, Kami menginformasikan bahwa
            pengumpulan buku PR siswa TK akan dilaksanakan pada:
          </p>
          <ul className='list-disc pl-5 mb-2'>
            <li>
              <strong>Hari/Tanggal:</strong> [Hari, Tanggal]
            </li>
            <li>
              <strong>Waktu:</strong> [Jam]
            </li>
            <li>
              <strong>Tempat Pengumpulan:</strong> [Tempat Pengumpulan]
            </li>
          </ul>
          <p className='text-gray-800'>
            Mohon kerjasamanya untuk memastikan bahwa buku PR anak Anda telah
            lengkap dan sesuai dengan tugas yang telah diberikan. Pengumpulan
            ini penting untuk mengevaluasi perkembangan dan kemajuan belajar
            anak-anak kita. Jika ada pertanyaan atau memerlukan informasi lebih
            lanjut, silakan menghubungi wali kelas masing-masing.
          </p>
        </div>

        <div className='bg-gray-50 p-4 border border-gray-200 rounded-md shadow-sm'>
          <p className='text-gray-800 mb-2'>
            Kepada Yth. Bapak/Ibu Guru, Kami menginformasikan bahwa periode
            pengisian supervisi sudah dimulai. Kami mengharapkan partisipasi
            aktif dari Bapak/Ibu Guru dalam proses ini untuk meningkatkan
            kualitas pembelajaran di sekolah kita.
          </p>
          <ul className='list-disc pl-5 mb-2'>
            <li>
              <strong>Tanggal Mulai Pengisian:</strong> [Tanggal Mulai]
            </li>
            <li>
              <strong>Tanggal Berakhir Pengisian:</strong> [Tanggal Berakhir]
            </li>
            <li>
              <strong>Tempat Pengisian:</strong> Website Supervisi
            </li>
            <li>
              <strong>Nama Sekolah:</strong> [Nama Sekolah]
            </li>
          </ul>
          <p className='text-gray-800'>
            Mohon Bapak/Ibu untuk mengisi formulir supervisi sesuai dengan
            petunjuk yang telah diberikan dan memastikan semua informasi yang
            diperlukan telah diisi dengan benar. Supervisi adalah bagian dari
            upaya kita untuk mendukung pengembangan profesionalisme guru dan
            peningkatan mutu pembelajaran. Jika ada pertanyaan lebih lanjut,
            silakan menghubungi koordinator supervisi atau tim IT sekolah.
          </p>
        </div>
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
