import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"

const Comment=()=>{
    return(
        <div className="">
            <div className="text-2xl font-bold">Comments</div>
            <div className="grid grid-cols-7 gap-5 mt-5">
                <div className="col-span-6">
                <Textarea color=""/>
                </div>
                <div className=" flex justify-center items-center  col-span-1">
                    <div className="bg-green-900 p-5 rounded">Send</div>
                </div>
            </div>
            <div className="my-10 flex flex-col gap-7">
                <div className="flex  items-center gap-5">
                    <div className="h-10 w-10 relative rounded-full"><Image className="rounded-full" src="/nature.jpg " alt="" fill/></div>
                    <div className="">
                        <div className="text-lg font-semibold">John Doe</div>
                        <div className="text-sm ">20-10-2023</div>
                    </div>
                </div>
                <div className="">
                    <p>
                        Aute aliqua exercitation reprehenderit velit eu ad veniam cillum reprehenderit. Ea anim nisi aute aliquip ad consequat cupidatat incididunt quis commodo. Proident 
                    </p>
                </div>
            </div>

            <div className="my-10 flex flex-col gap-7">
                <div className="flex  items-center gap-5">
                    <div className="h-10 w-10 relative rounded-full "><Image className="rounded-full" src="/nature.jpg " alt="" fill/></div>
                    <div className="">
                        <div className="text-lg font-semibold">John Doe</div>
                        <div className="text-sm ">20-10-2023</div>
                    </div>
                </div>
                <div className="">
                    <p>
                        Aute aliqua exercitation reprehenderit velit eu ad veniam cillum reprehenderit. Ea anim nisi aute aliquip ad consequat cupidatat incididunt quis commodo. Proident 
                    </p>
                </div>
            </div>

            <div className="my-10 flex flex-col gap-7">
                <div className="flex  items-center gap-5">
                    <div className="h-10 w-10 relative rounded-full"><Image className="rounded-full" src="/nature.jpg " alt="" fill/></div>
                    <div className="">
                        <div className="text-lg font-semibold">John Doe</div>
                        <div className="text-sm ">20-10-2023</div>
                    </div>
                </div>
                <div className="">
                    <p>
                        Aute aliqua exercitation reprehenderit velit eu ad veniam cillum reprehenderit. Ea anim nisi aute aliquip ad consequat cupidatat incididunt quis commodo. Proident 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Comment