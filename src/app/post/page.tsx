import Comment from "@/components/comment/Comment";
import MaxWidthWrapper from "@/components/helpComponents/MaxWidhtWrapper";
import SideMenuSection from "@/components/sideMenuSection/SideMenuSection";
import Image from "next/image";

const PostPage = () => {
  return (
    <MaxWidthWrapper>
      <div className="mt-10">
        <div className="grid grid-cols-2 gap-5">
          <div className="h-96 flex flex-col justify-center gap-24">
            <div className="text-5xl font-bold">
              Eu elit officia minim magna do commodo eu{" "}
            </div>
            <div className=" flex gap-5 items-center">
              <div className="h-10 w-10 rounded-full relative">
                <Image className="rounded-full" src="/nature.jpg" alt="" fill />
              </div>
              <div className="">
                <div className="font-semibold">John Doe</div>
                <div className="text-sm">20-10-2023</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image src="/nature.jpg" alt="" fill />
          </div>
        </div>

        <div className="grid grid-cols-7 mt-10 gap-5">
            <div className="col-span-5">
                <p className="flex flex-col gap-7">
                    Labore nulla culpa est aute reprehenderit nostrud in dolore consequat nisi id eiusmod sint do. Proident mollit aliqua esse aliqua consequat duis eiusmod non do. Aliqua consequat cupidatat et dolor eu quis aliquip aliquip non qui enim excepteur laboris eiusmod. Consequat laboris occaecat sit labore veniam nulla fugiat exercitation aliqua esse nostrud.
                    <h3 className="text-xl font-semibold">Ullamco proident ipsum ea sunt occaecat sit nostrud</h3>
                    Reprehenderit reprehenderit proident laboris id elit nulla est occaecat aliquip reprehenderit aute est pariatur est. Id irure esse ipsum aliquip proident. Enim aliquip pariatur id reprehenderit ut. Do nisi mollit ea deserunt sint nisi anim laborum laborum ex magna quis.
                    Anim magna pariatur id velit est et laborum veniam aliqua eiusmod irure aliqua fugiat deserunt. Ex incididunt enim do veniam dolor id qui non eu ut officia exercitation esse. Occaecat et reprehenderit culpa pariatur ad exercitation. Amet laboris sint consectetur labore et consectetur irure deserunt.
                    <h3 className="text-xl font-semibold">Ullamco proident ipsum ea sunt occaecat sit nostrud</h3>
                    Reprehenderit reprehenderit proident laboris id elit nulla est occaecat aliquip reprehenderit aute est pariatur est. Id irure esse ipsum aliquip proident. Enim aliquip pariatur id reprehenderit ut. Do nisi mollit ea deserunt sint nisi anim laborum laborum ex magna quis.
                    Anim magna pariatur id velit est et laborum veniam aliqua eiusmod irure aliqua fugiat deserunt. Ex incididunt enim do veniam dolor id qui non eu ut officia exercitation esse. Occaecat et reprehenderit culpa pariatur ad exercitation. Amet laboris sint consectetur labore et consectetur irure deserunt.
                </p>
                <div className="mt-10"><Comment/></div>
            </div>
            <div className="col-span-2"><SideMenuSection/></div>
        </div>

        
      </div>
    </MaxWidthWrapper>
  );
};

export default PostPage;
