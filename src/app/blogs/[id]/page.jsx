'use client'
import Navbar from "@/components/ui/navbar";
import Image from "next/image"
import { BiLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { VscSend } from "react-icons/vsc";
import { IoShareSocial } from "react-icons/io5";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Skeleton from '@mui/material/Skeleton';




const Page = ({params}) => {
    const [blog,setBlog] = useState({})
    const [loading,setLoading] = useState(false)
    const router = useRouter();  
    useEffect(()=>{
      async function fecthData(){
        setLoading(true)
        let headersList = {
          "Accept": "*/*",
         }
         
         let response = await fetch(`/api/blog/${params.id}`, { 
           method: "GET",
           headers: headersList
         });
         
         let data = await response.json();
         setBlog(data.blog)
         setLoading(false)
      }
      fecthData()
    },[])
    const LikeButton = ({ blogId, user }) => {
      let isLiked = false
      blogId?.map((id, i) =>{
        if(id.userid == user){
          isLiked = true
        }
      })
      return (
        <BiLike className={isLiked ? 'text-blue-400' : ''} /> // Ternary operator for conditional class
      );
    };
    function loadSkelton() {
      return (<>
       <div className="w-[700px] border rounded-lg p-5 m-auto">
      <div className="flex gap-5">
    <Skeleton variant="circular" width={70} height={70}/>
    <div className="flex-1">
    <Skeleton width={'100%'} height={30}/>
    <Skeleton width={'70%'} height={30}/>
    </div>
      </div>
    <Skeleton  width={"100%"} height={400}/>
    </div>
    </>)
    }
  
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
            {loading && loadSkelton()}
            {/* image + name Div*/}
            { !loading &&
        <div>
            <div className="flex gap-3 items-center">
             { blog.image && <img width={50} height={50}  src={`data:image/jpeg;base64,${Buffer.from(blog.image.data).toString("base64")}`} alt="Service Image" className="rounded-full h-14 w-14" />}
              <p>{blog && blog.title}</p>
            </div>
            {/* blog content div */}
            <div>
              {blog.blogText}
            </div>
            {/* likes and comments div */}
            <div className="mt-1">
                <div className="flex gap-1">
              {/* like */}
              <div className="flex gap-1">
              <LikeButton blogId={blog.likes} user={JSON.parse(localStorage.getItem('user'))?._id || ""} />
                <p className="text-xs">{blog.likes?.length}</p>
              </div>
              {/* comment */}
              <div className="flex gap-1">

                <FaRegComment />
                <p className="text-xs">{blog.comments?.length}</p>
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
                    <Image src={'/Ali.jpg'} height={40} width={40} className="rounded-full" alt="Image"/>
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
                    <Image src={'/Ali.jpg'} height={40} width={40} className="rounded-full" alt="Image"/>
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
                    <Image src={'/Ali.jpg'} height={40} width={40} className="rounded-full" alt="Image"/>
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
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page