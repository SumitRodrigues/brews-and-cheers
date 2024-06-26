"use client"
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from 'next/link'

const Navbar = () => {
  const { data: session } = useSession()
  if (session) {
    return <>
      Signed in as {session.user.email} <br />
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }
  return (
    <nav className='bg-blue-950 text-white flex justify-between px-4 items-center h-16'>
      <div className='logo font-bold text-lg flex items-center justify-center'>
        <img src='beverage.gif' alt='' width={44} />
        <span>Brews & Cheers</span>
      </div>
      {/* <ul className='flex justify-between gap-4'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Sign Up</li>
            <li>Login</li>
        </ul> */}
      <div>
        {session && <Link href={"/dashboard"}><button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl
        focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg 
        text-sm px-5 py-2.5 text-center me-2 mb-2" >Dashboard</button></Link>}
        
        {session && <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl
        focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg 
        text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => { signOut() }}>Logout</button>}

        {!session && <Link href={"/login"}>
        <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl
        focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg 
        text-sm px-5 py-2.5 text-center me-2 mb-2" >Login</button></Link>}
      </div>
    </nav>
  )
}

export default Navbar