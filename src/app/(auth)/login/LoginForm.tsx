'use client';

import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { ApiError } from 'next/dist/server/api-utils';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';
import { BiSolidLock, BiSolidUser } from 'react-icons/bi';

import Button from '@/components/Button';
import Input from '@/components/form/Input';
import Typography from '@/components/Typography';
import api from '@/lib/api';
import { setToken } from '@/lib/cookies';
import useAuthStore from '@/stores/useAuthStore';
import { ApiResponse } from '@/types/api';
import { User } from '@/types/user';

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = ApiResponse<{
  token: string;
  role: string;
}>;

export default function LoginForm() {
  const router = useRouter();
  const methods = useForm<LoginRequest>();

  const { login } = useAuthStore();

  const { mutate: handleLogin, isPending } = useMutation<
    LoginResponse,
    AxiosError<ApiError>,
    LoginRequest
  >({
    mutationFn: async data => {
      const res = await api.post<LoginResponse>('/user/login', data, {
        toastify: true,
      });
      const { token } = res.data.data;
      setToken(token);

      const user = await api.get<ApiResponse<User>>('/user/me');
      if (user) login({ ...user.data.data, token });
      return res.data;
    },
    onSuccess: () => router.push('/dashboard'),
  });

  const onSubmit = (data: LoginRequest) => handleLogin(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className='space-y-6'>
        <div className='space-y-2'>
          <Input
            id='email'
            label='Username'
            leftIcon={BiSolidUser}
            placeholder='imroatus@gmail.com'
            helperText='Username berupa email'
          />
          <div className='space-y-1'>
            <Input
              type='password'
              id='password'
              label='Password'
              leftIcon={BiSolidLock}
              placeholder='1234pass'
            />
            <Typography variant='c1' className='underline'>
              <Link href='/forgot-password'>Lupa password?</Link>
            </Typography>
          </div>
        </div>

        <Button
          type='submit'
          variant='success'
          className='w-full bg-secondary-50 hover:bg-secondary-60 active:bg-secondary-70'
          textClassName='text-white'
          isLoading={isPending}
        >
          Login
        </Button>
      </form>
    </FormProvider>
  );
}
