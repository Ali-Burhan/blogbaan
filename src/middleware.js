import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function middleware(request) {
    const token = cookies().get('blogbaan')
    if(token  && (request.url == 'http://localhost:3000/login' || request.url == 'http://localhost:3000/signup')){
      return NextResponse.redirect(new URL('/', request.url))
    }
    else if(!token && request.url == 'http://localhost:3000/blogs/create'){
  return NextResponse.redirect(new URL('/login', request.url))
}
}

export const config = {
    matcher: ['/login','/signup','/blogs/create']
}