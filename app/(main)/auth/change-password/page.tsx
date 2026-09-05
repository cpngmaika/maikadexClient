"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { changePassword } from "@/lib/auth/auth.api";
import { useAuth } from "@/app/components/auth/AuthProvider";
import AuthCard from "@/app/components/auth/ui/AuthCard";
import AuthInput from "@/app/components/auth/ui/AuthInput";
import AuthButton from "@/app/components/auth/ui/AuthButton";

export default function ChangePasswordPage() {
    const router = useRouter();
    const { user } = useAuth();

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!user) {
            setError("Bạn cần đăng nhập để thực hiện chức năng này");
            return;
        }

        if (!oldPassword || !newPassword || !confirmPassword) {
            setError("Vui lòng điền đầy đủ thông tin");
            return;
        }

        if (newPassword !== confirmPassword) {
            setError("Mật khẩu mới và xác nhận mật khẩu không khớp");
            return;
        }

        setLoading(true);
        try {
            await changePassword(oldPassword, newPassword);
            setSuccess("Đổi mật khẩu thành công!");
            setOldPassword("");
            setNewPassword("");
            setConfirmPassword("");

            // Redirect sau 2 giây
            setTimeout(() => {
                router.push("/profile");
            }, 2000);
        } catch (err: any) {
            setError(err.message || "Đổi mật khẩu thất bại");
        } finally {
            setLoading(false);
        }
    };

    if (!user) {
        return (
            <div className="flex h-[50vh] items-center justify-center">
                <p>Vui lòng đăng nhập để đổi mật khẩu.</p>
            </div>
        );
    }

    return (
        <AuthCard
            title="Đổi Mật Khẩu"
            description="Cập nhật mật khẩu bảo mật tài khoản"
            footerText="Quay lại"
            footerLink="/profile"
            footerLinkText="Hồ sơ cá nhân"
        >
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                {error && (
                    <div className="rounded-md bg-red-50 p-3 text-sm text-red-600">
                        {error}
                    </div>
                )}

                {success && (
                    <div className="rounded-md bg-green-50 p-3 text-sm text-green-600">
                        {success}
                    </div>
                )}

                <AuthInput
                    label="Mật khẩu hiện tại"
                    type="password"
                    placeholder="Nhập mật khẩu hiện tại"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    required
                />

                <AuthInput
                    label="Mật khẩu mới"
                    type="password"
                    placeholder="Nhập mật khẩu mới"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />

                <AuthInput
                    label="Xác nhận mật khẩu mới"
                    type="password"
                    placeholder="Nhập lại mật khẩu mới"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />

                <AuthButton type="submit" isLoading={loading}>
                    Đổi mật khẩu
                </AuthButton>
            </form>
        </AuthCard>
    );
}
