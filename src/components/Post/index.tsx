import { IPostDataSingle } from '@/lib/getPosts';
import { FC } from 'react';
import { PostImage } from './PostImage';
import Link from 'next/link';

export const Post: FC<IPostDataSingle> = ({ post }) => {
  return (
    <Link href={`/post/${post?.id}`}>
      <div className='bg-white/80 border-blue-400 border-2 rounded-2xl p-3'>
        <div className='text-2xl'>{post?.title}</div>
        <div className='text-left text-sm font-semibold'>
          {post?.date.toLocaleDateString()}
        </div>
        <PostImage postImg={post?.image} />
        <div id='description' className='line-clamp-5 text-justify'>
          {post?.content}
        </div>
      </div>
    </Link>
  );
};
