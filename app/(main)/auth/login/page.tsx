'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/auth/auth.api";
import { useAuth } from "@/app/components/auth/AuthProvider";

export default function loginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const { loginContext } = useAuth();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const user = await login(email, password);
            console.log(`${user.email} Đăng nhập thành công!`);
            loginContext(user);
            router.push('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1>login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" value={email} onChange={e => setEmail(e.target.value)} />

                <label htmlFor="password">password</label>
                <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />

                <button type="submit"> Login </button>
            </form>
        </div>
    )
}