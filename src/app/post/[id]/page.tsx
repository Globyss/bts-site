import { getPosts } from '@/lib/getPosts';
import Image from 'next/image';

const PostPage = async ({ params }: any) => {
  const post = await getPosts.getById(Number(params.id));
  if (post) {
    return (
      <div className='bg-white/80 border-blue-400 border-2 rounded-2xl p-3'>
        <div className='text-2xl text-center'>{post?.title}</div>
        <div className='text-left text-sm font-semibold'>
          {post?.date.toLocaleDateString()}
        </div>
        <Image
          src={post.image as string}
          alt='post image'
          width={800}
          height={800}
          className='rounded-2xl mx-auto my-3 transition-all'
        />
        <div id='description' className='text-justify'>
          {post?.content}
        </div>
      </div>
    );
  } else {
    return (
      <div className='m-auto text-3xl bg-white/80 p-10 rounded-full'>
        Такого поста не существует!
      </div>
    );
  }
};

export default PostPage;
