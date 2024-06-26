'use client'
import { createContext, useContext, useEffect, useState } from "react";

const Usercontextstate = createContext()

const UserContext = ({children}) => {
    const [user,setUser] = useState('')
    useEffect(()=>{
      const cookieValue = document.cookie
  .split(';')
  .find(cookie => cookie.startsWith('blogbaan'));
      setUser(cookieValue)
    },[setUser])
  return (
    <Usercontextstate.Provider value={{user,setUser}}>
        {children}
    </Usercontextstate.Provider>
  )
}

export const UserAuth = ()=> useContext(Usercontextstate)
export default UserContext