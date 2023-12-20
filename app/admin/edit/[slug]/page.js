import React from 'react';
import EditForm from '@/app/components/admin/EditForm';

const EditPage = async ({ params }) => {
    const { slug } = params;

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/product/${slug}`, {
            cache: 'no-cache',
        });

        if (!response.ok) {
            throw new Error(`Error al obtener los datos. Código de estado: ${response.status}`);
        }

        const item = await response.json();

        return (
            <div>
                <EditForm item={item} />
            </div>
        );
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        return <div>Error al cargar los datos</div>;
    }
};

export default EditPage;