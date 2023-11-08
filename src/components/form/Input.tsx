import * as React from 'react';
import { get, RegisterOptions, useFormContext } from 'react-hook-form';
import { IconType } from 'react-icons';
import { HiEye, HiEyeOff } from 'react-icons/hi';

import clsxm from '@/lib/clsxm';

import Typography from '../Typography';

type InputProps = {
  id: string;
  label?: string;
  helperText?: string;
  hideError?: boolean;
  validation?: RegisterOptions;
  leftIcon?: IconType;
  rightIcon?: IconType;
  leftIconClassName?: string;
  rightIconClassName?: string;
} & React.ComponentPropsWithRef<'input'>;

export default function Input({
  id,
  label,
  helperText,
  hideError = false,
  validation,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  leftIconClassName,
  rightIconClassName,
  className,
  type = 'text',
  readOnly = false,
  disabled = false,
  ...rest
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [showPassword, setShowPassword] = React.useState(false);
  const error = get(errors, id);

  return (
    <div className='w-full space-y-1'>
      {label && (
        <Typography
          as='label'
          htmlFor={id}
          variant='c2'
          weight='semibold'
          color='input'
          className='w-full'
        >
          {label}
        </Typography>
      )}

      <div className='relative w-full'>
        {LeftIcon && (
          <div
            className={clsxm(
              'absolute top-0 left-0 h-full',
              'flex justify-center items-center pl-3',
            )}
          >
            <LeftIcon
              className={clsxm(
                'fill-typo-icon text-p',
                disabled && 'fill-typo-disabled',
                leftIconClassName,
              )}
            />
          </div>
        )}

        <input
          {...register(id, validation)}
          type={
            type === 'password' ? (showPassword ? 'text' : 'password') : type
          }
          id={id}
          name={id}
          readOnly={readOnly}
          disabled={readOnly || disabled}
          className={clsxm(
            'w-full px-3 py-1.5 rounded-lg flex',
            [LeftIcon && 'pl-9', RightIcon && 'pr-9'],
            'outline-none ring-1 ring-inset ring-typo-inline',
            'text-c2 text-typo-input placeholder:text-typo-icon',
            'focus:ring-1 focus:ring-inset focus:ring-success-40',
            readOnly && 'cursor-default',
            error && [
              'bg-critical-10 ring-critical-50',
              'focus:ring-2 focus:ring-critical-50',
            ],
            className,
          )}
          aria-describedby={id}
          {...rest}
        />

        {(RightIcon || type === 'password') && (
          <div
            className={clsxm(
              'absolute top-0 right-0 h-full',
              'flex justify-center items-center pr-3',
              type === 'password' && 'cursor-pointer',
            )}
            onClick={() =>
              type === 'password' && setShowPassword(prev => !prev)
            }
          >
            {RightIcon ? (
              <RightIcon
                className={clsxm(
                  'fill-typo-icon text-p',
                  disabled && 'fill-typo-disabled',
                  rightIconClassName,
                )}
              />
            ) : type === 'password' && showPassword ? (
              <HiEyeOff
                className={clsxm('fill-typo-icon text-p', rightIconClassName)}
              />
            ) : (
              <HiEye
                className={clsxm('fill-typo-icon text-p', rightIconClassName)}
              />
            )}
          </div>
        )}
      </div>

      {helperText && !(error && !hideError) && (
        <Typography
          as='p'
          variant='c1'
          color='input'
          className={clsxm('w-full', disabled && 'text-typo-icon')}
        >
          {helperText}
        </Typography>
      )}

      {error && !hideError && (
        <Typography as='p' variant='c1' className='w-full text-critical-60'>
          {error.message}
        </Typography>
      )}
    </div>
  );
}
