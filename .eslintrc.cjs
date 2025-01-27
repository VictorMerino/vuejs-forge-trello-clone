/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
  ],
  overrides: [
    {
      files: ["cypress/e2e/**.{cy,spec}.{js,ts,jsx,tsx}"],
      extends: ["plugin:cypress/recommended"],
    },
  ],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "warn",
      {
        semi: false,
        singleQuote: true,
        arrowParens: "avoid",
        printWidth: 80,
        trailingComma: "none",
        bracketSameLine: true,
        /* commaDangle: 0,
        'comma-dangle': ['error', 'ignore'], */
        // "breakBeforeElse": true
      },
    ],

    /* '@typescript-eslint/comma-dangle': 0, */
  },
};
