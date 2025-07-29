import Link from "next/link";

export default function NotFound() {
    return (
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
                <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl bg-gradient-to-r from-red-500 to-pink-500 text-transparent bg-clip-text">404</h1>
                <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl">Something is missing.</p>
                <p className="mb-4 text-lg text-gray-500 dark:text-gray-400">Sorry, we cant find that page. You will find lots to explore on the home page. </p>
                <Link
                    href="/"
                    className="inline-flex font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4 transition-all duration-300 transform 
                            bg-gradient-to-r from-red-500 to-pink-500 text-white 
                            hover:scale-105 hover:bg-transparent hover:text-transparent 
                            hover:bg-clip-text
                            hover:border-2 hover:border-transparent 
                            hover:border-gradient-to-r hover:from-red-500 hover:to-pink-500"
                >
                    ᐊ Back to Homepage
                </Link>
            </div>
        </div>
    );
}
