import React from 'react'
import bgAnimate from './animation_lmvja3br.json'
import { useLottie } from 'lottie-react';

export default function Banner() {
  const options = {
    animationData: bgAnimate,
    loop: false
  };

  const { View } = useLottie(options);

  return <div className='w-1/2'>{View}</div>
}
