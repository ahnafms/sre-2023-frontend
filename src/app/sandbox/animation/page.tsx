'use client';

import Aos from '@/components/animation/Aos';

const Animation = () => {
  return (
    <div>
      <div className='h-screen w-full'>
        <div></div>
      </div>
      <div className='h-screen w-full flex justify-center'>
        <Aos debug={true} effect={'fade'}>
          <div className='w-16 h-8 bg-blue-400'></div>
        </Aos>
      </div>
    </div>
  );
};

export default Animation;
