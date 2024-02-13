/* 
Next-Class-1 
    Routing
        app--->folder/File jis name k hoga us name k route ready hojayega
        or us me apne "page.js"(like index.js) k name ki file create krna hai 

    Link (import Link from 'next/link')
        like react-router-dom 
    
    fetch
        "Next" me 2 types ki rendering hai Server and Client
        But byDefault wo "Server-Side-Rending" krta hai(Nichy Example me dekhen)
        means k yhn Hum "useEffect" "useState"(Client-Side) properties ko use nhi kr sakty
        now Data-Fetch k liye ap "fetch" ko direct call kren body ko "async" kr k

*/

import React from 'react'
import Link from 'next/link'
/* 
import  { useEffect } from 'react'
//You're importing a component that needs useEffect. It only works in a Client Component but 
//none of its parents are marked with "use client", so they're Server Components by default.
*/

export default async function Dashboard() {
    const res = await fetch('https://dummyjson.com/products')
    const result = await res.json()
    console.log('result', result)//its data show on VS-code terminal due to ServerSideRendering
    return (
        <>

            <h1 className='text-5xl mt-4  text-center'>Next-Class 1</h1><br />
            <h1 className='text-3xl  text-center'>Hello Dashboard!</h1><br />
            <p className='text-center'>Here we html &quot; image&quot; tag</p><br />
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">


                <p className=" left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    <Link href={"/"}>Goto Home Page</Link>
                </p>
                <p className=" left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    <Link href={"/post"}>Goto Post Page class 2</Link>
                </p>

            </div>
            {result.products.map(item => {
                return <div key={item.id} className='m-10 text-3xl'>
                    <h3>{item.title}</h3>
                    <img
                        src={item.thumbnail}
                        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                        alt="Next.js Logo"
                        width={180}
                        height={37}
                        priority
                    />
                </div>
            })}
        </>
    )
}