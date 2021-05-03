module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  rules: {
    "require-jsdoc": 0,
    "indent": "off",
    "no-unused-vars": "off",
    "max-len": 0,
    "quotes": ["error", "double"],
  },
};
