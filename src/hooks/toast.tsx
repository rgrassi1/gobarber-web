import React, { createContext, useContext, useCallback, useState } from 'react';
import { uuid } from 'uuidv4';
import ToastContainer from '../components/ToastContainer';

export interface IToastMessage {
  id: string;
  type?: 'info' | 'success' | 'error';
  title: string;
  description: string;
}

interface IToastContextData {
  addToast(message: Omit<IToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

const ToastContext = createContext<IToastContextData>({} as IToastContextData);

export const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<IToastMessage[]>([]);

  const addToast = useCallback(
    ({ type, title, description }: Omit<IToastMessage, 'id'>) => {
      const id = uuid();
      const toast = { id, type, title, description };
      setMessages((old) => [...old, toast]);
    },
    [],
  );

  const removeToast = useCallback((id: string) => {
    setMessages((old) => old.filter((message) => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

export function useToast(): IToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used whiting an ToastProvider');
  }

  return context;
}
