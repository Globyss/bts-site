import { verifyJwt } from '@/lib/jwt';
import prisma from '@/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  const accessToken = request.headers.get('authorization');
  if (!accessToken || !verifyJwt(accessToken)) {
    return new Response(
      JSON.stringify({
        error: 'unauthorized',
      }),
      {
        status: 401,
      }
    );
  }
  const userPosts = await prisma.post.findMany({
    where: { userId: +params.id },
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
  });

  return new Response(JSON.stringify(userPosts));
}
