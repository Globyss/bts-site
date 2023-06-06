'use client';
import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';
import { FormEventHandler, useState } from 'react';

const CreatePostPage = () => {
  const [postInfo, setPostInfo] = useState({ title: '', content: '' });

  return (
    <div className='w-1/2 my-auto bg-white/80 px-10 pb-5 pt-1 rounded-3xl border-blue-400 border-2 mx-auto'>
      <div className='text-center text-3xl'>Форма создания поста</div>
      <form>
        <label htmlFor='label' className='text-xl'>
          Заголовок
        </label>
        <input
          id='title'
          className='block w-full h-10 mx-auto px-2 border border-gray-600 border-solid rounded focus:outline-none focus:shadow focus:shadow-gray-500 transition ease-in-out'
          type='text'
          placeholder='Введите текст'
          required
          value={postInfo.title}
          onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
            setPostInfo({ ...postInfo, title: target.value })
          }
        />
        <label htmlFor='content' className='text-xl'>
          Описание
        </label>
        <textarea
          placeholder='Введите текст'
          id='content'
          className='mb-5 block w-full h-32 mx-auto px-2 border border-gray-600 border-solid rounded focus:outline-none focus:shadow focus:shadow-gray-500 transition ease-in-out'
          required
        ></textarea>
        <input
          type='file'
          accept='image/png, image/jpeg, image/jpg'
          multiple
        ></input>
        <div className='text-center p-3'>
          <Button>Создать пост</Button>
        </div>
      </form>
    </div>
  );
};

export default CreatePostPage;
