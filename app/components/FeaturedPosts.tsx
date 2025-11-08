import Link from 'next/link';
import { Image } from '../builders/Image';

export const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <Image path="featured1.jpeg" alt="Featured Post 1" className="rounded-3xl object-cover" />
        <div className="flex items-center gap-4">
          <h2 className="lg:text-lg font-semibold"> No.1</h2>
          <Link href="" className="text-blue-800 lg:text-lg">
            Web Design
          </Link>
          <span className="text-gray-500"> 2 days ago</span>
        </div>
        <Link href="" className="text-lg lg:text-3xl font-semibold lg:font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        </Link>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <div className="h-1/3 flex justify-between gap-4">
          <Image path="featured2.jpeg" alt="Featured Post 2" className="rounded-3xl object-cover w-1/3 aspect-video" />
          <div className="w-2/3">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">No. 2</h1>
              <Link href="" className="text-blue-800">
                Web Design
              </Link>
              <span className="text-gray-500 text-sm"> 2 days ago</span>
            </div>
            <Link href="" className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            </Link>
          </div>
        </div>
        <div className="h-1/3 flex justify-between gap-4">
          <Image path="featured3.jpeg" alt="Featured Post 3" className="rounded-3xl object-cover w-1/3 aspect-video" />
          <div className="w-2/3">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">No. 3</h1>
              <Link href="" className="text-blue-800">
                Web Design
              </Link>
              <span className="text-gray-500 text-sm"> 2 days ago</span>
            </div>
            <Link href="" className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            </Link>
          </div>
        </div>
        <div className="h-1/3 flex justify-between gap-4">
          <Image path="featured4.jpeg" alt="Featured Post 4" className="rounded-3xl object-cover w-1/3 aspect-video" />
          <div className="w-2/3">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">No. 4</h1>
              <Link href="" className="text-blue-800">
                Web Design
              </Link>
              <span className="text-gray-500 text-sm"> 2 days ago</span>
            </div>
            <Link href="" className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
