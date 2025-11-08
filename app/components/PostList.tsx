import { PostListItem } from './PostListItem';

export const PostList = () => {
  return (
    <div className="flex flex-col gap-8 mb-8">
      <PostListItem />
      <PostListItem />
      <PostListItem />
    </div>
  );
};
