'use client';
import Input from '@/components/UI/Input';
import { NextPage } from 'next';
import { signIn } from 'next-auth/react';
import { FormEventHandler, useState } from 'react';
import Button from '@/components/UI/Button';
import { useRouter } from 'next/navigation';

const SignIn: NextPage = (props): JSX.Element => {
  const [userInfo, setUserInfo] = useState({ username: '', password: '' });
  const [correctData, setCorrectData] = useState(false);
  const router = useRouter();
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    // validate your userinfo
    e.preventDefault();

    const res = await signIn('credentials', {
      username: userInfo.username,
      password: userInfo.password,
      redirect: false,
    });
    if (res?.error) {
      setCorrectData(true);
    } else {
      const signInForm: HTMLElement | null =
        document.querySelector('#signInForm');
      signInForm!.style.visibility = 'hidden';
      router.push('/');
    }
  };

  return (
    <form
      id='signInForm'
      onSubmit={handleSubmit}
      className='w-1/2 my-auto bg-white/80 px-10 pb-5 pt-1 rounded-3xl border-blue-400 border-2 mx-auto'
    >
      <fieldset className='flex flex-col border-solid border-2 border-black text-center p-10'>
        <legend className='text-3xl font-medium'>Войдите в аккаунт</legend>
        <div className='flex flex-col gap-3 mb-5'>
          {correctData ? (
            <div className='text-xl text-red-600 animate-bounce '>
              Неправильный логин или пароль
            </div>
          ) : (
            ''
          )}
          <Input
            type='text'
            placeholder='Введите логин'
            required
            value={userInfo.username}
            onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
              setUserInfo({ ...userInfo, username: target.value })
            }
          />
          <Input
            type='password'
            placeholder='Введите пароль'
            required
            value={userInfo.password}
            onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
              setUserInfo({ ...userInfo, password: target.value })
            }
          />
        </div>
        <Button type='submit'>Войти</Button>
      </fieldset>
    </form>
  );
};

export default SignIn;
