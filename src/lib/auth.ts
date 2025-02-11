import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';
import { API_BASE_URL } from './constants';

const secretKey = process.env.JWT_SECRET_KEY || 'your-secret-key';
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(key);
}

export async function decrypt(token: string) {
  try {
    const { payload } = await jwtVerify(token, key);
    return payload;
  } catch (error) {
    return null;
  }
}

interface AuthTokens {
  access: string;
  refresh: string;
}

interface User {
  id: number;
  username: string;
  email: string;
  // Add other user fields as needed
}

export async function login(formData: FormData): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/token/`, {
      method: 'POST',
      body: JSON.stringify({
        username: formData.get('username'),
        password: formData.get('password'),
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      return false;
    }

    const tokens: AuthTokens = await response.json();
    
    // Store tokens in httpOnly cookies
    const cookieStore = cookies();
    cookieStore.set('access_token', tokens.access, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 15, // 15 minutes
    });
    
    cookieStore.set('refresh_token', tokens.refresh, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });

    return true;
  } catch (error) {
    console.error('Login error:', error);
    return false;
  }
}

export async function refreshToken(): Promise<boolean> {
  try {
    const cookieStore = cookies();
    const refresh_token = cookieStore.get('refresh_token')?.value;

    if (!refresh_token) {
      return false;
    }

    const response = await fetch(`${API_BASE_URL}/auth/token/refresh/`, {
      method: 'POST',
      body: JSON.stringify({ refresh: refresh_token }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      return false;
    }

    const { access }: { access: string } = await response.json();
    
    cookieStore.set('access_token', access, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 15, // 15 minutes
    });

    return true;
  } catch (error) {
    console.error('Token refresh error:', error);
    return false;
  }
}

export async function logout() {
  const cookieStore = cookies();
  cookieStore.delete('access_token');
  cookieStore.delete('refresh_token');
}

export async function getUser(): Promise<User | null> {
  try {
    const cookieStore = cookies();
    const access_token = cookieStore.get('access_token')?.value;

    if (!access_token) {
      const refreshed = await refreshToken();
      if (!refreshed) {
        return null;
      }
    }

    const response = await fetch(`${API_BASE_URL}/user/`, {
      headers: {
        'Authorization': `Bearer ${access_token}`,
      },
    });

    if (!response.ok) {
      if (response.status === 401) {
        // Token might be expired, try refreshing
        const refreshed = await refreshToken();
        if (!refreshed) {
          return null;
        }
        // Retry with new token
        return await getUser();
      }
      return null;
    }

    const { user, status } = await response.json();
    return status === 'true' ? user : null;
  } catch (error) {
    console.error('Get user error:', error);
    return null;
  }
}

export async function updateSession(request: NextRequest) {
  const access_token = request.cookies.get('access_token')?.value;
  if (!access_token) {
    return null;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/user/`, {
      headers: {
        'Authorization': `Bearer ${access_token}`,
      },
    });

    if (!response.ok) {
      return null;
    }

    const { user, status } = await response.json();
    return status === 'true' ? user : null;
  } catch (error) {
    return null;
  }
} 