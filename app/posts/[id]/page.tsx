import React from 'react'

const getPostById = async (id: number) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    if (!response?.ok) {
        throw new Error('Fallo la obtención del dato')
    }

    return response?.json()
}

const PostDetail = async ({ params }: any) => {

    const { id } = params
    const post = await getPostById(id)

    return (
        <div className='container p-4 w-auto max-w-md'>
            <h2 className='text2-xl'>{post?.title}</h2>
            <hr />
            <p>{post?.body}</p>
        </div>
    )
}

export default PostDetail