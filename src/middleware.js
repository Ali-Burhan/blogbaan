import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function middleware(request) {
    const token = cookies().get('blogbaan')    
    if(token){
  return NextResponse.redirect(new URL('/', request.url))
}
}

export const config = {
    matcher: ['/login','/signup']
}