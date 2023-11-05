export default function ContactLayout({ children, }: { children: React.ReactNode }) {

    return (
        <>
            {children}
            <footer className="bg-gray-200 w-full">
                <div className="container m-auto py-4 flex items-center gap-4">
                    <h4 className="text-2xl font-bold">Siguenos en nuestras redes</h4>
                    <a href="#">Instagram</a>
                    <a href="#">Linkedin</a>
                    <a href="#">Facebook</a>
                </div>
            </footer>
        </>
    )
}