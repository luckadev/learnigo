import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
      <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-white-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-purple-600 sm:text-5xl">Page not found</h1>
          <p className="mt-6 text-base leading-7 text-gray-200">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to='/'
              className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
            >
              Go back home
            </Link>
            <Link to='https://lucasdeveloper.netlify.app/' className="text-sm font-semibold text-white hover:text-purple-400">
              Contact support <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
