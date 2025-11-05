import Link from 'next/link';
import { Input } from '../builders/Input';

export const MainCategories = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-between gap-8">
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link href="/posts" className="bg-blue-800 text-white px-4 rounded-full py-2">
          All Posts
        </Link>
        <Link href="posts?category=web-design" className="hover:bg-blue-50 px-4 rounded-full py-2 ">
          Web Design
        </Link>
        <Link href="posts?category=web-development" className="hover:bg-blue-50 px-4 rounded-full py-2 ">
          Web Development
        </Link>
        <Link href="posts?category=database" className="hover:bg-blue-50 px-4 rounded-full py-2 ">
          Database
        </Link>
        <Link href="posts?category=ai" className="hover:bg-blue-50 px-4 rounded-full py-2 ">
          AI
        </Link>
        <Link href="posts?category=ux-ui" className="hover:bg-blue-50 px-4 rounded-full py-2 ">
          UX/UI
        </Link>
        <Link href="posts?category=marketing" className="hover:bg-blue-50 px-4 rounded-full py-2 ">
          Marketing
        </Link>
      </div>
      <span className="text-xl font-medium">|</span>
      <div className="bg-gray-100 rounded-full p-2 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="gray">
          <circle cx="10.5" cy="10.5" r="7.5" />
          <line x1="16.5" y1="16.5" x2="22" y2="22" />
        </svg>
        <Input placeholder="Search" className="bg-transparent outline-none" />
      </div>
    </div>
  );
};
