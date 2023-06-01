import prisma from './prisma';

export interface IPost {
  id: number;
  title: string;
  content: string;
  image: string;
  date: Date;
}

export interface IPostData {
  posts: IPost[];
}

export interface IPostDataSingle {
  post: IPost;
}

export const getPosts = {
  async getAll() {
    try {
      const posts = await prisma.post.findMany();
      return posts;
    } catch (e) {
      console.error(e);
    }
  },
  async getById(id: number) {
    try {
      const post = await prisma.post.findFirst({
        where: { id: id },
      });
      return post;
    } catch (e) {
      console.error(e);
    }
  },
};
