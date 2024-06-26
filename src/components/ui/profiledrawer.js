import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import Link from "next/link"

export function DrawerDialogDemo() {
  const [open, setOpen] = React.useState(false)
  const isDesktop = React.useState(true)

  function deleteCookie(cookieName) {
    document.cookie = cookieName + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/';
    localStorage.removeItem('user')
    window.location.reload()
  }

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          {/* <Image src={'/Ali.jpg'} width={40} height={40} className="rounded-full" alt="image"/> */}
          <img width={40} height={40}  src={`data:image/jpeg;base64,${Buffer.from(JSON.parse(localStorage.getItem('user')).profile?.data).toString("base64")}`} alt="Service Image" className="rounded-full h-14 w-14" />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogDescription>
            </DialogDescription>
          </DialogHeader>
          <Link href={'/profile'}><Button className="w-full" variant='secondary'> Profile</Button></Link>
          <Button onClick={()=>deleteCookie('blogbaan')}>Logout</Button>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
    </Drawer>
  )
}

