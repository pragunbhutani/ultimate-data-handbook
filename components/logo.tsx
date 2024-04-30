import { useConfig } from "nextra-theme-docs";

import Image from "next/image";

export default function Logo() {
  return (
    <>
      <span className="-ml-6">
        <div className="hidden dark:block">
          <Image
            src="/img/light.png"
            alt="Bottom Line Data Handbook"
            width={294}
            height={71}
          />
        </div>
        <div className="block dark:hidden">
          <Image
            src="/img/dark.png"
            alt="Bottom Line Data Handbook"
            width={294}
            height={71}
          />
        </div>
      </span>
    </>
  );
}
