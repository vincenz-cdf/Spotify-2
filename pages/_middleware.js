import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
    //TOKEN initialisé si il existe
    const token = await getToken({ req, secret: process.env.JWT_SECRET });
    const trueurl = "http://localhost:3000";

    const { pathname } = req.nextUrl
    
    //Si token existe ou si déja sur auth alors accepte la req
    if (pathname.includes('/api/auth') || token) {
        return NextResponse.next();
    }

    //Renvoie sur login s'il n'ya pas de token
    if (!token && pathname !== '/login')
    {
        return NextResponse.redirect(trueurl + '/login');
    }
}