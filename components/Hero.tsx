import { useConfig } from "nextra-theme-docs";

import cn from "@lib/cn";

export default function Hero() {
  const { darkMode } = useConfig();

  return (
    <>
      <div className="mx-auto max-w-2xl py-16">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-5 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-300 dark:ring-gray-600">
            The{" "}
            <a
              href="https://bottomlinedata.co"
              className="font-semibold text-bld-forest-green dark:text-bld-lime-green"
            >
              <span className="absolute inset-0" aria-hidden="true" />
              Bottom Line Data Co.
            </a>{" "}
            presents
          </div>
        </div>
        <div className="text-center">
          <h1
            className={cn(
              "text-4xl font-semibold tracking-tight sm:text-6xl my-12",
              "dark:text-bld-lime-green",
              "text-bld-forest-green"
            )}
          >
            The <span className="font-serif italic font-light">Ultimate</span>{" "}
            <span className="whitespace-nowrap">Data Handbook</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-500 dark:text-gray-400">
            A collection of design principles, strategies and frameworks we use
            to build data infrastructure and set up data teams.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6"></div>
        </div>
      </div>
    </>
  );
}
