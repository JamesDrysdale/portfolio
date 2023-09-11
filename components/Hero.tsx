'use client';

import Image from 'next/image';

import { heroImg } from '@/public/images';
import CopyEmail from './CopyEmail';

const Hero = () => {
  return (
    <section className='mx-auto mt-16 flex w-full max-w-7xl flex-col md:mt-24  md:flex-row md:justify-between  md:px-10'>
      {/* Intro */}
      <div className='z-20 flex flex-col md:w-[38rem]'>
        <p className='text-small mb-3 font-semibold uppercase tracking-widest text-primaryLight dark:text-primaryDark md:text-xl'>
          Hi, I am James
        </p>
        <h1>
          Professional <br />
          <span className='text-underline'>Web Developer</span> <br />
          based in UK
        </h1>
        <p className='text-hero mt-3 text-white500 dark:text-white800'>
          Transforming the web one line of code at a time: Crafting cutting-edge
          digital experiences with precision, passion and a profound commitment
          to excellence.
        </p>
        <div className='my-3 flex flex-col justify-start gap-2 md:flex-row'>
          <a
            href='/'
            className='inline-flex h-9 items-center justify-center rounded-full bg-primaryLight py-3 text-xs font-semibold text-white900 dark:bg-primaryDark md:w-36 md:px-3 lg:py-5 lg:text-sm xl:w-48'
          >
            My Work
          </a>
          <CopyEmail email={'jamesdrysdale84@gmail.com'} />
        </div>
      </div>
      {/* Image */}
      <div className='self-center'>
        <Image
          src={heroImg}
          alt='hero image icon'
          className='md:max-h-[500px] md:max-w-[500px]'
        />
      </div>
    </section>
  );
};

export default Hero;
