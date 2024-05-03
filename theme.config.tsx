import Footer from "@components/Footer";
import Logo from "@components/Logo";

import darkIcon from "@public/img/icon-dark.png";

import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: Logo,
  project: {
    link: "https://github.com/pragunbhutani/ultimate-data-handbook",
  },
  // chat: {
  //   link: "https://discord.com",
  // },
  docsRepositoryBase:
    "https://github.com/pragunbhutani/ultimate-data-handbook/blob/main",
  footer: {
    component: Footer,
  },
  // editLink: {
  //   component: null,
  // },
  // feedback: {
  //   content: null,
  // },
  primaryHue: {
    dark: 72,
    light: 181,
  },
  primarySaturation: {
    light: 35,
    dark: 70,
  },
  gitTimestamp: false,
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
          "A collection of design principles, strategies and frameworks we use to build data infrastructure and set up data teams.",
        images: [
          {
            url: darkIcon.src,
            width: 1200,
            height: 1200,
            alt: "Bottom Line Data Handbook",
            type: "image/png",
          },
        ],
      },
    };
  },
};

export default config;
