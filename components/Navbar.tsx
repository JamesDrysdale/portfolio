'use client';

import { useState, useEffect } from 'react';
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
// import ThemedImage from './ThemedImage';

const Navbar = () => {
  const pathname = usePathname();
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShowMobileNavbar(false);
      }
    };
    window.addEventListener('resize', handleResize);
    setMounted(true);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav>
      <section className='fixed top-0 z-50 flex h-16 w-screen items-center justify-between bg-white800 px-4 dark:bg-black300'>
        {/* Brand Logo */}
        <div className='logo-background flex h-7 w-7 items-center justify-center rounded-full md:h-9 md:w-9'>
          <p className='font-semibold text-white900'>J</p>
        </div>
        {/* Mobile Menu Icon - shows only on small devices */}
        <Image
          src={theme === 'light' ? menuLight : menuDark}
          alt='menu button'
          className='cursor-pointer md:hidden'
          onClick={() => setShowMobileNavbar((prev) => !prev)}
        />
        <div className='mr-4 hidden items-center gap-9 md:flex'>
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
          {mounted && (
            <>
              <a
                href='/James Drysdale CV.pdf'
                download='James Drysdale CV.pdf'
                className='flex'
              >
                {/* <ThemedImage fileName={'download.svg'} /> */}
                <Image
                  src={theme === 'light' ? downloadLight : downloadDark}
                  height={24}
                  width={24}
                  alt="download James Drysdale's CV"
                />
                <p className='text-small font-normal text-black200 dark:text-white900'>
                  CV
                </p>
              </a>

              <Image
                src={theme === 'light' ? themeLight : themeDark}
                height={24}
                width={24}
                alt='light mode toggle'
                className='cursor-pointer'
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              />
            </>
          )}
        </div>
      </section>
      {showMobileNavbar && (
        <div
          className='fixed z-40 flex h-screen w-screen justify-center bg-black300'
          onClick={() => setShowMobileNavbar(false)}
        >
          <MobileNavBar
            theme={theme}
            pathname={pathname}
            currentTheme={theme}
            setTheme={setTheme}
            setShowMobileNav={setShowMobileNavbar}
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
