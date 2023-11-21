import { HTMLAttributes } from 'react';

import clsxm from '@/lib/clsxm';

import ITSText from './ITSText';
import LogoSRE from './LogoSRE';

const LogoVertical = ({
  className = '',
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={clsxm(['flex flex-col w-[229px] h-[143px]', className])}
      {...props}
    >
      <LogoSRE width='75%' />
      <ITSText width='100%' />
    </div>
  );
};

export default LogoVertical;
