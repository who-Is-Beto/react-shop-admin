module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true
  },
  extends: [
    "eslint:recommended",
    "pluguin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "next/core-web-vitals",
    "next"
  ],
  rules: {
    semi: ["error", "always"]
  }
};
