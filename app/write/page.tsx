'use client';

import dynamic from 'next/dynamic';
import { useUser } from '@clerk/nextjs';
import 'react-quill-new/dist/quill.snow.css';
import { redirect } from 'next/navigation';
import { Button } from '../builders/Button';
import { Textarea } from '../builders/Textarea';
import { Input } from '../builders/Input';

export default function Write() {
  const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) return <div>Loading...</div>;

  if (!isLoaded && !isSignedIn) return redirect('/login');

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="text-cl font-light">Create a New Post</h1>
      <form className="flex flex-col gap-6 flex-1 mb-6">
        {/* <Upload type="image" setProgress={setProgress} setData={setCover}>
          <Button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">Add a cover image</Button>
        </Upload> */}
        <Input className="text-4xl font-semibold bg-transparent outline-none" placeholder="My Awesome Story" />
        <div className="flex items-center gap-4">
          <label htmlFor="" className="text-sm">
            Choose a category:
          </label>
          <select name="category" id="" className="p-2 rounded-xl bg-white shadow-md">
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="seo">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <Textarea className="p-4 rounded-xl bg-white shadow-md" name="desc" placeholder="A Short Description" />
        <div className="flex flex-1 ">
          <div className="flex flex-col gap-2 mr-2">
            {/* <Upload type="image" setProgress={setProgress} setData={setImg}>
              🌆
            </Upload>
            <Upload type="video" setProgress={setProgress} setData={setVideo}>
              ▶️
            </Upload> */}
          </div>
          <ReactQuill theme="snow" className="outline-none border-none flex-1 rounded-xl bg-white shadow-md " />
        </div>
        <Button className="bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36 disabled:bg-blue-400 disabled:cursor-not-allowed">
          Publish
        </Button>
      </form>
    </div>
  );
}
