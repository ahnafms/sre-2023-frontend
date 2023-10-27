'use client';

import Button from '@/components/Button';
import api from '@/lib/api';
import { setToken } from '@/lib/cookies';
import { ApiResponse } from '@/types/api';

export default function ApiTest() {
  const handleSetToken = () => setToken('test_token');
  const handleSendRequest = () => {
    api
      .get<ApiResponse<string | null>>('/department', {
        toastify: true,
        loadingMessage: 'Geting all department',
      })
      .then(data => {
        // eslint-disable-next-line no-console
        console.log(data.data);
      });
  };

  return (
    <div className='w-full h-screen p-6 flex gap-4 items-start bg-typo-white'>
      <Button onClick={handleSetToken}>Set Token</Button>
      <Button onClick={handleSendRequest}>Send Request</Button>
    </div>
  );
}
