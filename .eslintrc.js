module.exports = {
  root: true,
  env: {
    jest: true,
    browser: true,
    amd: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended" // Make this the last element so prettier config overrides other formatting rules
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "no-unused-vars": ["error", { vars: "all", args: "after-used", ignoreRestSiblings: false, argsIgnorePattern: "next" }],
    "prettier/prettier": ["error", {}, { usePrettierrc: true }]
  }
};
