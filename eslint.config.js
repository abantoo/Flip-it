import pluginVue from 'eslint-plugin-vue';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import prettierConfig from '@vue/eslint-config-prettier';

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,vue,js,mjs,cjs}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**', 'node_modules/**'],
  },

  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  prettierConfig,

  {
    files: ['**/*.js', '**/*.mjs', '**/*.cjs', 'tailwind.config.js', 'postcss.config.js'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      'no-undef': 'off',
    },
  },

  {
    rules: {
      'vue/multi-word-component-names': 'off',
      'max-len': 'off',
      'vue/max-len': [
        'error',
        {
          code: 120,
          template: 120,
          tabWidth: 2,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
          ignoreHTMLAttributeValues: true,
          ignoreHTMLTextContents: true,
        },
      ],
      'prettier/prettier': [
        'error',
        {
          printWidth: 100,
          singleQuote: true,
          semi: true,
          trailingComma: 'all',
        },
      ],
    },
  },
);
