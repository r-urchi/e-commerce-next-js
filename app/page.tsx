import Footer from "./components/ui/Footer"
import Counter from "./components/ui/Counter"
import Image from "next/image"

// export const metadata = {
//   title: 'E-commerce',
//   description: 'App de Next JS'
// }

// export async function generateMetadata({params, searchParams}: any, parent: any) {
//   const id  = params.id 
//   const product = await fetch(`https://.../${id}`)
//   .then((res: any) => res.json())

//   return{
//     title: product.title,
//     description: product.description
//   }
// }

export default function Home() {
  return (
    <>
      <main className="container m-auto">
        <h1 className="text-4xl text-blue-600 text-center text-bold my-4">Electrodomésticos Capellari</h1>
        <hr />
        <p className="text-base text-center mt-4">Somos una empresa familiar que desde 1923 contamos con una larga tradición en la venta de electrodomésticos. <br />
          La pasión y el compromiso con la satisfacción del cliente y la excelencia en productos han sido nuestro sello distintivos a lo largo de los años.</p>
        <Counter />
        <Image
          alt="Image"
          src={'https://static.miraheze.org/greatcharacterswiki/thumb/0/09/Goku.png/450px-Goku.png'}
          width={200}
          height={200}
        />
      </main>
      <Footer />
    </>
  )
}
