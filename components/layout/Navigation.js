import React from 'react'
import Link from 'next/link'

export const Navigation = () => {
    return (
        <nav>
           <Link href="/">Home</Link>
           <Link href="/">Ranking</Link>
           <Link href="/">New Product</Link>
           <Link href="/">About</Link>
        </nav>
    )
}
