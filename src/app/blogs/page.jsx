'use client'
import Navbar from "@/components/ui/navbar";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
const Page = () => {
const [blogs,setBlogs] = useState([])
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
]
  useEffect(()=>{
async function fetchBlogs() {
  let headersList = {
    "Accept": "*/*",
   }
   
   let response = await fetch("/api/blog", { 
     method: "GET",
     headers: headersList
   });
   
   let data = await response.json();
   console.log(data);
   setBlogs(data.allBlogs)
}
fetchBlogs()
  },[])


  return (
    <div>
      <Navbar />
      <div className="flex justify-center " >
        <div className="w-[800px] p-5">
          <p className="font-semibold my-5">Feed</p>
          {/* single blog */}
          {blogs.map((ele,ind)=>(
            <Link key={ind} href={`/blogs/${ele._id}`} className="p-5 border rounded-lg flex flex-col gap-3 my-3">
            {/* image + name Div*/}
            <div className="flex gap-3 items-center">
             <img width={50} height={50}  src={`data:image/jpeg;base64,${Buffer.from(ele.image.data).toString("base64")}`} alt="Service Image" className="rounded-full h-14 w-14" />
              <p className="font-bold">{ele.title.slice(0,30)}...</p>
              <p className="font-bold">{ele.date}</p>
            </div>
            {/* blog content div */}
            <div>
              {ele.blogText}
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
            ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
