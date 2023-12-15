import React from 'react'
import EditForm from '@/app/components/admin/EditForm'

export type ParamsProduct = {
    params: Slug
}

interface Slug {
    slug: string
}

const EditPage = async ({ params }: ParamsProduct) => {

    const { slug } = params

    const item = await fetch(`http://localhost:3000/api/product/${slug}`, {
        cache: 'no-cache',
        
    })
        .then(res => res.json())

    return (
        <div>
            <EditForm item={item} />
        </div>
    )
}

export default EditPage