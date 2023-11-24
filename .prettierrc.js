module.exports = {
    singleQuote: true,
    overrides: [
        {
            files: ['*.tsx', '*.jsx', '*.ts', '*.js'],
            options: {
                printWidth: 120,
                tabWidth: 4,
                semi: true,
                jsxSingleQuote: true,
                bracketSpacing: true,
                bracketSameLine: true,
                arrowParens: 'always',
                singleAttributePerLine: true
            },
        },
        {
            files: ['*.scss'],
            options: {
                printWidth: 140,
                tabWidth: 4,
                semi: true,
            },
        },
        {
            files: ['*.json', '*.yml'],
            options: {
                printWidth: 80,
                tabWidth: 2,
            },
        },
    ],
};
