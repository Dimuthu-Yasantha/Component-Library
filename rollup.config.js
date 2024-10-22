import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
// import sucrase from '@rollup/plugin-sucrase';
import postcss from 'rollup-plugin-postcss';


export default [
    {
        input: './src/index.tsx',
        output: [
            {
                file: 'dist/index.js',
                format: 'cjs',
            }, {
                file: 'dist/index.es.js',
                format: 'es',
                export: 'named'
            }
        ],
        plugins: [
            babel({
                exclude: 'node_modules/**',
                presets: ['@babel/preset-react']
            }),
            postcss({
                plugins: [],
                minimize: true
            }),
            external(),
            resolve(),
            commonjs(),
            typescript()
        ]

    }
];