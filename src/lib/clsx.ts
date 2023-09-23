import _clsx, { ClassValue } from 'clsx';

const clsx = (...args: ClassValue[]) =>
  _clsx(...args)
    .replace(/^\n/, '')
    .replace(/\n/g, ' ')
    .replace(/\s+/g, ' ');

export default clsx;
