'use client';

import { useState } from 'react';
import Image from 'next/image';

import {
  menuLight,
  menuDark,
  downloadLight,
  downloadDark,
  themeLight,
  themeDark,
} from '@/public/icons/navbar-icons';

const Navbar = () => {
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);

  return (
    <nav>
      <section>
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
      </section>
    </nav>
  );
};

export default Navbar;
