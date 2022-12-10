module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json", "tsconfig.dev.json"],
    sourceType: "module",
  },
  ignorePatterns: [
    "/lib/**/*", // Ignore built files.
  ],
  plugins: ["@typescript-eslint", "import"],
  rules: {
    quotes: ["error", "double"],
    "import/no-unresolved": 0,
    indent: "off",
    // disable all rules that are unnecessary or might conflict with Prettier
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-use-before-define": "off",
    // remove no-dupe-keys rule
    "no-dupe-keys": "off",
    // remove quote-props rule
    "quote-props": "off",
    // disable all rules that are unnecessary or might conflict with Prettier
    indent: "off",
    "no-explicit-any": "off",
    "no-unused-vars": "off",
    "no-use-before-define": "off",
    "explicit-function-return-type": "off",
    "no-var-requires": "off",
    "no-empty-function": "off",
    "no-empty-interface": "off",
    "no-inferrable-types": "off",
    "no-non-null-assertion": "off",
    "no-parameter-properties": "off",
    "no-use-before-define": "off",
    "no-var-requires": "off",
    "no-explicit-any": "off",
    "no-unused-vars": "off",
    "no-use-before-define": "off",
    // disable all rules that are unnecessary or might conflict with Prettier
  },
};
