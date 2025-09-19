import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Subhrajit Mukherjee | Full-Stack Developer & AI Automation Specialist',
  description: 'Experienced Full-Stack Developer specializing in MERN stack, Next.js, AI automation, and SaaS development. 11+ months of professional experience.',
  keywords: 'Full-Stack Developer, MERN Stack, Next.js, AI Automation, React Developer, Node.js, Freelancer',
  authors: [{ name: 'Subhrajit Mukherjee' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}