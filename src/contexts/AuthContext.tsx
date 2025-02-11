'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { API_BASE_URL } from '@/lib/constants';

interface User {
  username: string;
  people: any;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (tokens: { access: string; refresh: string }) => void;
  logout: () => void;
  checkAuth: () => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const login = (tokens: { access: string; refresh: string }) => {
    document.cookie = `access_token=${tokens.access}; path=/; max-age=900; SameSite=Strict; ${process.env.NODE_ENV === 'production' ? 'Secure;' : ''}`;
    document.cookie = `refresh_token=${tokens.refresh}; path=/; max-age=604800; SameSite=Strict; ${process.env.NODE_ENV === 'production' ? 'Secure;' : ''}`;
    checkAuth();
  };

  const logout = () => {
    setUser(null);
    document.cookie = 'access_token=; path=/; max-age=0';
    document.cookie = 'refresh_token=; path=/; max-age=0';
    router.push('/login');
  };

  const checkAuth = async (): Promise<boolean> => {
    try {
      const accessToken = document.cookie
        .split('; ')
        .find(row => row.startsWith('access_token='))
        ?.split('=')[1];

      if (!accessToken) {
        setLoading(false);
        return false;
      }

      const response = await fetch(`${API_BASE_URL}/user/`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (data.status === 'true') {
          setUser(data.user);
          setLoading(false);
          return true;
        }
      }
      
      logout();
      return false;
    } catch (error) {
      console.error('Auth check error:', error);
      logout();
      return false;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 