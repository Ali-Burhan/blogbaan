'use client'
import Image from 'next/image'
import { Button } from './button'
import { FaLaptopCode } from "react-icons/fa6";
import Link from 'next/link';
import { AiOutlinePlus } from "react-icons/ai";
import { FiEye } from "react-icons/fi";
import { UserAuth } from './usercontext';

const Main = () => {
    const {user} = UserAuth()    
  return (
    <div className='p-14 h-[calc(100vh-200px)] grid place-items-center'>
        <div>
            <p className='lg:text-7xl  md:text-6xl sm:text-4xl text-3xl sm:text-center md:text-left text-center font-semibold'>The secret to getting ahead is getting started.</p>
            <div className='flex sm:flex-col flex-col md:flex-row sm:mt-14 mt-14 md:mt-0'>
                {/* buttons div */}
                <div className='flex flex-col items-center flex-1 justify-center gap-8'>
                    {user &&
                    <Button className='flex gap-3 px-5'>
                    <AiOutlinePlus/>
                        <Link href={'/blogs/create'}>Create Blog</Link>
                    </Button>
                    }
                    <Button className='flex gap-3 px-5'>
                    <FiEye/>
                        <Link href={'/blogs'}>Read Blog</Link>
                    </Button>
                </div>
                {/* svg div */}
                <div className='flex justify-center flex-1'>
                    {/* <Image src={'/mainsvg.png'} width={400} height={400}/> */}
                    <FaLaptopCode className='h-72 w-72'/>
                    
      
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Main