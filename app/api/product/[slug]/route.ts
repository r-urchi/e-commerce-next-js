import { mockData } from "@/app/data/products";
import { NextResponse } from "next/server";
import type { Item } from "@/app/components/products/ProductCard";

const sleep = (timer: number) => {
    return new Promise((resolve: any) => setTimeout(resolve, timer))
}

export async function GET(_: any, {params}: any) {
    const {slug} = params

    const data = mockData?.find((product: Item) => product?.slug === slug)

    await sleep(1000)

    return NextResponse.json(data)
}