import Image from "next/image"

const PopularCatCard =()=>{
    return(
            <div className="mt-7 ">
                <div className="text-2xl font-bold">Popular Categories</div>
                <div className=" grid lg:grid-cols-6 md:grid-cols-3 grid-cols-3 gap-3 mt-10 ">
                    <div className="p-3 flex  items-center gap-3 ">
                        <div className=" rounded-full h-10 w-10 relative">
                            <Image className="rounded-full" src="/fashion.jpg" alt="" fill />
                        </div>
                        <div className="">Fashiond</div>                    
                    </div>

                    <div className="p-3 flex  items-center gap-3 ">
                        <div className=" rounded-full h-10 w-10 relative">
                            <Image className="rounded-full" src="/food.jpg" alt="" fill />
                        </div>
                        <div className="">Food</div>                    
                    </div>

                    <div className="p-3 flex  items-center gap-3 ">
                        <div className=" rounded-full h-10 w-10 relative">
                            <Image className="rounded-full" src="/coding.jpg" alt="" fill />
                        </div>
                        <div className="">Coding</div>                    
                    </div>

                    <div className="p-3 flex  items-center gap-3 ">
                        <div className=" rounded-full h-10 w-10 relative">
                            <Image className="rounded-full" src="/nature.jpg" alt="" fill />
                        </div>
                        <div className="">Nature</div>                    
                    </div>

                    <div className="p-3 flex  items-center gap-3 ">
                        <div className=" rounded-full h-10 w-10 relative">
                            <Image className="rounded-full" src="/travel.jpg" alt="" fill />
                        </div>
                        <div className="">Travel</div>                    
                    </div>

                    <div className="p-3 flex  items-center gap-3 ">
                        <div className=" rounded-full h-10 w-10 relative">
                            <Image className="rounded-full" src="/culture.jpg" alt="" fill />
                        </div>
                        <div className="">Culture</div>                    
                    </div>
                </div>
                </div>
    )
}

export default PopularCatCard