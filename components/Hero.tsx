const Hero = () => {
  return (
    <section className='mb-7 md:flex'>
      {/* Intro */}
      <div>
        <p className='text-sm font-semibold uppercase leading-tight tracking-widest text-primaryLight dark:text-primaryDark md:text-xl md:leading-relaxed'>
          Hi, I am James
        </p>
        <h1>
          Professional <br />
          <span className='text-underline'>Web Developer</span> <br />
          based in UK
        </h1>
        <p className='text-body text-white500 dark:text-white800'>
          Transforming the web one line of code at a time: <br />
          Crafting cutting-edge digital experiences with precision, <br />
          passion, and a profound commitment to excellence.
        </p>
        <div className='mt-9 flex flex-col gap-2 md:flex-row'>
          <a
            href='/'
            className='inline-flex h-12 items-center justify-center rounded-full bg-primaryLight py-3 text-sm font-semibold text-white900 dark:bg-primaryDark md:w-48 md:px-3 md:py-5 md:text-lg'
          >
            My Work
          </a>
          <a
            href='/'
            className='inline-flex h-12 items-center justify-center rounded-full bg-white900 py-4 font-semibold text-white500 dark:bg-black200 dark:text-white900 md:w-52 md:py-6'
          >
            Contact Me
          </a>
        </div>
      </div>
      {/* Hero Image */}
      <div className='md:w-[50%]'>Image goes here</div>
    </section>
  );
};

export default Hero;
