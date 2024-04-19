'use client'
import { Button } from "@/components/ui/button"
import { BiMessageAltDetail } from "react-icons/bi"
import { FaLaptopCode } from "react-icons/fa6"
import ModeToggle from "@/components/ui/menutoggle"
import { useFormik } from "formik"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useState } from "react"
import { UserAuth } from "@/components/ui/usercontext"
import { Loader2 } from "lucide-react"
 
const Page = () => {
  const {setUser} = UserAuth()
  const [loading,setLoading] = useState(false)
  const [error,setError]  = useState(false)
  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit:async values  =>{
      setError(false)
      setLoading(true)
      let headersList = {
        "Accept": "*/*",
        "Content-Type": "application/json"
       }
       
       let bodyContent = JSON.stringify({
           email:values.email,
           password:values.password
       });
       
       let response = await fetch("/api/login", { 
         method: "POST",
         body: bodyContent,
         headers: headersList
       });
       
       let data = await response.json();
       if(data.status == 200){
  setUser(data.token)
  localStorage.setItem('user',JSON.stringify(data.user))
         values.password = ""
         values.email = ""
        setLoading(false)
         setError(false)
         router.push('/')
        }
        else{
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
                        <div className="px-10 rounded-lg  py-14 border shadow w-[500px]">
                            {error && <p className="text-3xl font-semibold text-red-500">Error Occured</p>}
                            <p className="text-3xl font-semibold">Welcome</p>
                            <p className="mt-2">Login to your Account</p>
                                {/* input groups */}
                                <form onSubmit={formik.handleSubmit}>
                            <div className="mt-8 flex flex-col gap-8 relative">
                                <input type="text" className="border-b-2 w-[100%] outline-none p-2 rounded-lg" placeholder="Enter email " id="email" name="email" value={formik.values.email} onChange={formik.handleChange}/>
                                <input type="password" className="border-b-2 w-[100%] outline-none p-2 rounded-lg" placeholder="Enter Your Password" id="password" name="password" value={formik.values.password} onChange={formik.handleChange}/>
                                <p className="absolute -bottom-6 text-xs right-0">Forget Password?</p>
                            </div>
                            <div className="mt-36">
                              {loading?
                            <Button disabled className='w-full text-lg'>
      <Loader2 className="mr-2 h-6 w-6 animate-spin" />
      Please wait
    </Button>:
                                <Button type='submit' className='w-[100%] text-lg'>Login</Button>
                            }
                                <p className="text-center mt-1">Do not have an account? <Link href={'/signup'} className="font-bold">Sign up</Link></p>
                            </div>
                                </form>



                        </div>
                </div>
                <div className="flex-1 flex flex-col justify-center items-center gap-10 font-bold">
                    <p className="text-6xl">Let Blog it</p>
                    <FaLaptopCode className='h-72 w-72'/>
                </div>
        </div>
    </div>
  )
}

export default Page