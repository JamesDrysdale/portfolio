import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { navbarLinks } from '@/constants';
import {
  menuLight,
  menuDark,
  downloadLight,
  downloadDark,
  themeLight,
  themeDark,
  closeLight,
  closeDark,
} from '@/public/icons/navbar-icons';

interface MobileNavBarProps {
  theme: string | undefined;
  pathname: string;
  currentTheme: string | undefined;
  setTheme: (newTheme: string) => void;
  setShowMobileNav: (showNavBar: boolean) => void;
}

const MobileNavBar: FC<MobileNavBarProps> = ({
  theme,
  pathname,
  currentTheme,
  setTheme,
  setShowMobileNav,
}) => {
  return (
    <div
      className='mx-2 flex h-full w-full flex-col gap-3 bg-white800 p-4 dark:bg-black300'
      onClick={(e) => e.stopPropagation()}
    >
      <div className='mb-2 flex justify-between px-2 py-4'>
        <Image
          src={theme === 'light' ? themeLight : themeDark}
          height={24}
          width={24}
          alt='toggle between light and dark mode'
          className='cursor-pointer'
          onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
        />
        <Image
          src={theme === 'light' ? closeLight : closeDark}
          height={24}
          width={24}
          alt='close button'
          onClick={() => setShowMobileNav(false)}
        />
      </div>

      {navbarLinks.map((button) => (
        <Link
          key={button.label}
          href={button.path}
          className={`text-small w-full cursor-pointer rounded-lg px-2 py-4 ${
            pathname === button.path
              ? 'border-primaryLight bg-primaryDark font-semibold text-white800'
              : 'text-white500 dark:text-white800'
          }`}
          onClick={() => setShowMobileNav(false)}
        >
          <p>{button.label}</p>
        </Link>
      ))}
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
    </div>
  );
};

export default MobileNavBar;
