import { Button } from "@/components/ui/button"
import { BiMessageAltDetail } from "react-icons/bi"
import { FaLaptopCode } from "react-icons/fa6"
import ModeToggle from "@/components/ui/menutoggle"
const Page = () => {
  return (
    <div className="h-screen">
        <div className="flex gap-2  justify-between h-20 px-10 items-center ">
            <div className="flex gap-2 items-center">
              <BiMessageAltDetail className="h-10 w-10"/>
              <p className="text-lg font-semibold">BlogBaan</p>
            </div>
            <div>
                 <ModeToggle/>       
            </div>
              </div>
        <div className="h-[calc(100vh-5rem)]  flex items-center">
                <div className="flex-1 flex justify-center">
                        <div className="px-10 rounded-lg  py-14 border shadow w-[500px]">
                            <p className="text-3xl font-semibold">Welcome</p>
                            <p className="mt-2">Login to your Account</p>
                                {/* input groups */}
                            <div className="mt-8 flex flex-col gap-8 relative">
                                <input type="text" className="border-b-2 w-[100%] outline-none p-2 rounded-lg" placeholder="Enter email or phone number"/>
                                <input type="text" className="border-b-2 w-[100%] outline-none p-2 rounded-lg" placeholder="Enter email or phone number"/>
                                <p className="absolute -bottom-6 text-xs right-0">Forget Password?</p>
                            </div>
                            
                            <div className="mt-36">
                                <Button  className='w-[100%] text-lg'>Login</Button>
                                <p className="text-center mt-1">Do not have an account? <span className="font-bold">Sign up</span></p>
                            </div>



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