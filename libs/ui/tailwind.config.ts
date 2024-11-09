import type { Config } from "tailwindcss";

import noticias from "@noticias/tailwind-config";

const config = {
  content: ["./src/**/*.tsx"],
  presets: [noticias],
} satisfies Config;

export default config;
