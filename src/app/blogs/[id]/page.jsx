'use client'
import Navbar from "@/components/ui/navbar";
import Image from "next/image"
import { BiLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { VscSend } from "react-icons/vsc";
import { IoShareSocial } from "react-icons/io5";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
const Page = () => {
    const router = useRouter();
  return (
    <div>
        <Navbar/>
           <div className="flex justify-center ">
        <div className="max-w-[800px] p-5">
          {/* single blog */}
          <div className="p-5 border rounded-lg flex flex-col gap-3">
            <p className="flex gap-1 items-center border rounded-lg p-1 justify-center cursor-pointer" onClick={()=>router.back()}>
                <FaLongArrowAltLeft/>
                Back
            </p>
            {/* image + name Div*/}
            <div className="flex gap-3 items-center">
              <Image width={50} height={50} src={"/Ali.jpg"} className=" rounded-full"/>
              <p>Ali Burhan</p>
            </div>
            {/* blog content div */}
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              voluptatem dolore molestiae nostrum, error aliquam quisquam sint
              quibusdam voluptatum sit soluta incidunt cupiditate, veniam eaque
              ipsum fugiat velit iure consequuntur est sapiente eligendi,
              nesciunt odio ex? Dolorem cumque doloremque rem sequi tempora
              minus similique laudantium. Inventore corrupti cumque at quibusdam
              sed, labore quos provident quia sequi beatae distinctio animi sunt
              vel veniam. Totam porro magni provident corrupti mollitia, alias
              modi!
            </div>
            {/* likes and comments div */}
            <div className="">
                <div className="flex gap-1">
              {/* like */}
              <div className="flex gap-1">
                <BiLike />
                <p className="text-xs">23</p>
              </div>
              {/* comment */}
              <div className="flex gap-1">
                <FaRegComment />
                <p className="text-xs">23</p>
              </div>
              {/* share */}
              <div>
                <IoShareSocial />
              </div>
              </div>
            {/* add comment input */}
            <div className="flex my-2 border rounded-full p-1">
            <input type="text" className="w-full outline-none placeholder:text-sm px-4 h-full dark:bg-transparent" placeholder="Add Your Comment"/>    
                <VscSend className="h-6 w-6 cursor-pointer"/>
            </div>
            </div>
            {/* pasted comments div */}
            <div className="flex gap-3 my-1">

                {/* image div */}
                <div>
                    <Image src={'/Ali.jpg'} height={40} width={40} className="rounded-full"/>
                </div>
                {/* name + date and comment div */}
                <div className="flex-1">
                    {/* name + dat */}
                        <div className="flex gap-4 items-center">
                            <p className="font-semibold">Ali Burhan</p>
                            <p className="text-sm tracking-tighter">3 July</p>
                        </div>
                        {/* comment */}
                        <div className="p-3 border mt-1 rounded">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit reiciendis consectetur praesentium est iste perspiciatis.
                            <p className="mt-1 text-sm font-semibold">Reply</p>
                        </div>

                </div>
            </div>
            <div className="flex gap-3 my-1">
                {/* image div */}
                <div>
                    <Image src={'/Ali.jpg'} height={40} width={40} className="rounded-full"/>
                </div>
                {/* name + date and comment div */}
                <div className="flex-1">
                    {/* name + dat */}
                        <div className="flex gap-4 items-center">
                            <p className="font-semibold">Ali Burhan</p>
                            <p className="text-sm tracking-tighter">3 July</p>
                        </div>
                        {/* comment */}
                        <div className="p-3 border mt-1 rounded">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit reiciendis consectetur praesentium est iste perspiciatis.
                            <p className="mt-1 text-sm font-semibold">Reply</p>
                        </div>

                </div>
            </div>
            <div className="flex gap-3 my-1">
                {/* image div */}
                <div>
                    <Image src={'/Ali.jpg'} height={40} width={40} className="rounded-full"/>
                </div>
                {/* name + date and comment div */}
                <div className="flex-1">
                    {/* name + dat */}
                        <div className="flex gap-4 items-center">
                            <p className="font-semibold">Ali Burhan</p>
                            <p className="text-sm tracking-tighter">3 July</p>
                        </div>
                        {/* comment */}
                        <div className="p-3 border mt-1 rounded">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit reiciendis consectetur praesentium est iste perspiciatis.
                            <p className="mt-1 text-sm font-semibold">Reply</p>
                        </div>

                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page