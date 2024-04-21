'use client'
import Navbar from "@/components/ui/navbar"
import { useEffect, useState } from "react"

const Page = () => {
  const [blog,setBlogs] = useState([])
  const [count,setCount] = useState(0)
  const [loading,setLoading] = useState(false)
  const [image,setImage] = useState('')
  const [name,setName] = useState('')
  useEffect(() => {
    setName(JSON.parse(localStorage.getItem('user'))?.name)
    setImage(JSON.parse(localStorage.getItem('user'))?.profile.data)
    async function fetchBlogs() {
      setLoading(true)
      let headersList = {
        "Accept": "*/*",
      };

      let response = await fetch("/api/blog", {
        method: "GET",
        headers: headersList,
      });

      let data = await response.json();
      console.log(data);
      setBlogs(data.allBlogs);
      setLoading(false)
    }
    
    fetchBlogs();
  }, []);
  
  useEffect(() => {
    const filteredBlogs = blog.filter(
      (ele) => ele.createdby === JSON.parse(localStorage.getItem("user")).name
    );
    setCount(filteredBlogs.length);
  }, [blog]);

  return (
    <div>
      <Navbar/>
    <div className='grid h-[calc(100vh-5rem)] place-items-center'>
      <div className="flex flex-col justify-center items-center gap-2">
          <img width={100} height={100}  src={`data:image/jpeg;base64,${Buffer.from(image).toString("base64")}`} alt="Service Image" className="rounded-full h-40 w-40" />
          <p className="text-5xl font-bold">{name}</p>
          <hr className="w-screen"/>
            {loading? <p className="mt-2 text-4xl font-semibold">Counting Blogs...</p>:<p className="mt-2 text-4xl font-semibold">My Blogs {count}</p>}  
          
      </div>
    </div>
    </div>
  )
}

export default Page