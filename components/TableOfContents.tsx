"use client";

import { usePathname } from "next/navigation";

export default function TableOfContents({ contents }) {
  const pathname = usePathname();

  const contentList = Object.keys(contents).map((key) => ({
    title: contents[key],
    href: `${pathname}/${key}`,
  }));

  return (
    <>
      <div>
        <h2 className="text-2xl w-full mt-8 mb-4 font-serif dark:text-gray-300 text-gray-700 italic">
          Table of Contents
        </h2>
        <div>
          <ol className="font-serif list-decimal px-6 text-lg">
            {contentList.map((content) => (
              <li
                className="leading-8 hover:dark:text-bld-lime-green hover:text-bld-forest-green hover:underline"
                key={content.title}
              >
                <a href={content.href}>{content.title}</a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}
