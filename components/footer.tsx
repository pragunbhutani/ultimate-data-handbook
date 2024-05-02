export default function Footer() {
  return (
    <>
      <div className="py-6 text-center">
        <span className="text-gray-500">
          All rights reserved {new Date().getFullYear()} ©{" "}
          <a
            href="https://bottomlinedata.co"
            className="underline-offset-2 underline"
            target="_blank"
          >
            Bottom Line Data LLP
          </a>
          .
        </span>
      </div>
    </>
  );
}
