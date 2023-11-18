import { NextResponse } from "next/server";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '@/firebase/config'

export async function GET(request: any, { params }: any) {

    const { category } = params
    const productsRef = collection(db, 'products')
    const q = category === 'all' ? productsRef : query(productsRef, where('type', '==', category))
    console.log('q ===>', q)
    const querySnapshot = await getDocs(q)
    const docs = querySnapshot?.docs?.map((doc: any) => doc.data())
    return NextResponse.json(docs)
}