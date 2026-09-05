"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/auth/auth.api";
import { useAuth } from "@/app/components/auth/AuthProvider";
import AuthCard from "@/app/components/auth/ui/AuthCard";
import AuthInput from "@/app/components/auth/ui/AuthInput";
import AuthButton from "@/app/components/auth/ui/AuthButton";

export default function LoginPage() {
    const router = useRouter();
    const { loginContext } = useAuth();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        
        if (!email || !password) {
            setError("Vui lòng điền đầy đủ email và mật khẩu");
            return;
        }

        setLoading(true);
        try {
            const user = await login(email, password);
            loginContext(user);
            router.push("/");
        } catch (err: any) {
            setError(err.message || "Đăng nhập thất bại");
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthCard
            title="Đăng Nhập"
            description="Chào mừng bạn quay lại với MaikaDex"
            footerText="Chưa có tài khoản?"
            footerLink="/auth/register"
            footerLinkText="Đăng ký ngay"
        >
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                {error && (
                    <div className="rounded-md bg-red-50 p-3 text-sm text-red-600">
                        {error}
                    </div>
                )}
                
                <AuthInput
                    label="Email"
                    type="email"
                    placeholder="Nhập email của bạn"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                
                <AuthInput
                    label="Mật khẩu"
                    type="password"
                    placeholder="Nhập mật khẩu"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <AuthButton type="submit" isLoading={loading}>
                    Đăng nhập
                </AuthButton>
            </form>
        </AuthCard>
    );
}