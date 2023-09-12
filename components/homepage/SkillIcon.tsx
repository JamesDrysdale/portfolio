import { FC } from 'react';
import Image from 'next/image';
import { Tooltip } from '@nextui-org/react';

interface SkillIconProps {
  src: string;
  text: string;
}

const SkillIcon: FC<SkillIconProps> = ({ src, text }) => {
  return (
    <Tooltip content={text} placement='bottom'>
      <div
        key={src}
        className='cursor-pointer rounded-full bg-white800 p-3.5 hover:z-10 hover:bg-white900 hover:shadow-lg dark:bg-black300 dark:hover:bg-black300 lg:p-6'
      >
        <Image
          src={src}
          width={25}
          height={25}
          alt={`${text} Icon`}
          className='h-[2rem] w-[2rem] grayscale hover:grayscale-0 xl:h-[3rem] xl:w-[3rem]'
        />
      </div>
    </Tooltip>
  );
};

export default SkillIcon;
