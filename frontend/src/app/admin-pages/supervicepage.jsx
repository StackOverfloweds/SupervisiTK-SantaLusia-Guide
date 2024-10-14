import { LinkPreview } from "../../components/ui//link-preview";

export default function Supervicepage() {
  return (
    <div className='p-4'>
      <h1 className='text-5xl font-bold mb-6 text-center'>Halaman Supervisi</h1>
      <div className='text-center'>
        <LinkPreview
          url=' https://docs.google.com/forms/d/e/1FAIpQLScW2NnOF06YI5m2qDb7oGXJ6bFhTY3z6k-3P_jtDUbfHVonBg/viewform'
          className='my-custom-class'
          width={200}
          height={100}
          quality={80}
          layout='responsive'
          isStatic={false}
          target='_blank'
          rel='noopener noreferrer'>
          <span className='font-semibold text-red-500 text-2xl'>
            Klik untuk Mengisi Survei
          </span>
        </LinkPreview>
      </div>
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
