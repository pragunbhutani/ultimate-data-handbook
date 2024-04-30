import Logo from "./components/logo";
import Footer from "./components/footer";

import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: Logo,
  // project: {
  //   link: "https://github.com/pragunbhutani/bottom-line-data-handbook",
  // },
  // chat: {
  //   link: "https://discord.com",
  // },
  docsRepositoryBase:
    "https://github.com/pragunbhutani/bottom-line-data-handbook",
  footer: {
    component: Footer,
  },
  editLink: {
    component: null,
  },
  feedback: {
    content: null,
  },
  primaryHue: {
    dark: 72,
    light: 181,
  },
  primarySaturation: {
    light: 61,
    dark: 70,
  },
  navigation: false,
  useNextSeoProps() {
    return {
      titleTemplate: "%s | Bottom Line Data Handbook",
      description: "A handbook for data-driven decision making",
      openGraph: {
        type: "website",
        url: "https://handbook.bottomlinedata.co",
        title: "Bottom Line Data Handbook",
        description:
          "A handbook that teaches you how to build data infrastructure and set up data teams.",
        images: [
          {
            url: "/public/img/og.png",
            width: 2939,
            height: 707,
            alt: "Bottom Line Data Handbook",
          },
        ],
      },
    };
  },
};

export default config;
