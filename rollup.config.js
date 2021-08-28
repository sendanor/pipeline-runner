import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import { babel, getBabelOutputPlugin } from '@rollup/plugin-babel';
import { uglify } from "rollup-plugin-uglify";
import PATH from 'path';
//import externalGlobals from "rollup-plugin-external-globals";
//import replace from '@rollup/plugin-replace';
//import inject from '@rollup/plugin-inject';

export default {
    input: 'src/main.ts',
    plugins: [
        typescript(),
        json(),
        resolve(),
        commonjs({
            sourceMap: false,
            include: /node_modules/
        }),
        babel({ babelHelpers: 'bundled' }),
        // externalGlobals({
        //     intl: 'IntlPolyfill'
        // }),
        uglify({
            output: {
                shebang: true,
                max_line_len: 120
            }
        })
    ],
    output: {
        dir: 'dist',
        format: 'cjs',
        banner: '#!/usr/bin/env node',
        plugins: [
            getBabelOutputPlugin({
                configFile: PATH.resolve(__dirname, 'babel.config.json')
            })
        ]
        // globals: {
        //     intl: 'Intl'
        // }
    }
};
