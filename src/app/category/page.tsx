import MaxWidthWrapper from "@/components/helpComponents/MaxWidhtWrapper";
import Pagination from "@/components/pagination/Pagination";
import SideMenuSection from "@/components/sideMenuSection/SideMenuSection";
import Image from "next/image";
const CategoryPage=()=>{
    return(
        <MaxWidthWrapper>
            <div className="mt-10">
                <div className="text-3xl font-bold">Fashion Posts</div>
                <div className="grid grid-cols-3 mt-10 gap-5">
        <div className="col-span-3 md:col-span-2 flex flex-col gap-20 md:gap-10">
          <div className=" grid grid-cols-7 gap-5">
            <div className="h-full md:col-span-3 hidden md:block relative">
              <Image src="/nature.jpg" alt="" fill />
            </div>
            <div className="col-span-7 md:col-span-3  flex flex-col md:h-64 md:justify-center gap-3">
              <div className="text-sm flex gap-1">
                20-01-2024 -{" "}
                <div className="text-primary font-medium"> NATURE</div>
              </div>
              <div className="text-2xl">
                Commodo velit laborum elit exce asdasdaddad{" "}
              </div>
              <div className="text-sm py-4">
                Consequat dolor exercitation occaecat do cupidatat tempor
                aliquip nostrud.
              </div>
              <div className="">Read More</div>
            </div>
          </div>

          <div className=" grid grid-cols-7 gap-5">
            <div className="h-full md:col-span-3 hidden md:block relative">
              <Image src="/nature.jpg" alt="" fill />
            </div>
            <div className="col-span-7 md:col-span-3  flex flex-col md:h-64 md:justify-center gap-3">
              <div className="text-sm flex gap-1">
                20-01-2024 -{" "}
                <div className="text-primary font-medium"> NATURE</div>
              </div>
              <div className="text-2xl">
                Commodo velit laborum elit exce asdasdaddad{" "}
              </div>
              <div className="text-sm py-4">
                Consequat dolor exercitation occaecat do cupidatat tempor
                aliquip nostrud.
              </div>
              <div className="">Read More</div>
            </div>
          </div>

          <div className=" grid grid-cols-7 gap-5">
            <div className="h-full md:col-span-3 hidden md:block relative">
              <Image src="/nature.jpg" alt="" fill />
            </div>
            <div className="col-span-7 md:col-span-3  flex flex-col md:h-64 md:justify-center gap-3">
              <div className="text-sm flex gap-1">
                20-01-2024 -{" "}
                <div className="text-primary font-medium"> NATURE</div>
              </div>
              <div className="text-2xl">
                Commodo velit laborum elit exce asdasdaddad{" "}
              </div>
              <div className="text-sm py-4">
                Consequat dolor exercitation occaecat do cupidatat tempor
                aliquip nostrud.
              </div>
              <div className="">Read More</div>
            </div>
          </div>

          <div className=" grid grid-cols-7 gap-5">
            <div className="h-full md:col-span-3 hidden md:block relative">
              <Image src="/nature.jpg" alt="" fill />
            </div>
            <div className="col-span-7 md:col-span-3  flex flex-col md:h-64 md:justify-center gap-3">
              <div className="text-sm flex gap-1">
                20-01-2024 -{" "}
                <div className="text-primary font-medium"> NATURE</div>
              </div>
              <div className="text-2xl">
                Commodo velit laborum elit exce asdasdaddad{" "}
              </div>
              <div className="text-sm py-4">
                Consequat dolor exercitation occaecat do cupidatat tempor
                aliquip nostrud.
              </div>
              <div className="">Read More</div>
            </div>
          </div>

          

          <div className=" grid grid-cols-7 gap-5">
            <div className="h-full md:col-span-3 hidden md:block relative">
              <Image src="/nature.jpg" alt="" fill />
            </div>
            <div className="col-span-7 md:col-span-3  flex flex-col md:h-64 md:justify-center gap-3">
              <div className="text-sm flex gap-1">
                20-01-2024 -{" "}
                <div className="text-primary font-medium"> NATURE</div>
              </div>
              <div className="text-2xl">
                Commodo velit laborum elit exce asdasdaddad{" "}
              </div>
              <div className="text-sm py-4">
                Consequat dolor exercitation occaecat do cupidatat tempor
                aliquip nostrud.
              </div>
              <div className="">Read More</div>
            </div>
          </div>

          <Pagination/>
        </div>
        <SideMenuSection/>
      </div>
            </div>
        </MaxWidthWrapper>
    )
}

export default CategoryPage