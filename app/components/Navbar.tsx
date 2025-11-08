'use client';

import Link from 'next/link';
import { Image } from '../builders/Image';
import { useState } from 'react';
import { Button } from '../builders/Button';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

export const Navbar = () => {
  const [openDesktopNav, setOpenDesktopNav] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-4 text-2xl font-bold">
        <Image path="/logo.png" alt="logo" width={30} height={30} className="rounded-full" />
        <span>Blog App</span>
      </Link>
      <div className="md:hidden">
        <div onClick={() => setOpenDesktopNav(!openDesktopNav)} className="text-2xl font-bold cursor-pointer">
          {openDesktopNav ? 'X' : '☰'}
        </div>
        <div
          className={`w-full h-screen flex flex-col transition-all 
            ease-in-out duration-300 items-center  gap-8 font-medium text-lg 
            justify-center absolute top-16 ${openDesktopNav ? '-right-0 bg-[#e6e6ff]' : '-right-[100%]'}`}
        >
          <Link href="/">Home</Link>
          <Link href="/trending">Trending</Link>
          <Link href="/most-popular">Most Popular</Link>
          <Link href="/about">About</Link>
          <SignedOut>
            <Link href="/login">
              <Button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">Login</Button>
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-8 xl:gap-12">
        <Link href="/">Home</Link>
        <Link href="/trending">Trending</Link>
        <Link href="/most-popular">Most Popular</Link>
        <Link href="/about">About</Link>
        <SignedOut>
          <Link href="">
            <Button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">Login</Button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
