module.exports = {
    stories: ['../src/**/*.stories.(ts|tsx|js|jsx)'],
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/addon-info',
        '@storybook/addon-notes',
        {
            name: "@storybook/preset-create-react-app",
            options: {
                tsDocgenLoaderOptions: {}
            }
        },
    ],
};
