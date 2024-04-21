'use client'
import { BiMessageAltDetail } from "react-icons/bi";
import Menutoggle from './menutoggle'
import { UserAuth } from "./usercontext";
import Link from "next/link";
import Image from "next/image";
import { DrawerDialogDemo } from "./profiledrawer";
import { useState } from "react";
const Navbar = () => {
  const [userProfile,setUserProfile] = useState(true)
  const {user} = UserAuth()
  return (
    <div className='h-20 px-10'>
        <div className='flex justify-between items-center h-full'>
            <div>
              <Link href={'/'} className="flex gap-2 items-center">
              <BiMessageAltDetail className="h-10 w-10"/>
              <p className="text-lg font-semibold">BlogBaan</p>
              </Link>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                {!user &&
                <>
                <Link href={'/login'} className="sm:text-xs text-xs md:text-lg">Login</Link> /
                <Link href={'/signup'} className="sm:text-xs text-xs md:text-lg" >Sign Up</Link>
                </>
                 }
                {user &&
                <>
                <p className="sm:text-xs text-xs md:text-lg">{JSON.parse(localStorage.getItem('user'))?.name}</p>
                <p className="cursor-pointer">
                    <DrawerDialogDemo/>
                </p>
                </>
                }
                <p><Menutoggle /></p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar