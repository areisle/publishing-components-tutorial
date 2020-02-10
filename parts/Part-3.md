# Publishing A Component
1. install build packages
   ```bash
   npm i -D rollup rollup-plugin-json rollup-plugin-node-resolve rollup-plugin-postcss rollup-plugin-sourcemaps rollup-plugin-typescript2
   ```
2. add output folder to `package.json` and prepublish task
   ```jsonc
   {
        // package.json
       "main": "lib/index.js",
       "typings": "lib/index.d.ts",
       "module": "lib/index.js",

       "prepublishOnly": "npm run build"
   }
3. add output folder to `tsconfig.json`
   ```jsonc
   // rest of tsconfig
   {
       // other compiler options...
       "declaration": true,
       "declarationDir": "lib",
       "outDir": "lib"
   }
4. add config
   ```js
   // rollup.config.js
   import json from 'rollup-plugin-json';
   import resolve from 'rollup-plugin-node-resolve';
   import postcss from 'rollup-plugin-postcss';
   import sourceMaps from 'rollup-plugin-sourcemaps';
   import typescript from 'rollup-plugin-typescript2';

   import pkg from './package.json';

   const GLOBALS = {
       'react': 'React',
       'react-dom': 'ReactDOM',
   };

   export default [
       {
           input: './src/index.tsx',
           external: Object.keys(pkg.peerDependencies || []),
           plugins: [
               postcss(),
               json(),
               typescript({ 
                   useTsconfigDeclarationDir: true,
                   clean: true,
                   objectHashIgnoreUnknownHack: true,
               }),
               resolve({
                   extensions: [
                       '.mjs', '.js', '.jsx', '.json'
                   ],
               }),
               sourceMaps(),
           ],
           output: [
               {
                   file: pkg.module,
                   name: 'index',
                   format: 'es',
                   sourcemap: true,
                   globals: GLOBALS,
               }
           ]
       },
   ]
   ```
5. add scope and point to scope to verdaccio
   ```
   // .npmrc
   @scope:registry=http://localhost:4873
   ```
7. start verdaccio
   ```bash
   verdaccio

   # add user if necessary
   npm adduser --registry http://localhost:4873
   ```
8. publish component
   ```bash
   npm publish
   ```