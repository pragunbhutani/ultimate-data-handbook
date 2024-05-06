import cn from "@lib/cn";

const contents = [
  {
    title: "Getting Started",
    icon: "✨",
    href: "/getting-started",
    description:
      "How to build a data teams and infrastructure from the gtround up.",
    comingSoon: false,
  },
  {
    title: "Core Concepts",
    icon: "🧠",
    href: "/core-concepts",
    description:
      "Understand common terms used in data engineering and data science.",
    comingSoon: false,
  },
  {
    title: "Good Conventions",
    icon: "👌",
    href: "/good-conventions",
    description:
      "Design your data so it is easy for humans and LLMs to understand.",
    comingSoon: false,
  },
  {
    title: "Managing Data Teams",
    icon: "💼",
    href: "#",
    description:
      "Product and Engineering Management to help you build the right things and build things right.",
    comingSoon: true,
  },
];

export default function HeroContentTiles() {
  return (
    <>
      <div>
        {/* <h2 className="text-2xl w-full mb-6 font-serif dark:text-gray-300 text-gray-700 italic">
          Table of Contents
        </h2> */}
        <ul role="list" className="grid gap-4 grid-cols-1 xl:grid-cols-2">
          {contents.map((content) => (
            <li key={content.title}>
              <a href={content.href}>
                <div
                  className={cn(
                    "border border-gray-200 dark:border-gray-800 rounded-md",
                    content.comingSoon
                      ? "opacity-50 cursor-default"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800 hover:cursor-pointer"
                  )}
                >
                  <div className="p-4 h-full hidden xs:flex">
                    <div className="mr-4 text-2xl">{content.icon}</div>
                    <div className="relative w-full">
                      {content.comingSoon && (
                        <p className="absolute text-xs dark:text-gray-300 top-1 right-0">
                          (Coming Soon)
                        </p>
                      )}

                      <h3 className="text-lg font-bold dark:text-gray-300 text-gray-700">
                        {content.title}
                      </h3>

                      <p className="text-sm mt-1 dark:text-gray-400 text-gray-600">
                        {content.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex p-4 xs:hidden flex-col">
                    <div className="flex flex-row">
                      <div className="mr-2">{content.icon}</div>
                      <div className="font-bold">{content.title}</div>
                    </div>
                    <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      {content.description}
                    </div>
                    {content.comingSoon && (
                      <div className="text-xs text-right mt-2 dark:text-gray-300">
                        (Coming Soon)
                      </div>
                    )}
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
