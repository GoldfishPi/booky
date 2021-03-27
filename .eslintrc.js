module.exports = {
    root: true,
    extends: '@react-native-community',
    parser: '@typescript-eslint/parser',
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'react-hooks/exhaustive-deps': ['error'],
        'no-console': ['error'],
        'react/no-array-index-key': ['error'],
        'react/jsx-key': ['error'],
        'react/boolean-prop-naming': ['error'],
    },
    globals: {
        JSX: 'readonly',
    },
    env: {
        // 'cypress/globals': true,
    },
};
