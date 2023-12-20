module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard-with-typescript", "plugin:react/recommended", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "**/tsconfig.json",
    sourceType: "module",
    ecmaVersion: "latest",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/triple-slash-reference": "off",
    "@typescript-eslint/consistent-type-imports": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "react/display-name": "off",
    "@typescript-eslint/ban-types": "off",
  },
};
