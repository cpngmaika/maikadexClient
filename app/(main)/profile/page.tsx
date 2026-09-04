'use client'

import Link from "next/link"

export default function profilePage() {
    return (
        <div>
            <h1>profile</h1>
            <Link href='/auth/changePassword'>đổi mật khẩu</Link>
        </div>
    )
}