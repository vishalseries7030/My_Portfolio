// eslint.config.mjs

import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";

export default [
  js.configs.recommended,
  nextPlugin.configs["core-web-vitals"],
  {
    rules: {
      // add custom overrides if needed
      "react/jsx-no-undef": "off",
      "no-unused-vars": "warn",
    },
  },
];
















// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import { FlatCompat } from "@eslint/eslintrc";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

// const eslintConfig = [...compat.extends("next/core-web-vitals")];

// export default eslintConfig;

