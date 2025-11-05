type SinglePostProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function SinglePost({ params }: SinglePostProps) {
  // Access the slug parameter
  const { slug } = await params;

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32 ">
      <h1>Single Post: {slug}</h1>
      {/* Your post content here */}
    </div>
  );
}
