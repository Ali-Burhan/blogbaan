import { BiMessageAltDetail } from "react-icons/bi";
import Menutoggle from './menutoggle'
const Navbar = () => {
  return (
    <div className='h-20 px-10'>
        <div className='flex justify-between items-center h-full'>
            <div>
              <div className="flex gap-2 items-center">
              <BiMessageAltDetail className="h-10 w-10"/>
              <p className="text-lg font-semibold">BlogBaan</p>
              </div>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <p>User</p>
                <p>Image</p>
                <p><Menutoggle /></p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar