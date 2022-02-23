module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    "@vue/prettier",
    "@vue/typescript"
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/no-use-v-if-with-v-for": "off",
    "no-shadow": "off",
    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": "off"
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    cmaVersion: 12,
    sourceType: 'module',
    project: "./tsconfig.json"
  },
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
};
