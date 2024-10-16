import React from 'react';

function Tambahpengajar({ name, unit, onSubmit }) {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white rounded shadow-lg p-6'>
        <div>
          <h2 className='text-lg font-bold'>
            Anda Yakin Untuk Mengumpulkannya?
          </h2>
          <p className='mt-2'>Nama: {name}</p>
          <p>Unit: {unit}</p>
          <p className='mt-4'>
            Tolong diperiksa kembali lagi apa yang akan dikumpulkan.
          </p>
        </div>
        <div className='flex justify-end mt-4'>
          <button
            className='bg-gray-500 text-white font-bold py-2 px-4 rounded mr-2 hover:bg-gray-600'
            onClick={() => onSubmit(true)}>
            Kumpulkan
          </button>
          <button
            className='bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600'
            onClick={() => onSubmit(false)}>
            Batalkan
          </button>
        </div>
      </div>
    </div>
  );
}
export default Tambahpengajar;