import { ImSpinner8 } from 'react-icons/im';

import Typography from './Typography';

export default function Loading() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-typo-white'>
      <ImSpinner8 className='text-typo-dark mb-4 animate-spin text-4xl' />
      <Typography>Loading...</Typography>
    </div>
  );
}
