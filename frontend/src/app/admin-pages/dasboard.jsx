import Image from 'next/image';

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-end">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Download Laporan
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">TK SANTA LUSIA SEI ROTAN</h1>
          <p className="text-gray-600">Jalan Medan Batang Kuis KM 14 No 123</p>
        </div>

        <div className="flex justify-center mt-8">
          <Image
            src="/logo.png" // Ganti dengan path logo yang benar
            alt="Logo TK Santa Lusia Sei Rotan"
            width={150}
            height={150}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">VISI</h2>
            <p className="text-gray-600">
              "Menjadi Lembaga Pendidikan yang Unggul dan Berkualitas dengan Semangat Santa Lusia"
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Motto</h2>
            <p className="text-gray-600">"CERDAS, CERIA, UNGGUL DAN PEDULI SESAMA (CCUP)"</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Email dan Nomor Kontak</h2>
            <p className="text-gray-600">
              Email: <a href="mailto:tksantalusia@gmail.com" className="text-blue-500">tksantalusia@gmail.com</a><br />
              Nomor telepon: 0851-8312-1507
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}