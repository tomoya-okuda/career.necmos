import Header from '@/components/Header';
import './globals.css';
import { Noto_Sans_JP } from 'next/font/google';
import Footer from '@/components/Footer';

const notojp = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
});

// Metadata
const siteName = 'Necmos採用サイト';
const description = 'サイトの説明';
const url = 'https://career.necmos';
const ogImageUrl = 'https://OG画像のURL';

export const metadata = {
  title: {
    default: siteName,
    /** `next-seo`の`titleTemplate`に相当する機能 */
    template: `%s - ${siteName}`,
  },
  description,
  icons: {
    icon: '/public/icons/favicon.ico',
    shortcut: '/public/icons/favicon.ico',
    apple: '/public/icons/favicon.ico',
    // ドキュメントを参照して適宜増やすこと
  },
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    images: [
      {
        url: ogImageUrl,
        width: 1800,
        height: 1600,
        alt: '画像の説明文',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description,
    site: '@サイト用アカウントのTwitterID',
    creator: '@作者のTwitterID',
    images: [ogImageUrl],
  },
  verification: {
    google: 'サーチコンソールのやつ',
  },
  alternates: {
    canonical: url,
  },
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
        <Footer />
      </body>
    </html>
  );
}
