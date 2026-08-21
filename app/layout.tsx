import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: '韩星｜AI 产品经理方向',
  description: '韩星的 AI 产品经理求职网站，记录 AI 工作流、AIGC 产品化与跨学科实践。',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: '韩星｜AI 产品经理方向',
    description: '把 AI 想法，变成可落地的产品。',
    type: 'website',
    locale: 'zh_CN',
    images: [
      {
        url: '/og.png',
        width: 1672,
        height: 941,
        alt: '韩星 AI 产品经理方向个人网站',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '韩星｜AI 产品经理方向',
    description: '把 AI 想法，变成可落地的产品。',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
