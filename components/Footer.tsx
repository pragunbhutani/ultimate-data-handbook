export default function Footer() {
  return (
    <div className="text-sm text-gray-500">
      <div className="mx-auto max-w-8xl space-y-2 px-6 py-12 md:flex md:items-center md:justify-between lg:px-8 text-center">
        <div className="md:order-3">
          <p>
            Written and maintained with ❤️ by{" "}
            <a
              href="https://pragunbhutani.com"
              className="underline-offset-2 underline"
              target="_blank"
            >
              Pragun Bhutani
            </a>
          </p>
        </div>
        <div className="md:order-2">
          <p>All views expressed are my own.</p>
        </div>
        <div className="md:order-1 md:mt-0">
          <p className="leading-5">
            All rights reserved {new Date().getFullYear()} ©{" "}
            <a
              href="https://bottomlinedata.co"
              className="underline-offset-2 underline"
              target="_blank"
            >
              Bottom Line Data LLP
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
