import { Post } from '@/components/Post';
import { IPostDataSingle, getPosts } from '@/lib/getPosts';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { useEffect } from 'react';

const PostPage: NextPage<IPostDataSingle> = ({ post }) => {
  useEffect(() => {
    const description = document.querySelector('#description');
    description?.classList.add('line-clamp-none');
  });
  return <Post post={post} />;
};

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const { posts }: any = await getPosts.getAll();
  return {
    paths: posts.map((post: any) => ({
      params: {
        id: post.id.toString(),
      },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPosts.getById(Number(params?.id));
  return {
    props: { post },
    revalidate: 60,
  };
};

export default PostPage;
