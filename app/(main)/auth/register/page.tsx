"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { register } from "@/lib/auth/auth.api";
import AuthCard from "@/app/components/auth/ui/AuthCard";
import AuthInput from "@/app/components/auth/ui/AuthInput";
import AuthButton from "@/app/components/auth/ui/AuthButton";

export default function RegisterPage() {
    const router = useRouter();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        
        if (!email || !password || !confirmPassword) {
            setError("Vui lòng điền đầy đủ thông tin");
            return;
        }

        if (password !== confirmPassword) {
            setError("Mật khẩu và xác nhận mật khẩu không khớp");
            return;
        }

        setLoading(true);
        try {
            await register(email, password);
            router.push("/auth/login");
        } catch (err: any) {
            setError(err.message || "Đăng ký thất bại");
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthCard
            title="Đăng Ký"
            description="Tạo tài khoản mới trên MaikaDex"
            footerText="Đã có tài khoản?"
            footerLink="/auth/login"
            footerLinkText="Đăng nhập ngay"
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

                <AuthInput
                    label="Xác nhận mật khẩu"
                    type="password"
                    placeholder="Nhập lại mật khẩu"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />

                <AuthButton type="submit" isLoading={loading}>
                    Đăng ký
                </AuthButton>
            </form>
        </AuthCard>
    );
}