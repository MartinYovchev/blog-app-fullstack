import Link from 'next/link';
import { Image } from '../../builders/Image';
import { PostMenuActions } from '@/app/components/PostMenuActions';
import { Search } from '@/app/components/Search';
import { Comments } from '@/app/components/Comments';

type SinglePostProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function SinglePost({ params }: SinglePostProps) {
  const { slug } = await params;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
          </h1>
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
          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quos. consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam, quos. consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quisquam, quos.
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image path="postImg.jpeg" alt="Post 1" width={600} className="rounded-3xl object-cover" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-12 justify-between">
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque fugiat itaque quas esse sunt cupiditate
            possimus cumque asperiores, dolorem, dolores eligendi amet perferendis illum repellat nam quam facilis
            veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta
            quas exercitationem aliquam maxime quaerat, enim autem culpa sequi at! Earum facere in ducimus culpa. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Libero fuga modi amet error aliquid eos nobis vero
            soluta facilis, voluptatem, voluptates quod suscipit obcaecati voluptate quaerat laborum, voluptatum dicta
            ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque fugiat itaque quas esse sunt cupiditate
            possimus cumque asperiores, dolorem, dolores eligendi amet perferendis illum repellat nam quam facilis
            veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta
            quas exercitationem aliquam maxime quaerat, enim autem culpa sequi at! Earum facere in ducimus culpa. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Libero fuga modi amet error aliquid eos nobis vero
            soluta facilis, voluptatem, voluptates quod suscipit obcaecati voluptate quaerat laborum, voluptatum dicta
            ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque fugiat itaque quas esse sunt cupiditate
            possimus cumque asperiores, dolorem, dolores eligendi amet perferendis illum repellat nam quam facilis
            veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta
            quas exercitationem aliquam maxime quaerat, enim autem culpa sequi at! Earum facere in ducimus culpa. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Libero fuga modi amet error aliquid eos nobis vero
            soluta facilis, voluptatem, voluptates quod suscipit obcaecati voluptate quaerat laborum, voluptatum dicta
            ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque fugiat itaque quas esse sunt cupiditate
            possimus cumque asperiores, dolorem, dolores eligendi amet perferendis illum repellat nam quam facilis
            veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta
            quas exercitationem aliquam maxime quaerat, enim autem culpa sequi at! Earum facere in ducimus culpa. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Libero fuga modi amet error aliquid eos nobis vero
            soluta facilis, voluptatem, voluptates quod suscipit obcaecati voluptate quaerat laborum, voluptatum dicta
            ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque fugiat itaque quas esse sunt cupiditate
            possimus cumque asperiores, dolorem, dolores eligendi amet perferendis illum repellat nam quam facilis
            veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta
            quas exercitationem aliquam maxime quaerat, enim autem culpa sequi at! Earum facere in ducimus culpa. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Libero fuga modi amet error aliquid eos nobis vero
            soluta facilis, voluptatem, voluptates quod suscipit obcaecati voluptate quaerat laborum, voluptatum dicta
            ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque fugiat itaque quas esse sunt cupiditate
            possimus cumque asperiores, dolorem, dolores eligendi amet perferendis illum repellat nam quam facilis
            veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta
            quas exercitationem aliquam maxime quaerat, enim autem culpa sequi at! Earum facere in ducimus culpa. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Libero fuga modi amet error aliquid eos nobis vero
            soluta facilis, voluptatem, voluptates quod suscipit obcaecati voluptate quaerat laborum, voluptatum dicta
            ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque fugiat itaque quas esse sunt cupiditate
            possimus cumque asperiores, dolorem, dolores eligendi amet perferendis illum repellat nam quam facilis
            veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta
            quas exercitationem aliquam maxime quaerat, enim autem culpa sequi at! Earum facere in ducimus culpa. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Libero fuga modi amet error aliquid eos nobis vero
            soluta facilis, voluptatem, voluptates quod suscipit obcaecati voluptate quaerat laborum, voluptatum dicta
            ipsum.
          </p>
        </div>
        <div className="px-4 h-max sticky top-8">
          <h1 className="mt-8 mb-4 text-sm font-semibold">Author</h1>
          <div className="flex flex-col gap-4">
            <Image
              path="userImg.jpeg"
              alt="User 1"
              className="w-12 h-12 rounded-full object-cover"
              width={48}
              height={48}
            />
            <Link href="" className="text-blue-800">
              John Doe
            </Link>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            <div className="flex items-center gap-2">
              <Link href="" className="text-blue-800">
                <Image path="instagram.svg" alt="Instagram" width={20} height={20} />
              </Link>
              <Link href="" className="text-blue-800">
                <Image path="facebook.svg" alt="Facebook" width={20} height={20} />
              </Link>
            </div>
          </div>
          <PostMenuActions />
          <h1 className="mt-8 mb-4 text-sm font-semibold">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link href="" className="underline">
              All
            </Link>
            <Link href="" className="underline">
              Web Design
            </Link>
            <Link href="" className="underline">
              Web Development
            </Link>
            <Link href="" className="underline">
              Database
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-semibold">Search</h1>
          <Search />
        </div>
      </div>
      <Comments />
    </div>
  );
}
