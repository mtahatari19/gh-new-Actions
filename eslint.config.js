// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tsparser,
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: { "@typescript-eslint": tseslint },
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-console": "off",
    },
    ignores: ["dist/", "build/", "node_modules/"],
  },

  // 👇 این بخش را اضافه کن:
  {
    files: ["**/*.{test,spec}.{js,jsx,ts,tsx}"],
    languageOptions: {
      // برای Vitest:
      globals: { ...globals.vitest },
    },
  },
];
