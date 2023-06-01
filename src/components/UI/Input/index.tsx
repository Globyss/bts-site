import { FC } from 'react';

interface IInput {
  type?: string;
  placeholder: string;
  required?: boolean;
  value: string | number;
  onChange: any;
}

const Input: FC<IInput> = ({ ...props }) => {
  return (
    <div className='mb-3'>
      <input
        className='block w-3/4 h-10 mx-auto px-2 border border-gray-600 border-solid rounded focus:outline-none focus:shadow focus:shadow-gray-500 transition ease-in-out'
        {...props}
      />
    </div>
  );
};

export default Input;
