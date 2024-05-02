import { useConfig } from "nextra-theme-docs";

import Image from "next/image";

export default function Logo() {
  return (
    <>
      <span className="-ml-2 mt-1.5">
        <span className="hidden dark:inline-block">
          <Image
            // src="/img/light.png"
            src="/img/icon-light.png"
            alt="Bottom Line Data Handbook"
            className="rounded overflow-hidden"
            // width={294}
            // height={71}
            width={40}
            height={40}
          />
        </span>
        <span className="inline-block dark:hidden">
          <Image
            // src="/img/dark.png"
            src="/img/icon-dark.png"
            alt="Bottom Line Data Handbook"
            className="rounded overflow-hidden"
            // width={294}
            // height={71}
            width={40}
            height={40}
          />
        </span>
        <span className="text-xl ml-2.5 align-top inline-block mt-1.5 text-bld-forest-green dark:text-gray-300 font-semibold">
          The <span className="font-serif italic font-light">Ultimate</span>{" "}
          Data Handbook
        </span>
      </span>
    </>
  );
}
