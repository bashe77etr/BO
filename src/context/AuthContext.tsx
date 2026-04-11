import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface User {
  name: string;
  email: string;
  stage: string;
  grade: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => { success: boolean; error?: string };
  signup: (user: User & { password: string }) => { success: boolean; error?: string };
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: () => ({ success: false }),
  signup: () => ({ success: false }),
  logout: () => {},
});

interface StoredUser extends User {
  password: string;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('currentUser');
    return saved ? JSON.parse(saved) : null;
  });

  const isAuthenticated = !!user;

  useEffect(() => {
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
    } else {
      localStorage.removeItem('currentUser');
    }
  }, [user]);

  const getUsers = (): StoredUser[] => {
    const data = localStorage.getItem('registeredUsers');
    return data ? JSON.parse(data) : [];
  };

  const saveUsers = (users: StoredUser[]) => {
    localStorage.setItem('registeredUsers', JSON.stringify(users));
  };

  const signup = (data: User & { password: string }): { success: boolean; error?: string } => {
    const users = getUsers();
    const exists = users.find(u => u.email === data.email);
    if (exists) {
      return { success: false, error: 'البريد الإلكتروني مسجل بالفعل' };
    }
    users.push(data);
    saveUsers(users);
    const { password: _, ...userData } = data;
    setUser(userData);
    return { success: true };
  };

  const login = (email: string, password: string): { success: boolean; error?: string } => {
    const users = getUsers();
    const found = users.find(u => u.email === email);
    if (!found) {
      return { success: false, error: 'لا يوجد حساب بهذا البريد الإلكتروني. يرجى إنشاء حساب جديد أولاً' };
    }
    if (found.password !== password) {
      return { success: false, error: 'كلمة المرور غير صحيحة' };
    }
    const { password: _, ...userData } = found;
    setUser(userData);
    return { success: true };
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
