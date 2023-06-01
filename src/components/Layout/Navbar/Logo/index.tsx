import Image from 'next/image';
import Logo from '@/assets/logo.svg';
import Link from 'next/link';
const LogoIcon = () => {
  return (
    <>
      <Link
        className='flex items-center text-left select-none cursor-pointer'
        href='/'
      >
        <Image src={Logo} alt='' width={50} height={50} />
        <div className='text-left pl-2'>
          <div className='flex flex-col'>
            <div className='text-3xl -mb-3 text-blue-700 font-bold italic font-second'>
              Брестэнерго
            </div>
            <h1 className='text-l font-medium'>Брестские теловые сети</h1>
          </div>
        </div>
      </Link>
    </>
  );
};

export default LogoIcon;
