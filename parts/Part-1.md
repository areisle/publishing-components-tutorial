# Setup
## install verdaccio
this will be used to test out publishing our package
```bash
npm install -g verdaccio
```

## create a starter app
we will be using `create-react-app` to bootstrap creating our library. this comes with several advantages: 
* it supports typescript out of the box
* testing environment is already set up
* easy to set up storybook with

### run create-react-app
    ```bash
    npx create-react-app basic-component-library --template typescript
    ```
### open the repo
    ```bash
    cd basic-component-library
    ```
### add sass
this is not necessary, but makes writing
`css` less verbose
 ```bash
 npm install -S node-sass
 ```

### install storybook and addons
 ```bash
 npx -p @storybook/cli@next sb init -f --story-format=csf-ts
 npm i -D react-docgen-typescript-loader @storybook/addon-notes @storybook/addon-info 
 ```

### configure storybook
storybook will work out of the box,
but there's some useful addons which will require some extra configuration

#### add typings for markdown
this allows markdown files to be imported directly into your stories
```ts
// ./src/typings.d.ts
declare module '*.md' {
   const content: string;
   export = content;
}
```

#### configure addons
tell storybook which addons you'd like to load
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
add the info `decorator` to all stories
```js
// .storybook/preview.js
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo); 
```
### shuffle dependencies in `package.json`
our library itself is not an app but rather expected to
be used within a react app so `react` and `react-dom`
should be `peerDependencies` instead of `dependencies`

### delete unnecessary files
`create-react-app` creates a bunch of starter files 
that we won't need since we aren't building an app