import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser'; // Импортируйте парсер TypeScript

export default [
  {
    ignores: ['dist', 'node_modules'], // Игнорируем dist (а зачем нам проверять в конце сборки?!) и node_modules (их нахер проверять не надо)
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'], // Поддержка файлов JS, JSX, TS, TSX. То есть этот объект - правила для JS, React и TS.
    languageOptions: {
      ecmaVersion: 2021, // Обновляем до 2021 для поддержки современных возможностей
      sourceType: 'module',
      globals: {
        ...globals.browser, // Глобальные переменные для браузера
        __dirname: 'readonly', // Разрешаем использование __dirname -- в файле .storybook/main.ts использовалась __dirname
      },
      parser: tsParser, // Укажите парсер TypeScript здесь
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tseslint, // Плагин для TypeScript
    },
    rules: {
      ...js.configs.recommended.rules, // Рекомендованные правила JS
      ...reactHooks.configs.recommended.rules, // Рекомендованные правила для React Hooks
      ...tseslint.configs.recommended.rules, // Рекомендованные правила для TypeScript
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/display-name': 'off', // Отключаем обязательное указание displayName для компонентов

      // Настройки для TypeScript
      '@typescript-eslint/no-unused-vars': 'off', // Предупреждение для неиспользуемых переменных ОТКЛЮЧАЕМ, ИНАЧЕ РУГАЕТСЯ
      '@typescript-eslint/prefer-nullish-coalescing': 'off', // Отключаем правило для использования ?? вместо ||
      '@typescript-eslint/strict-boolean-expressions': 'off', // Отключаем строгие булевые выражения
      '@typescript-eslint/consistent-type-assertions': 'off', // Отключаем правило для приведения типов
      '@typescript-eslint/explicit-function-return-type': 'off', // Отключаем требование явного указания типа возвращаемого значения
      '@typescript-eslint/no-explicit-any': 'off', // Отключаем предупреждение для any

      // Прочие настройки
      'n/no-callback-literal': 'off', // Отключаем проверку, запрещающую передавать в callback что-то, кроме ошибки
    },
  },
  {
    files: ['*.ts', '*.tsx'], // Специфичные настройки для файлов TS и TSX
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.app.json', './tsconfig.node.json', './tsconfig.json'], // Указываем ВСЕ 3 ФАЙЛА tsconfig.json для поддержки TypeScript (иначе ругалось в vite.config.ts когда включаешь Eslint в WebStorm)
      },
    },
    rules: {
      ...tseslint.configs['recommended-requiring-type-checking'].rules, // Рекомендованные правила с проверкой типов
    },
  },
];
