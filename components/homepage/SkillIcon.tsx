import { FC, useState } from 'react';
import Image from 'next/image';
import { Tooltip } from '@nextui-org/react';

interface SkillIconProps {
  src: string;
  text: string;
}

const SkillIcon: FC<SkillIconProps> = ({ src, text }) => {
  const [colourIcon, setColourIcon] = useState<boolean>(false);

  return (
    <Tooltip content={text} placement='bottom'>
      <div
        key={src}
        className={`cursor-pointer rounded-full ${
          colourIcon ? 'bg-white900 shadow-lg dark:bg-black200' : 'bg-white800'
        }  p-3.5 dark:bg-black200 lg:p-6`}
        onMouseOver={() => setColourIcon(true)}
        onMouseLeave={() => setColourIcon(false)}
      >
        <Image
          src={src}
          width={25}
          height={25}
          alt={`${text} Icon`}
          className={`h-[2rem] w-[2rem] ${
            !colourIcon && 'grayscale'
          }  xl:h-[3rem] xl:w-[3rem]`}
        />
      </div>
    </Tooltip>
  );
};

export default SkillIcon;
