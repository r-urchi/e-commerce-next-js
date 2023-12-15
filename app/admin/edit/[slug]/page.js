import React from 'react'
import EditForm from '@/app/components/admin/EditForm'

const EditPage = async ({ params }) => {

    const { slug } = params

    const item = await fetch(`http://e-commerce-next-js-green.vercel.app/api/product/${slug}`, {
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