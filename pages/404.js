import Logo from "@components/Logo";

export default function Custom404() {
  return (
    <>
      <div className="h-screen w-full flex flex-col bg-gray-200 justify-center items-center relative">
        <div className="absolute top-4 left-5">
          <Logo />
        </div>
        <div className="text-center">
          <h1 className="text-2xl text-gray-800 font-medium">
            404 - Page not found
          </h1>
          <p className="text-gray-800 mt-6">
            The page you are looking for might have been removed or has moved to
            a new location.
          </p>
          <p className="text-gray-800 mt-6">
            <a href="/" className="text-blue-500 hover:underline">
              Go back to the homepage
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
