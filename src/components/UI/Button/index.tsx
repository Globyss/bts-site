import { FC } from 'react';
interface IButton {
  children: string;
  autoFocus?: boolean | undefined;
  disabled?: boolean | undefined;
  form?: string | undefined;
  formAction?: string | undefined;
  formEncType?: string | undefined;
  formMethod?: string | undefined;
  formNoValidate?: boolean | undefined;
  formTarget?: string | undefined;
  name?: string | undefined;
  type?: 'submit' | 'reset' | 'button' | undefined;
  value?: string | ReadonlyArray<string> | number | undefined;
}

const Button: FC<IButton> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className='text-xl bg-blue-400/40 w-3/4 mx-auto rounded p-1 hover:bg-blue-400 transition-all border-2 border-blue-400 active:bg-green-500'
    >
      {children}
    </button>
  );
};

export default Button;
