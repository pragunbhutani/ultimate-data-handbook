"use client";

import { usePathname } from "next/navigation";
import { useConfig } from "nextra-theme-docs";

import {
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  XIcon,
  RedditShareButton,
  RedditIcon,
} from "react-share";

export default function EditLinkWithShareButtons() {
  const pathname = usePathname();
  const { docsRepositoryBase, darkMode, themeSwitch } = useConfig();

  console.log(darkMode);

  const iconSettings = {
    size: 32,
    round: false,
    borderRadius: 8,
    bgStyle: { fill: "transparent" },
    iconFillColor: "#9ca3af",
  };

  const iconContainerClasses =
    "h-[34px] border border-gray-300 dark:border-gray-500 rounded-md overflow-hidden hover:border-gray-500 dark:hover:border-gray-300";

  const pageUrl = `https://handbook.pragunbhutani.com${pathname}`;

  return (
    <>
      <div className="text-xs text-gray-500 dark:text-gray-400 font-medium w-full">
        <a href={`${docsRepositoryBase}${pathname}.mdx`}>
          <p className="hover:text-gray-800 dark:hover:text-gray-200">
            Edit this page →
          </p>
        </a>
        <div className="mt-4">
          <p>Share this page</p>
          <div className="mt-2 flex flex-row gap-x-1">
            <span className={iconContainerClasses}>
              <LinkedinShareButton url={pageUrl}>
                <LinkedinIcon {...iconSettings} />
              </LinkedinShareButton>
            </span>
            <span className={iconContainerClasses}>
              <TwitterShareButton url={pageUrl}>
                <XIcon {...iconSettings} />
              </TwitterShareButton>
            </span>
            <span className={iconContainerClasses}>
              <RedditShareButton url={pageUrl}>
                <RedditIcon {...iconSettings} />
              </RedditShareButton>
            </span>
            {/* <span>
            <EmailShareButton />
          </span> */}
          </div>
        </div>
      </div>
    </>
  );
}
