export default function Footer() {
  return (
    <>
      <div className="py-6 text-center">
        <span className="text-gray-300">
          All rights reserved {new Date().getFullYear()} ©{" "}
          <a href="https://bottomlinedata.co" target="_blank">
            Bottom Line Data LLP
          </a>
          .
        </span>
      </div>
    </>
  );
}
