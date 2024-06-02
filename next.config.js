const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  standalone: true,
});

module.exports = withNextra({
  async redirects() {
    return [
      {
        source: "/data-warehousing/dbt-illustrated-exercise",
        destination: "/data-warehousing/data-modeling-example",
        permanent: false,
      },
    ];
  },
});
