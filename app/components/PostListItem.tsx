import Link from 'next/link';
import { Image } from '../builders/Image';

export const PostListItem = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="md:hidden xl:block xl:w-1/3">
        <Image path="postImg.jpeg" alt="Post 1" className="rounded-3xl object-cover" />
      </div>
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link href="" className="text-4xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link href="" className="text-blue-800">
            John Doe
          </Link>
          <span>on</span>
          <Link href="" className="text-blue-800">
            Web Design
          </Link>
          <span>2 days ago</span>
        </div>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quisquam, quos.
        </p>
        <Link href="" className=" underline texts-sm text-blue-800">
          Read More
        </Link>
      </div>
    </div>
  );
};
