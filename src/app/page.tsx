import { Post } from '@/components/Post';
import { IPost, IPostData, getPosts } from '@/lib/getPosts';

export default async function Home() {
  const getAllPosts = await getPosts.getAll();
  return (
    <div className='grow text-center flex gap-5 flex-col'>
      {getAllPosts?.length ? (
        getAllPosts.reverse()?.map((post: any) => <Post post={post} />)
      ) : (
        <div>Posts not found!</div>
      )}
    </div>
  );
}
