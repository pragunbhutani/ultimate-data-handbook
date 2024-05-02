import cn from "@lib/cn";

const contents = [
  {
    title: "Warehouse Design",
    icon: "✨",
    href: "/warehouse-design",
    description:
      "Design your data so it is easy for humans and LLMs to understand.",
    comingSoon: false,
  },
  {
    title: "Data Stacks",
    icon: "🛠️",
    href: "#",
    description:
      "Data stack recommendations for different use cases and teams of different sizes.",
    comingSoon: true,
  },
  {
    title: "dbt Best Practises",
    icon: "🔥",
    href: "#",
    description:
      "Get the best out of your analytics engineering stack with dbt.",
    comingSoon: true,
  },
  {
    title: "Managing Data Teams",
    icon: "👌",
    href: "#",
    description:
      "Product and Engineering Management to help you build the right things and build things right.",
    comingSoon: true,
  },
];

export default function ContentTiles() {
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
                    "border border-gray-200 dark:border-gray-800 p-4 rounded-md flex h-full",
                    content.comingSoon
                      ? "opacity-50 cursor-default"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800 hover:cursor-pointer"
                  )}
                >
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
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
