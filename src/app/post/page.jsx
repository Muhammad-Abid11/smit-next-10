/* 
Next-Class-2

    **Next-Image        
        *ye Lazy loading k feature bhi dyta hai
        (means like in fb Post data jb tk nhi aye wo box show krta hai)        

        Alert-- agar ap "Next-Image" ko "fetch" kiye hua "data" sy "images" dogy too wo error dyga, 
       ----> Unhandled Runtime : Invalid src prop (https://cdn.dummyjson.com/product-images/1/thumbnail.jpg) on `next/image`, 
       ----> hostname "cdn.dummyjson.com" is not configured under images in your `next.config.js`

        isy remove krne k liye hamen "next.config.mjs" me jayen or usy update kren
--->    const nextConfig = {
--->        images: {
--->            domains: ['cdn.dummyjson.com'],
--->        },
--->    };
        See-Lazy-loading (network throttling 3G-slow) and --open-developer-tool(console in any browser) 
        Right-Click Refresh Button--> EmptyCache and Hard Reload
        
        ------By-Vercel Deployment about "Image"
        Warning: Using `<img>` could result in slower LCP and higher bandwidth. 
        Consider using `<Image />` from `next/image` to automatically optimize images.
         This may incur additional usage or cost from your provider. 
        https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element          
        

    **Fetch-Revalidation    
    Next me jb "Data" "fetch" hota hai too wo usy "cache" me save kr k rakhta hai or us page per agar koye
    new data bhi aye too wo tb bhi "Data" "cache" hi sy utha ta hai that why he is "Fast" but also a "DrawBack" 
    so we use "revalidate" :3600 <--ye itne seconds k pass "new Data" fetch kryga  
    https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating
*/


import Image from 'next/image'
import Link from 'next/link'

export default async function Post() {
    const data = await fetch('https://dummyjson.com/products')
    // const res = await fetch('https://dummyjson.com/products', { next: { revalidate: 3600 } })
    // const res = await fetch('https://dummyjson.com/products', { cache: 'no-store' })
    const result = await data.json()
    return (
        <>
            <h1 className='text-5xl mt-4  text-center'>Next-Class 2</h1><br />
            <h1 className='text-3xl  text-center'>Hello Post Page!</h1><br />
            <p className='text-center'>Here we <i>&quot; Next--Image &quot; </i>tag</p><br />
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <p className=" left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    <Link href={"/"}>Goto Home Page</Link>
                </p>
                <p className=" left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    <Link href={"/dashboard"}>Goto Dashboard Page class 1</Link>
                </p>

            </div>

            {result.products.map((data) => {
                return (
                    <div key={data.id}>
                        <h1>{data.title}</h1>
                        <Image
                            src={data.thumbnail}
                            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                            alt="Next.js Logo"
                            width={180}
                            height={37}
                            priority

                        />

                    </div>
                )
            })}
        </>
    )
}
