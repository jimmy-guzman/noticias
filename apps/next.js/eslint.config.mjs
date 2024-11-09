import jimmyDotCodes from "@jimmy.codes/eslint-config";
// @ts-expect-error missing types
import nextPlugin from "@next/eslint-plugin-next";

export default jimmyDotCodes({
  configs: [
    {
      files: ["**/layout.tsx", "**/page.tsx"],
      name: "react-refresh/next",
      rules: {
        "react-refresh/only-export-components": "off",
      },
    },
    {
      files: ["**/*.ts", "**/*.tsx"],
      name: "next",
      plugins: {
        "@next/next": nextPlugin,
      },
      rules: {
        ...nextPlugin.configs["core-web-vitals"].rules,
      },
    },
  ],
});
