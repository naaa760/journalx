import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SignedIn } from "@clerk/nextjs";
import { SignedOut } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <header className="container mx-auto">
      <nav className="py-6 px-4 justify-between items-center">
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            alt="Journalx Logo"
            height={60}
            width={200}
            className="h-10 w-auto object-contain"
          />
        </Link>

        <div className="flex items-center gap-4">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header; // Updated export to use an uppercase component name
