import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      "arrow-spacing": ["error", { "before": true, "after": true }],
      "camelcase": ["error", { "properties": "always" }],
      "comma-dangle": ["error", "always-multiline"],
      "comma-spacing": ["error", { "before": false, "after": true }],
      "eol-last": ["error", "always"],
      "indent": ["error", 2, { "MemberExpression": 0 }],
      "keyword-spacing": ["error", { "before": true, "after": true }],
      "linebreak-style": ["error", "unix"],
      "no-multi-spaces": "error",
      "no-trailing-spaces": "error",
      "object-curly-spacing": ["error", "always"],
      "quotes": ["error", "double"],
      "semi": ["error", "always"],
      "space-before-blocks": "error",
      "space-before-function-paren": ["error", "never"]
    },
  },
)
