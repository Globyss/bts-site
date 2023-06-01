import Image from 'next/image';

interface Props {
  postImg: string;
}

export const PostImage = ({ postImg }: Props) => {
  return (
    <Image
      src={postImg}
      alt='post image'
      width={600}
      height={400}
      className='rounded-2xl mx-auto my-3 transition-all'
    />
  );
};
