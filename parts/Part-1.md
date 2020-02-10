# Setup (steps 1-5 recommended to be completed before tutorial starts)
1. install verdaccio
   ```bash
   npm install -g verdaccio
   ```
2. create a starter app
   ```bash
   npx create-react-app basic-component-library --template typescript
   ```
3. open the repo
   ```bash
   cd my-component-library
   ```
4. add sass
   ```bash
   npm install -S node-sass
   ```
5. install storybook and addons
   ```bash
   npx -p @storybook/cli@next sb init -f --story-format=csf-ts
   npm i -D react-docgen-typescript-loader @storybook/addon-notes @storybook/addon-info 
   ```
6. configure storybook
   add typings for markdown to storybook folder
   ```ts
    // ./src/typings.d.ts
    declare module '*.md' {
       const content: string;
       export = content;
    }
    ```
    configure addons
    ```js
    // .storybook/main.js
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
   ```
   ```js
   // .storybook/preview.js
   import { addDecorator } from '@storybook/react';
   import { withInfo } from '@storybook/addon-info';
    
   addDecorator(withInfo); 
   ```
7. shuffle dependencies in `package.json`
8. delete unnecessary files