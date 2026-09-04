'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { changePassword } from "@/lib/auth/auth.api";
import { useAuth } from '@/app/components/auth/AuthProvider';

export default function ChangePasswordPage() {
    const router = useRouter();
    const { user, loading: authLoading } = useAuth();

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!authLoading && !user) {
            router.push('/auth/login');
        }
    }, [user, authLoading, router]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setSuccessMessage('');

        if (newPassword !== confirmNewPassword) {
            setError('Mật khẩu xác nhận không khớp!');
            return;
        }

        if (newPassword.length < 6) {
            setError('Mật khẩu mới phải có ít nhất 6 ký tự!');
            return;
        }

        setLoading(true);
        try {
            const res = await changePassword(currentPassword, newPassword);
            setSuccessMessage(res.message || "Thay đổi mật khẩu thành công");
            setCurrentPassword('');
            setNewPassword('');
            setConfirmNewPassword('');
        } catch (err: any) {
            setError(err.message || "Đổi mật khẩu thất bại");
        } finally {
            setLoading(false);
        }
    }

    if (authLoading || !user) {
        return <div>Đang tải...</div>;
    }

    return (
        <div>
            <h1>Đổi mật khẩu</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="currentPassword">Mật khẩu hiện tại</label>
                    <input
                        id="currentPassword"
                        type="password"
                        value={currentPassword}
                        onChange={e => setCurrentPassword(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="newPassword">Mật khẩu mới</label>
                    <input
                        id="newPassword"
                        type="password"
                        value={newPassword}
                        onChange={e => setNewPassword(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="confirmNewPassword">Xác nhận mật khẩu mới</label>
                    <input
                        id="confirmNewPassword"
                        type="password"
                        value={confirmNewPassword}
                        onChange={e => setConfirmNewPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" disabled={loading}>
                    {loading ? "Đang xử lý..." : "Xác nhận"}
                </button>
            </form>
        </div>
    );
}
