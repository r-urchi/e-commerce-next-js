import React from 'react'
import Link from 'next/link'

const getPosts = async () => {
    const response: any = await fetch('https://jsonplaceholder.typicode.com/posts',
        {
            cache: 'no-store',
            next: {
                revalidate: 0
            }
        }
    )

    if (!response?.ok) {
        throw new Error('Fallo la obtención de datos')
    }

    return response?.json()
}

const Posts = async () => {

    const posts = await getPosts()

    return (
        <div className='container m-auto mt-6'>
            <h1>Posts</h1>
            <hr />
            <ul>
                {
                    posts?.map((post: any) => (
                        <Link href={`posts/${post?.id}`} key={post?.id}>
                            <li key={post?.id} className='my-4 list-disc'>
                                {post?.title}
                            </li>
                        </Link>
                    ))
                }
            </ul>
        </div>
    )
}

export default Posts