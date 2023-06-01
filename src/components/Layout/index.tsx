import { PropsWithChildren, type FC, type ReactNode } from 'react';
import { Navbar } from './Navbar';
import Aside from './Aside';
import Footer from './Footer';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-[url('../../../public/background_img.jpg')] bg-cover bg-center bg-fixed">
      <div className='flex flex-col min-h-[100vh]'>
        <Navbar />
        <div className='flex container mx-auto py-3 grow justify-between'>
          <Aside />
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};
