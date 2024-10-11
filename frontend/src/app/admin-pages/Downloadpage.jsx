export default function Downloadpage() {
  const data = [
    {
      id: 1,
      guru: "Rayuadi Sianipar, S.Pd",
      unit: "TK SANTA LUSIA SEI ROTAN",
      file: "Cell 4",
      keterangan: "Video Pembelajaran",
    },
    {
      id: 2,
      guru: "Widia Naibaho, S.Pd",
      unit: "TK SANTA LUSIA SEI ROTAN",
      file: "Cell 4",
      keterangan: "Laporan RPH",
    },
  ];

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Halaman Download</h1>
      <div className='overflow-x-auto'>
        <table className='min-w-full bg-white border rounded-lg'>
          <thead className='bg-gray-200 text-gray-600'>
            <tr>
              <th className='py-2 px-4 border-b'>No.</th>
              <th className='py-2 px-4 border-b'>Guru</th>
              <th className='py-2 px-4 border-b'>Unit Pengajaran</th>
              <th className='py-2 px-4 border-b'>File Berkas</th>
              <th className='py-2 px-4 border-b'>Keterangan</th>
              <th className='py-2 px-4 border-b'>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id} className='text-gray-700'>
                <td className='py-2 px-4 border-b text-center'>{index + 1}</td>
                <td className='py-2 px-4 border-b'>{item.guru}</td>
                <td className='py-2 px-4 border-b'>{item.unit}</td>
                <td className='py-2 px-4 border-b text-center'>{item.file}</td>
                <td className='py-2 px-4 border-b'>{item.keterangan}</td>
                <td className='py-2 px-4 border-b text-center'>
                  <button className='bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600'>
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
