import Header from '@/components/Header';
import './globals.css';
import { Noto_Sans_JP } from 'next/font/google';

const notojp = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
});

export const metadata = {
  title: 'Necmos採用サイト',
  description: 'Necmos Recruit Website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={notojp.className}>
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
