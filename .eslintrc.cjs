module.exports = {
  extends: ["jimmy-guzman", "jimmy-guzman/typescript", "next/core-web-vitals"],
  parserOptions: {
    project: ["./tsconfig.json"],
  },
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/naming-convention": "off",
    "id-length": ["error", { exceptions: ["t"] }],
    "import/no-anonymous-default-export": "off",
    "prefer-destructuring": "off",
  },
};
