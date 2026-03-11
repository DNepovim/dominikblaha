/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  printWidth: 90,
  semi: false,
  singleQuote: true,
  plugins: ["prettier-plugin-astro", "@ianvs/prettier-plugin-sort-imports"],
  importOrder: [
    "^astro(:.*)?$",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@/.*$",
    "",
    "^[./]",
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
    {
      files: "*.mdx",
      options: {
        parser: "mdx",
        proseWrap: "always",
      },
    },
  ],
};

export default config;
