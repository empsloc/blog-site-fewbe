import Image from "next/image";

const FeaturedBlog = () => {
  return (
    <div className="mt-16 flex flex-col gap-16">
      <div className="">
        <h1 className="text-5xl md:text-7xl ">
            <p>
          <b>Hey, its Feweb </b>
          Discover new topics and creative ideas
          </p>
        </h1>

      </div>

      <div className="grid grid-cols-2 gap-10">
        <div className="h-96 w-3/3 relative hidden md:flex lg:col-span-1"><Image src="/nature.jpg" alt="" fill  /></div>
        <div className="flex gap-5 flex-col  justify-center ml-3 col-span-2 md:col-span-1">
            <h2 className="text-2xl md:text-3xl font-semibold">Simple ways to inspire your inner innovator</h2>
            <p className="text-base md:base font-light">
                Amet ad laborum eiusmod proident esse excepteur aliqua non elit incididunt. Amet et cupidatat incididunt labore sint officia laboris fugiat nisi cupidatat laboris voluptate aliquip. Laborum ut cupidatat cillum dolor exercitation irure. Labore adipisicing cupidatat voluptate adipisicing consectetur et sit nulla pariatur eu cillum.
            </p>
            <div className="p-3 rounded-sm bg-secondary w-max  font-bold mt-2">Read More</div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlog;
