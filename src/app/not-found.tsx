import { Layout } from '@/components/Layout';
import { NextPage } from 'next';
import Image from 'next/image';
import ErrorSVG from '../../public/error.svg';
const NotFound: NextPage = () => {
  return (
    <div className='mx-auto my-auto'>
      <div className='bg-white/80 rounded-full w-[120%]'>
        <h1 className='text-center text-3xl font-semibold pt-16'>
          Страница не найдена!
        </h1>
        <Image
          className='mx-auto'
          alt='Page not found'
          src={ErrorSVG}
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default NotFound;
