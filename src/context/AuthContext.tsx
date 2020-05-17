import React, { useCallback, createContext } from 'react';
import api from '../services/api';

interface Credentials {
  email: string;
  password: string;
}

interface AuthData {
  name: string;
  signIn(credentials: Credentials): Promise<void>;
}

export const AuthContext = createContext<AuthData>({} as AuthData);

export const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ email, password }) => {
    const { data } = await api.post('sessions', { email, password });
    console.log(data);
  }, []);

  return (
    <AuthContext.Provider value={{ name: '', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
