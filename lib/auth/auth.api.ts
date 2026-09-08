import type { User } from "../../types/auth";

const API_URL = process.env.NEXT_PUBLIC_SERVER_API_URL || "http://localhost:3001";

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
        method: "GET",
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
    const data = await res.json();
    if (!res.ok) {
        const errorMsg = data.errors?.email || data.errors?.password || data.message || "Đăng nhập thất bại";
        throw new Error(errorMsg);
    }
    return data.user;
}

export async function register(email: string, password: string): Promise<User> {
    const res = await fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (!res.ok) {
        const errorMsg = data.errors?.email || data.errors?.password || data.message || "Đăng ký thất bại";
        throw new Error(errorMsg);
    }

    return data.user;
}

export async function changePassword(oldPassword: string, newPassword: string): Promise<{ message: string }> {
    const res = await fetch(`${API_URL}/change-password`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ oldPassword, newPassword }),
    })
    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message || "đổi mật khẩu thất bại");
    }

    return data;
}