const path = require('path');

module.exports = {
    parserOptions: {
        project: path.join(__dirname, 'tsconfig.json') // The path to your tsconfig.json
    },
    plugins: ['@euberdeveloper'],
    extends: [
        'plugin:@euberdeveloper/typescript',
        'plugin:@euberdeveloper/unicorn',
        'plugin:@euberdeveloper/prettier'
    ],
    rules: {
        '@typescript-eslint/no-empty-function': 'off'
    }
};