import { NextResponse } from "next/server";
import { doc, getDoc } from "firebase/firestore";
import { db } from '@/firebase/config'
import type { ParamsProduct } from "@/app/admin/edit/[slug]/page";

export async function GET(_: any, { params }: ParamsProduct) {
    const { slug } = params
    const docRef = doc(db, 'products', slug)
    const docSnapshot = await getDoc(docRef)
    return NextResponse.json(docSnapshot.data())
}