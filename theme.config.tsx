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
  navigation: false,
  useNextSeoProps() {
    return {
      titleTemplate: "%s | Ultimate Data Handbook",
      description:
        "A starter guide to help build data infrastructure and set up data teams.",
      openGraph: {
        type: "website",
        url: "https://handbook.bottomlinedata.co",
        title: "The Ultimate Data Handbook",
        description:
          "A starter guide to help build data infrastructure and set up data teams.",
        images: [
          {
            url: darkIcon.src,
            width: 1200,
            height: 1200,
            alt: "Ultimate Data Handbook",
            type: "image/png",
          },
        ],
      },
    };
  },
};

export default config;
