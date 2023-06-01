import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';

const SignInButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div>
        <button onClick={() => signOut()}>Выйти</button>
      </div>
    );
  }
  return <button onClick={() => signIn()}>Личный кабинет</button>;
};

export default SignInButton;
