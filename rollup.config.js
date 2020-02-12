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
