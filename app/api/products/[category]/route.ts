import { NextResponse } from "next/server";
import { mockData } from "@/app/data/products";
import {
    //  revalidateTag, 
    revalidatePath
} from "next/cache";
import type { Item } from "@/app/components/products/ProductCard";

const sleep = (timer: number) => {
    return new Promise((resolve: any) => setTimeout(resolve, timer))
}

export async function GET(request: any, { params }: any) {

    const { category } = params

    const data = category === 'all' ? mockData : mockData?.filter((item: Item) => item?.type === category)

    await sleep(1000)

    // revalidateTag('products')
    revalidatePath('/products/[category]')

    return NextResponse.json(data)
}