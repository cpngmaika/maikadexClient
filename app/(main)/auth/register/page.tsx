'use client'

import { useAuth } from "@/app/components/auth/AuthProvider";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { register } from "@/lib/auth/auth.api";

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const router = useRouter();
    const { loginContext } = useAuth();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            return (
                <>
                    <h1 className="text-red-500">
                        mật khẩu và xác nhận mật khẩu không khớp
                    </h1>
                </>
            )
        }

        try {
            const user = await register(email, password);
            console.log(`${user.email} Đăng ký thành công!`);
            // loginContext(user);
            router.push('/auth/login');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1>Đăng ký tài khoản</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)}></input>

                <label htmlFor="password">Password</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}></input>

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}></input>

                <button type="submit"> Register </button>
            </form>
        </div>
    );
}