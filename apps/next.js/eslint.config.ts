import { defineConfig } from "@jimmy.codes/eslint-config";

export default defineConfig({
  overrides: [
    {
      files: ["**/*.tsx"],
      settings: { "import-x/ignore": [".css$"] },
    },
  ],
});
