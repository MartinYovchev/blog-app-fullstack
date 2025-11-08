import { Button } from '../builders/Button';
import { Textarea } from '../builders/Textarea';
import { SingleComment } from './SingleComment';

export const Comments = () => {
  return (
    <div className="flex flex-col gap-8 lg:w-3/5">
      <h1 className="text-xl text-gray-500 underline">Comments</h1>
      <div className="flex items-center gap-4 w-full justify-between">
        <Textarea placeholder="Add a comment" className="w-full" />
        <Button className="bg-blue-800 text-white px-4 py-2 rounded-xl font-medium">Add Comment</Button>
      </div>
      <SingleComment />
      <SingleComment />
      <SingleComment />
      <SingleComment />
      <SingleComment />
      <SingleComment />
    </div>
  );
};
