import React, { useState, useContext, createContext } from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';
import endpoints from '@/services/api';

const AuthContext = createContext<any>(null);

const useProvideAuth = () => {
  const [user, setUser] = useState<string>('');
  const signin = async (email: string, password: string): Promise<void> => {
    const { data: access_token } = await axios.post(
      endpoints.auth.login,
      {
        email,
        password,
      },
      {
        headers: {
          accept: '*/*',
          'Content-Type': 'application/json;charset=utf-8',
        },
      }
    );
    if (access_token) {
      Cookie.set('access_token', access_token.access_token, {
        secure: true,
        expires: 5,
      });
      setUser(email);
    }
  };

  return {
    user,
    signin,
  };
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export const ProvideAuth: React.FC<{ children: JSX.Element }> = ({
  children,
}): JSX.Element => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
