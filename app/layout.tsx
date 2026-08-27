import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/ui/navbar";
import Footer from "./components/ui/footer";

export const metadata: Metadata = {
  title: "MaikaDex",
  description: "lmao",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
