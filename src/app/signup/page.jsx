'use client'
import { Button } from "@/components/ui/button"
import { BiMessageAltDetail } from "react-icons/bi"
import { FaLaptopCode } from "react-icons/fa6"
import ModeToggle from "@/components/ui/menutoggle"
import Link from "next/link"
import { FcGoogle } from "react-icons/fc";
import { useFormik } from "formik"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Loader2 } from "lucide-react"
const Page = () => {
  const [error,setError] = useState(false)
  const router = useRouter()
  const [loading,setLoading] = useState(false)
  const formik = useFormik({
    initialValues:{
      name:"",
      email:"",
      password:"",
    },
    onSubmit: async values => {
      setError(false)
      setLoading(true)
      let headersList = {
        "Accept": "*/*",
        "Content-Type": "application/json"
       }
       
       let bodyContent = JSON.stringify({
           email:values.email,
           password:values.password,
           name:values.name
       });
       
       let response = await fetch("/api/register", { 
         method: "POST",
         body: bodyContent,
         headers: headersList
       });
       
       let data = await response.json();
       console.log(data);
       if(data.status == 200){
         setError(false)
         setLoading(false)
          router.push('/login')
       }else{
        setLoading(false)
        setError(true)
       }
    }
  })
  return (
    <div className="h-screen">
        <div className="flex gap-2  justify-between h-20 px-10 items-center ">
            <Link href={'/'} className="flex gap-2 items-center">
              <BiMessageAltDetail className="h-10 w-10"/>
              <p className="text-lg font-semibold">BlogBaan</p>
            </Link>
            <div>
                 <ModeToggle/>       
            </div>
              </div>
        <div className="h-[calc(100vh-5rem)]  flex items-center">
                <div className="flex-1 flex justify-center">
                  <form onSubmit={formik.handleSubmit}>
                        <div className="px-10 rounded-lg  py-14 border shadow w-[500px]">
                            <p className="text-3xl font-semibold">Create An Account</p>
                            <p className="mt-2">Let blog it with BlogBaan</p>
                                {/* input groups */}
                            <div className="mt-8 flex flex-col gap-8 relative">
                                <input type="text" className="border-b-2 w-[100%] outline-none p-2 rounded-lg" placeholder="Name" id="name" name="name" value={formik.values.name} onChange={formik.handleChange}/>
                                <input type="text" className="border-b-2 w-[100%] outline-none p-2 rounded-lg" placeholder="Email" id="email" name="email" value={formik.values.email} onChange={formik.handleChange}/>
                                <input type="password" className="border-b-2 w-[100%] outline-none p-2 rounded-lg" placeholder="Password" id="password" name="password" value={formik.values.password} onChange={formik.handleChange}/>
                                <p className="absolute -bottom-6 text-xs right-0">Forget Password?</p>
                            </div>
                            
                            <div className="mt-28 flex flex-col gap-2">
                            {loading?
                            <Button disabled className='w-full text-lg'>
      <Loader2 className="mr-2 h-6 w-6 animate-spin" />
      Please wait
    </Button>:
                                <Button type="submit"  className='w-[100%] text-lg h-10' variant='secondary'>Create Account</Button>
                            }
                                <Link href={'/'}  className='w-[100%] text-lg flex gap-2 h-12 items-center justify-center rounded-lg bg-secondary'  variant='secondary'><FcGoogle/> Sign Up With Google</Link>
                                <p className="text-center mt-1">Already have an account? <Link href={'/login'} className="font-bold">Login</Link></p>
                            </div>
                        </div>
                  </form>
                </div>
                <div className="flex-1 md:flex flex-col justify-center items-center gap-10 font-bold hidden">
                    <p className="text-6xl">Let Blog it</p>
                    <FaLaptopCode className='h-72 w-72'/>
                </div>
        </div>
    </div>
  )
}

export default Page