'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';

import { navbarLinks } from '@/constants';
import MobileNavBar from './MobileNavBar';
import {
  menuLight,
  menuDark,
  downloadLight,
  downloadDark,
  themeLight,
  themeDark,
} from '@/public/icons/navbar-icons';

const Navbar = () => {
  const pathname = usePathname();
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <nav>
      <section className='flex justify-between py-5'>
        {/* Brand Logo */}
        <div className='logo-background flex h-7 w-7 items-center justify-center rounded-full md:h-9 md:w-9'>
          <p className='font-semibold text-white900'>J</p>
        </div>
        {/* Mobile Menu Icon - shows only on small devices */}
        <Image
          src={theme === 'light' ? menuLight : menuDark}
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
                className={`text-small ${
                  pathname === button.path
                    ? 'font-semibold text-primaryLight dark:text-primaryDark'
                    : 'text-white500 dark:text-white800'
                }`}
              >
                {button.label}
              </p>
            </Link>
          ))}
          {/* Download CV link */}
          <a
            href='/James Drysdale CV.pdf'
            download='James Drysdale CV.pdf'
            className='flex'
          >
            <Image
              src={theme === 'light' ? downloadLight : downloadDark}
              height={20}
              width={20}
              alt="download James Drysdale's CV"
            />
            <p className='text-small font-normal text-black200 dark:text-white900'>
              CV
            </p>
          </a>
          <div className='h-6 border-l border-white500' />
          <Image
            src={theme === 'light' ? themeLight : themeDark}
            height={20}
            width={20}
            alt='light mode symbol'
            className='cursor-pointer'
            onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
          />
        </div>
      </section>
      {showMobileNavbar && (
        <div
          className='fixed z-40 flex h-screen w-screen justify-center bg-black/30'
          onClick={() => setShowMobileNavbar(false)}
        >
          <MobileNavBar
            theme={theme}
            pathname={pathname}
            currentTheme={currentTheme}
            setTheme={setTheme}
            setShowMobileNav={setShowMobileNavbar}
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
