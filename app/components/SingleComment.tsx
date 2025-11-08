import { Image } from '../builders/Image';

export const SingleComment = () => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        <Image
          path="userImg.jpeg"
          alt="User 1"
          className="w-10 h-10 rounded-full object-cover"
          width={40}
          height={40}
        />
        <span className="font-medium">John Doe</span>
        <span className="text-sm text-gray-500">2 days ago</span>
      </div>
      <div className="mt-4">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </div>
    </div>
  );
};
