import type { User } from "../../types/auth";

const API_URL = "http://localhost:3001";

export async function getCurrentUser(): Promise<User | null> {
    const res = await fetch(`${API_URL}/me`, {
        credentials: "include",
    });

    if (!res.ok) {
        return null;
    }

    const data = await res.json();

    return data.user;
}

export async function logout(): Promise<void> {
    await fetch(`${API_URL}/logout`, {
        credentials: "include",
    });
}

export async function login(email: string, password: string): Promise<User> {
    const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
    });
    if (!res.ok) {
        throw new Error("Đăng nhập thất bại");
    }
    const data = await res.json();
    return data.user;
}