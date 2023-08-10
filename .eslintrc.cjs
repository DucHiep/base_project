module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "plugin:react/jsx-runtime",
    "plugin:prettier/recommended",
    'eslint-config-prettier',
    "prettier"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      "jsx": true
    },
  },
  plugins: ["react", "@typescript-eslint", "import", "jsx-a11y", "react-hooks", "prettier"],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "caughtErrorsIgnorePattern": "^_"
      }
    ],

    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    "prettier/prettier": [
      "warn",
      {
        "jsxSingleQuote": true,
        "singleQuote": true,
        "semi": true,
        "tabWidth": 4,
        "trailingComma": "all",
        "printWidth": 100,
        "bracketSameLine": false,
        "useTabs": false,
        "arrowParens": "always",
        "endOfLine": "auto"
      }
    ]
  },
}
