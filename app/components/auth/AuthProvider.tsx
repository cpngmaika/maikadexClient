'use client'
import { createContext, useContext, useEffect, useState } from "react"
import type { User, AuthContextType } from "@/types/auth";
import { getCurrentUser, logout as logoutApi } from "@/lib/auth/auth.api";

const AuthContext = createContext<AuthContextType | undefined>(
    undefined
);

export function AuthProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const user = await getCurrentUser();
                setUser(user);
            } catch (error) {
                console.error(error);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    const logout = async () => {
        try {
            await logoutApi();
            setUser(null);
        } catch (error) {
            console.error(error);
        }
    };

    const loginContext = (user: User) => {
        setUser(user);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                loginContext,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error(
            "useAuth must be used inside AuthProvider"
        );
    }

    return context;
}