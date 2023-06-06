import { Post } from '@/components/Post';
import { IPost, IPostData, getPosts } from '@/lib/getPosts';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';

const Home = async () => {
  const posts = await getPosts.getAll();
  return (
    <div className='grow text-center flex gap-5 flex-col'>
      {posts?.length ? (
        posts.reverse()?.map((post: any) => <Post key={post.id} post={post} />)
      ) : (
        <div>Posts not found!</div>
      )}
    </div>
  );
};

export default Home;
