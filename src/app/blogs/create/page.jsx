'use client'
import { Input } from '@/components/ui/input'
import Navbar from '@/components/ui/navbar'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useFormik } from 'formik'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
const Page = () => {
    const [image,setFile] = useState(null)
    const router  = useRouter()
    const [loading,setLoading] = useState(false)
    const formik = useFormik({
        initialValues:{
            title:'',
            blogText:''
        },
        onSubmit:async values=>{
          setLoading(true)
            const form = new FormData()
            form.append('title', values.title)
            form.append('blogText', values.blogText)
            form.append('image',image)
            let created = JSON.parse(localStorage.getItem('user')).name
      let date = new Date()
      const currentdate =date.getDate()
      const month = date.getMonth()
      let fulldate = `${currentdate} ${month}`
      form.append('date',fulldate)
            form.append('createdby',created)
            
               let response = await fetch("/api/blog", { 
                 method: "POST",
                 body: form,
               });
               
               let data = await response.json();
            setLoading(false)
            router.push('/blogs')
        }
    })

  return (
    <div>
        <Navbar/>
            <p className='text-5xl font-semibold text-center'>Create A Blog</p>
        <div className='p-5 flex justify-center mt-5'>
          {loading?<button className="loader__btn ">
  <div className="loader"></div>
  Creating Blog
</button>:
            <form onSubmit={formik.handleSubmit}>
            <div className='w-[600px] flex flex-col gap-3'>
            <Input placeholder='Title' id='title' name='title' onChange={formik.handleChange} value={formik.values.title}/>
            <Input type='file' onChange={(e)=>setFile(e.target.files[0])}/>
            <div className="grid w-full gap-2">
      <Textarea placeholder="Type or Paste Your Blog Here." rows='10'  id='blogText' name='blogText' onChange={formik.handleChange} value={formik.values.blogText}/>
      <Button>Publish Blog</Button>
    </div>
            </div>
            </form>
            }
        </div>
    </div>
  )
}

export default Page