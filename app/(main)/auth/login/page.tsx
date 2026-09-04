'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/auth/auth.api";
import { useAuth } from "@/app/components/auth/AuthProvider";

export default function loginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { loginContext } = useAuth();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const user = await login(email, password);
            console.log(`${user.email} Đăng nhập thành công!`);
            loginContext(user);
            router.push('/');
        } catch (err: any) {
            setError(err.message || 'Đăng nhập thất bại');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <h1>login</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input 
                    type="text" 
                    id="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    required 
                />

                <label htmlFor="password">password</label>
                <input 
                    type="password" 
                    id="password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                    required 
                />

                <button type="submit" disabled={loading}>
                    {loading ? "Đang đăng nhập..." : "Login"}
                </button>
            </form>
        </div>
    )
}