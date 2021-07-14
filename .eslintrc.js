module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "@typescript-eslint/interface-name-prefix": [
        "error",
        {
            "prefixWithI": "always",
            "allowUnderscorePrefix": true
        }
    ],
    "@typescript-eslint/no-inferrable-types": [
        "error",
        {
            "ignoreProperties": true
        }
    ],
    "@typescript-eslint/no-explicit-any": 0,
    "no-console": 0,
    "@typescript-eslint/no-use-before-define": 0,
  },
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
}
