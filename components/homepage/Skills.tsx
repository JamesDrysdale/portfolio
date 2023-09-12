'use client';

import { skillsArray } from '@/constants';
import SkillIcon from './SkillIcon';

const Skills = () => {
  return (
    <section className='my-8 flex flex-col justify-center md:my-12'>
      <div className='m-auto w-[90px]'>
        <h2 className='text-underline mb-5'>Skills</h2>
      </div>

      <div className='grid grid-cols-3 gap-5 self-center sm:grid-cols-5 sm:gap-10 lg:grid-cols-6 xl:grid-cols-7'>
        {skillsArray.map((skill) => (
          <SkillIcon key={skill.text} src={skill.src} text={skill.text} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
