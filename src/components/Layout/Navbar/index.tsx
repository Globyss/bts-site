'use client';
import { FC, useEffect } from 'react';
import LogoIcon from './Logo';
import { FaSearch } from 'react-icons/fa';
import NavItem from './NavItem';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SignInButton from './SigninButton';
import { useSession } from 'next-auth/react';

export const Navbar: FC = () => {
  const { data: session } = useSession();
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });
  const isSticky = () => {
    const header = document.querySelector('#header');
    const scrollTop = window.scrollY;
    scrollTop >= 10
      ? header?.classList.add('!bg-blue-400')
      : header?.classList.remove('!bg-blue-400');
  };
  return (
    <div
      id='header'
      className='p-1 sticky top-0 transition ease-in duration-300'
    >
      <div className='container flex justify-between items-center mx-auto px-3'>
        <LogoIcon />
        <nav>
          <ul className='flex justify-between text-lg font-medium gap-10'>
            <NavItem name={<FaSearch className='h-6 w-6' />} />
            <Link href='/'></Link>
            <a href='http://10.181.192.12:8080/Справочник БТС 2023.pdf'>
              <NavItem name='Тел. справочник' />
            </a>
            <a href='http://10.181.192.12:8080/Брестэнерго/Брестэнерго 15-7-2020.pdf'>
              <NavItem name='Тел. спр. Брестэнерго' />
            </a>
            {session && session.user.isAdmin ? (
              <Link href='/create-post/'>
                <NavItem name='Создать пост' />
              </Link>
            ) : (
              ''
            )}
            <NavItem name={<SignInButton />}></NavItem>
          </ul>
        </nav>
      </div>
    </div>
  );
};
