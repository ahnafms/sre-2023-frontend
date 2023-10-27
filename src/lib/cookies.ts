import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const getToken = (): string => cookies.get('@sre/token');

export const setToken = (token: string) => {
  cookies.set('@sre/token', token, { path: '/' });
};

export const removeToken = () => cookies.remove('@sre/token', { path: '/' });
