import Navbar from "@/components/ui/navbar";
import Image from "next/image";
import Link from "next/link";
import { BiLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
const Page = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center " >
        <div className="max-w-[800px] p-5">
          <p className="font-semibold my-5">Feed</p>
          {/* single blog */}
          <Link href={'/blogs/1'} className="p-5 border rounded-lg flex flex-col gap-3 my-3">
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
          </Link>
          <div className="p-5 border rounded-lg flex flex-col gap-3 my-3">
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
          </div>
          <div className="p-5 border rounded-lg flex flex-col gap-3 my-3">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
