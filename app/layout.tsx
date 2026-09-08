import "./globals.css";
import type { Metadata } from "next";
import { AuthProvider } from "./components/auth/AuthProvider";
import Navbar from "./components/ui/navbar";
import Footer from "./components/ui/footer";

export const metadata: Metadata = {
  title: "MaikaDex",
  description: "MangaDex Third-Party Client",
  referrer: "no-referrer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="referrer" content="no-referrer" />
      </head>
      <body className="relative text-slate-900">
        {/* Nền họa tiết lưới mờ kết hợp gradient blob */}
        <div className="fixed inset-0 -z-10 h-full w-full bg-slate-50 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-400 opacity-20 blur-[100px]"></div>
          <div className="absolute right-1/4 bottom-1/4 -z-10 h-[250px] w-[250px] rounded-full bg-purple-400 opacity-20 blur-[100px]"></div>
        </div>

        <AuthProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
