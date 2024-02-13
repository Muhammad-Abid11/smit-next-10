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

export default async function Dashboard() {
    const res = await fetch('https://dummyjson.com/products')
    const result = await res.json()
    console.log('result', result)//its data show on VS-code terminal
    return (
        <>

            <h1 className='text-5xl mt-4  text-center'>Next-Class 1</h1><br />
            <h1 className='text-3xl  text-center'>Hello Dashboard!</h1><br />
            <p className='text-center'>Here we html "image" tag</p><br />

            <Link href={"/"}>Goto Home Page</Link>
            {result.products.map(item => {
                return <div key={item.id} className='m-10 text-3xl'>
                    <h3>{item.title}</h3>
                    <img width="100" height="100" src={item.thumbnail} />
                </div>
            })}
        </>
    )
}