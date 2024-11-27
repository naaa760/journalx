import Header from "@/components/header"; // Import your custom header component
import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Journalx",
  description: "A Journaling App",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="bg-[url('/bg.jpg')] opacity-50 fixed -z-20 inset-0" />
          <Header /> {/* Use your custom Header component */}
          <main className="min-h-screen">{children}</main>
          <footer className="bg-lime-200 py-12 bg-opacity-10">
            <div className="mx-auto px-4 text-center text-gray-900">
              <p>Made by Neha Prasad 👩🏻‍🦰</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
