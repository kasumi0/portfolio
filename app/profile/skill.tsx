import { Skill } from '@/types/types';
import Image from 'next/image';
import React from 'react'

type Props = {
  skill:Skill
}

export const SkillCard = ({skill}: Props) => {
  const { caption, icon } = skill;
  return (
    <li>
      <figure>
        <Image src={icon} alt={caption} width={200} height={200} />
        <figcaption>{caption}</figcaption>
      </figure>
    </li>
  );
};