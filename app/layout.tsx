import './globals.css';

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import Navbar from '@/components/Navbar';
import Provider from '@/providers/Provider';

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'James Drysdale Portfolio',
  description:
    'James Drysdale is a front-end developer who uses a modern JS tech stack including React and Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${poppins.className} bg-white800 text-black200 dark:bg-black300 dark:text-white900`}
      >
        <Provider>
          <Navbar />
          <div className='mx-4 mt-16 lg:mx-10'>{children}</div>
        </Provider>
      </body>
    </html>
  );
}
