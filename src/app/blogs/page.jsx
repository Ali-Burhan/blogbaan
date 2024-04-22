'use client'
import Navbar from "@/components/ui/navbar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BiLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import Skeleton from '@mui/material/Skeleton';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";

  
const Page = () => {
const [like,setlike] = useState(false)
const router = useRouter();
const [blogs,setBlogs] = useState([])
const [loding,setLoading] = useState(false)
const { toast } = useToast()

const likeBlog = async (id) => {

  const user = JSON.parse(localStorage.getItem('user'))?._id? true:false
  if(user){
    let headersList = {
      "Accept": "*/*",
    "Content-Type": "application/json"
   }
   
   let bodyContent = JSON.stringify({
       userid:JSON.parse(localStorage.getItem('user'))._id
   });
   
   let response = await fetch(`/api/blog/${id}`, { 
     method: "POST",
     body: bodyContent,
     headers: headersList
   });
   
   let data = await response.json();
   console.log(data);
   if(data.status != 200){
    toast({
      title: "You Have Already Liked The Post",
    })
   }else{
     setlike(!like)
    }
  }else{
    router.push('/login')
  }
  }

  useEffect(()=>{
async function fetchBlogs() {
  setLoading(true)
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
   setLoading(false)
}
fetchBlogs()
  },[])
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
      },[like])

  const LikeButton = ({ blogId, user }) => {
    let isLiked = false
    blogId.map((id, i) =>{
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
     <div className="md:w-[800px] shadow-md sm:w-[300px] w-[300px] border rounded-lg p-5 m-auto">
    <div className="flex gap-5">
  <Skeleton variant="circular" width={50} height={50}/>
  <div className="flex-1">
  <Skeleton width={'100%'}/>
  <Skeleton width={'70%'}/>
  </div>
    </div>
  <Skeleton  width={"100%"} height={200}/>
  </div>
     <div className="md:w-[800px] sm:w-[300px] shadow-md w-[300px] border rounded-lg p-5 m-auto my-3">
    <div className="flex gap-5">
  <Skeleton variant="circular" width={50} height={50}/>
  <div className="flex-1">
  <Skeleton width={'100%'}/>
  <Skeleton width={'70%'}/>
  </div>
    </div>
  <Skeleton  width={"100%"} height={200}/>
  </div>
     <div className="md:w-[800px] sm:w-[300px] w-[300px] shadow-md border rounded-lg p-5 m-auto">
    <div className="flex gap-5">
  <Skeleton variant="circular" width={50} height={50}/>
  <div className="flex-1">
  <Skeleton width={'100%'}/>
  <Skeleton width={'70%'}/>
  </div>
    </div>
  <Skeleton  width={"100%"} height={200}/>
  </div>
  </>)
  }

  return (

    <div>
      <Navbar />
     
      <div className="flex justify-center " >
        <div className="w-[800px] p-5">
          <p className="font-semibold my-5">Feed</p>
          
    
          {/* single blog */}
          {loding && loadSkelton()}
          {blogs.map((ele,ind)=>(
            <div key={ind}  className="p-5 border rounded-lg flex flex-col gap-3 my-3 shadow-lg neuadd">
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
              <div className="flex gap-1 cursor-pointer" onClick={()=>likeBlog(ele._id)}>
                
              <LikeButton blogId={ele.likes} user={JSON.parse(localStorage.getItem('user'))?._id || ""} />
                
                <p className="text-xs">{ele.likes?.length}</p>
              </div>
              {/* comment */}
              <Link href={`/blogs/${ele._id}`} className="flex gap-1">
                <FaRegComment />
                <p className="text-xs">{ele.comments?.length}</p>
              </Link>
              {/* share */}
              <div>
                <IoShareSocial />
              </div>
            </div>
          </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
