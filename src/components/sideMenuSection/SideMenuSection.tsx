import Image from "next/image";
const SideMenuSection=()=>{
    return(
        <div className="">
            <div className="flex flex-col gap-10">
        <div className="col-span-1 hidden md:flex flex-col gap-10">
            <div className="">
            <div className=" text-base">What's hot</div>
            <div className="text-2xl font-semibold">Most Popular</div>
            </div>

            <div className="flex flex-col gap-1">
                <div className="dark:bg-red-950 bg-red-400 py-2 px-3 w-max rounded-2xl text-sm">Travel</div>
                <div className="">Mollit enim cillum ex qui sunt </div>
                <div className="flex gap-1 items-center"><div className="font-semibold">User Name - </div><div className="text-sm flex items-center"> 10-10-2024</div></div>
            </div>

            <div className="flex flex-col gap-1">
                <div className="dark:bg-orange-900 bg-orange-400 py-2 px-3 w-max rounded-2xl text-sm">Culture</div>
                <div className="">Mollit enim cillum ex qui sunt </div>
                <div className="flex gap-1 items-center"><div className="font-semibold">User Name - </div><div className="text-sm flex items-center"> 10-10-2024</div></div>
            </div>

            <div className="flex flex-col gap-1">
                <div className="dark:bg-green-950 bg-green-400 py-2 px-3 w-max rounded-2xl text-sm">Food</div>
                <div className="">Mollit enim cillum ex qui sunt </div>
                <div className="flex gap-1 items-center"><div className="font-semibold">User Name - </div><div className="text-sm flex items-center"> 10-10-2024</div></div>
            </div>

            <div className="flex flex-col gap-1">
                <div className="dark:bg-pink-950 bg-pink-400 py-2 px-3 w-max rounded-2xl text-sm">Fashion</div>
                <div className="">Mollit enim cillum ex qui sunt </div>
                <div className="flex gap-1 items-center"><div className="font-semibold">User Name - </div><div className="text-sm flex items-center"> 10-10-2024</div></div>
            </div>

            
        </div>





        <div className="col-span-1 hidden md:flex flex-col gap-10">
            <div className="flex flex-col gap-10">
            <div className="">
            <div className="text-base">Discover by topic</div>
            <div className="text-2xl font-semibold">Categories</div>
            </div>

            <div className="grid grid-cols-3 gap-3">
                <div className=" col-span-1 dark:bg-blue-950 bg-blue-400 p-4 rounded-2xl flex justify-center">Nature</div>
                <div className=" col-span-1 dark:bg-pink-950 bg-pink-400 p-4 rounded-2xl flex justify-center">Fashion</div>
                <div className=" col-span-1 dark:bg-green-950 bg-green-400 p-4 rounded-2xl flex justify-center">Food</div>
                <div className=" col-span-1 dark:bg-red-950 bg-red-400 p-4 rounded-2xl flex justify-center">Travel</div>
                <div className=" col-span-1 dark:bg-orange-900 bg-orange-400 p-4 rounded-2xl flex justify-center">Culture</div>
                <div className=" col-span-1 dark:bg-purple-950 bg-purple-400 p-4 rounded-2xl flex justify-center">Coding</div>
            </div>
            </div>

            <div className="">
            <div className="text-base">Chosen by the editor</div>
            <div className="text-2xl font-semibold">Editor's Pick</div>
            </div>

            <div className="flex items-center gap-7">
            <div className="hidden lg:flex h-16 w-16 rounded-full relative "><Image className="rounded-full border border-spacing-3 border-gray-800" src="/nature.jpg"  alt="" fill/></div>
            <div className="flex flex-col gap-1">
                <div className="dark:bg-red-950 bg-red-400 py-2 px-3 w-max rounded-2xl text-sm">Travel</div>
                <div className="">1Mollit enim cillum ex qui sunt </div>
                <div className="flex gap-1 items-center"><div className="font-semibold">User Name - </div><div className="text-sm flex items-center"> 10-10-2024</div></div>
            </div>
            </div>

            <div className="flex items-center gap-7">
            <div className="hidden lg:flex h-16 w-16 rounded-full relative "><Image className="rounded-full border border-spacing-3 border-gray-800" src="/nature.jpg"  alt="" fill/></div>
            <div className="flex flex-col gap-1">
                <div className="dark:bg-orange-900 bg-orange-400 py-2 px-3 w-max rounded-2xl text-sm">Culture</div>
                <div className="">Mollit enim cillum ex qui sunt </div>
                <div className="flex gap-1 items-center"><div className="font-semibold">User Name - </div><div className="text-sm flex items-center"> 10-10-2024</div></div>
            </div>
            </div>

            <div className="flex items-center gap-7">
            <div className="hidden lg:flex h-16 w-16 rounded-full relative "><Image className="rounded-full border border-spacing-3 border-gray-800" src="/nature.jpg"  alt="" fill/></div>
            <div className="flex flex-col gap-1">
                <div className="dark:bg-green-950 bg-green-400 py-2 px-3 w-max rounded-2xl text-sm">Food</div>
                <div className="">Mollit enim cillum ex qui sunt </div>
                <div className="flex gap-1 items-center"><div className="font-semibold">User Name - </div><div className="text-sm flex items-center"> 10-10-2024</div></div>
            </div>
            </div>

            <div className="flex items-center gap-7">
            <div className="hidden lg:flex h-16 w-16 rounded-full relative "><Image className="rounded-full border border-spacing-3 border-gray-800" src="/nature.jpg"  alt="" fill/></div>
            <div className="flex flex-col gap-1">
                <div className="dark:bg-pink-950 bg-pink-400 py-2 px-3 w-max rounded-2xl text-sm">Fashion</div>
                <div className="">Mollit enim cillum ex qui sunt </div>
                <div className="flex gap-1 items-center"><div className="font-semibold">User Name - </div><div className="text-sm flex items-center"> 10-10-2024</div></div>
            </div>
            </div>

            
        </div>


        </div>
        </div>
    )
}

export default SideMenuSection