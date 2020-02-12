# Publishing A Component
in order to publish our component, 
we'll need to transpile the code.
the bundler will replace any jsx with
it's equivalent, and output files as plain 
javascript instead of typescript with
seperate types files. this allows our package to
be used in both javascript and typescript apps.

### install build packages
```bash
npm i -D rollup rollup-plugin-json rollup-plugin-node-resolve rollup-plugin-postcss rollup-plugin-sourcemaps rollup-plugin-typescript2
```

### add output folder to `package.json` and prepublish task
adding a prepublish command means that whenever
the `publish` command is run, it will first do the
pre-publish task.
```jsonc
{
    // package.json
    "main": "lib/index.js",
    "typings": "lib/index.d.ts",
    "module": "lib/index.js",

    "prepublishOnly": "npm run build"
}
```

### add output folder to `tsconfig.json`
adding these commands tells the typescript
compiler to output declaration (`.d.ts`) files
when it's run.
```jsonc
// rest of tsconfig
{
    // other compiler options...
    "declaration": true,
    "declarationDir": "lib",
    "outDir": "lib"
}
```

### add config
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

### add scope and point to scope to verdaccio
```
// .npmrc
@scope:registry=http://localhost:4873
```

### start verdaccio
```bash
verdaccio

# add user if necessary
npm adduser --registry http://localhost:4873
```

### publish component
```bash
npm publish
```
now you can navigate to [verdaccio](http://localhost:4873) to view your published component