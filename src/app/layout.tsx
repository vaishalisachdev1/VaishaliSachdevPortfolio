import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `${site.name}  ${site.role}`,
  description: site.intro,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Apply saved theme before paint to avoid a flash. Defaults to dark. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme');if(t==='light')document.documentElement.setAttribute('data-theme','light');}catch(e){}`,
          }}
        />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
