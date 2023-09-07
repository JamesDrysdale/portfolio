'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  menuLight,
  menuDark,
  downloadLight,
  downloadDark,
  themeLight,
  themeDark,
} from '@/public/icons/navbar-icons';
import { navbarLinks } from '@/constants';

const Navbar = () => {
  const pathname = usePathname();
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);

  return (
    <nav>
      <section className='flex justify-between'>
        {/* Logo */}
        <div className='logo-background flex h-7 w-7 items-center justify-center rounded-full md:h-9 md:w-9'>
          <p className='font-semibold text-white900 md:text-xl'>J</p>
        </div>
        <Image
          src={menuLight}
          height={24}
          width={24}
          alt='menu button'
          className='cursor-pointer md:hidden'
          onClick={() => setShowMobileNavbar((prev) => !prev)}
        />
        <div className='hidden items-center gap-9 md:flex'>
          {navbarLinks.map((button) => (
            <Link href={button.path} key={button.label}>
              <p
                className={`text-sm ${
                  pathname === button.path
                    ? 'font-semibold text-primaryLight'
                    : 'text-white500 dark:text-white800'
                }`}
              >
                {button.label}
              </p>
            </Link>
          ))}
          {/* Temporary href below so that the link works */}
          <Link href='/' className='flex'>
            <Image src={downloadLight} height={20} width={20} alt='download' />
            <p className='text-sm text-black200 dark:text-white900'>CV</p>
          </Link>
          <div className='h-6 border-l border-white500' />
          <Image
            src={themeLight}
            height={20}
            width={20}
            alt='light mode symbol'
            className='cursor-pointer'
            onClick={() => {}}
          />
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
