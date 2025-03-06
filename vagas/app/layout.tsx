import Navbar from "@/components/layout/navbar";
import "./globals.css";
import Footer from "@/components/layout/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">
          {children}
          </div>
        <Footer />
      </body>
    </html>
  );
}
