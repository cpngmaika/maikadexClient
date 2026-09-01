export interface User {
    id: number,
    email: string,
}

export interface AuthContextType {
    user: User | null;
    loading: boolean;
    loginContext: (user: User) => void;
    logout: () => Promise<void>;
}

