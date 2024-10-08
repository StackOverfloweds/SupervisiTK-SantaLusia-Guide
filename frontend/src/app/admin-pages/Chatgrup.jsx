import { LinkPreview } from "@/components/ui/link-preview";
export default function Grupchat() {
  return (
    <div>
      <h1 className='text-5xl font-bold mb-1 text-center'>Halaman Grup Chat</h1>
      <h2 className='text-1xl font-light mb-6 text-center'>
        Silahkan klik tautan di bawa ini untuk bergabung pada Whatsapp Group
      </h2>
      <div className='text-center'>
        <LinkPreview
          url='#'
          className='my-custom-class'
          width={200}
          height={100}
          quality={80}
          layout='responsive'
          isStatic={false}
          target='_blank'
          rel='noopener noreferrer'>
          <span className='font-semibold text-red-500 text-2xl'>
            WhatsApp
          </span>
        </LinkPreview>
      </div>
    </div>
  );
}
