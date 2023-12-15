import React from 'react'
import EditForm from '@/app/components/admin/EditForm'
import { items } from '@/mockData'

const EditPage = async ({ params }) => {

    const { slug } = params

    // const item = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/product/${slug}`, {
    //     cache: 'no-cache',
        
    // })
    //     .then(res => res.json())

    return (
        <div>
            <EditForm item={items[0]} />
        </div>
    )
}

export default EditPage