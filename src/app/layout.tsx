import '@/app/styles/globals.scss';
import { Layout } from '@/components/Layout';
import Providers from '@/components/Providers';

export const metadata = {
  title: 'Брестские тепловые сети',
  description: 'Внутренний сайт Брестских тепловых сетей',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
