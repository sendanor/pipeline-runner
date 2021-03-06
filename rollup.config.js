import pkg from './package.json';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import { babel, getBabelOutputPlugin } from '@rollup/plugin-babel';
import { uglify } from "rollup-plugin-uglify";
import PATH from 'path';
import replace from '@rollup/plugin-replace';
// import externalGlobals from "rollup-plugin-external-globals";
// import inject from '@rollup/plugin-inject';

const BUILD_VERSION               = process?.env?.BUILD_VERSION                ?? pkg?.version ?? '';
const BUILD_NODE_ENV              = process?.env?.BUILD_NODE_ENV ?? process?.env?.NODE_ENV ?? 'production';
const BUILD_DATE                  = new Date().toISOString()                   ?? '';
const BUILD_WITH_LOCAL_RESOURCES  = process?.env?.BUILD_WITH_LOCAL_RESOURCES   ?? '';
const BUILD_WITH_HTTP_RESOURCES   = process?.env?.BUILD_WITH_HTTP_RESOURCES    ?? '';
const BUILD_WITH_MATRIX_RESOURCES = process?.env?.BUILD_WITH_MATRIX_RESOURCES  ?? '';
const BUILD_WITH_FULL_USAGE       = process?.env?.BUILD_WITH_FULL_USAGE        ?? '';
const BUILD_MATRIX_SERVER         = process?.env?.BUILD_MATRIX_SERVER          ?? '';
const BUILD_COMMAND_NAME          = process?.env?.BUILD_COMMAND_NAME           ?? '';
const BUILD_AUTHENTICATION        = process?.env?.BUILD_AUTHENTICATION         ?? '';
const BUILD_LOG_LEVEL             = process?.env?.BUILD_LOG_LEVEL              ?? '';
const BUILD_VARIABLE_PREFIX       = process?.env?.BUILD_VARIABLE_PREFIX        ?? '';
const BUILD_VARIABLE_SUFFIX       = process?.env?.BUILD_VARIABLE_SUFFIX        ?? '';

console.log(`Building with options:

  BUILD_VERSION               = '${BUILD_VERSION}'
  BUILD_NODE_ENV              = '${BUILD_NODE_ENV}'
  BUILD_DATE                  = '${BUILD_DATE}'
  BUILD_MATRIX_SERVER         = '${BUILD_MATRIX_SERVER}'
  BUILD_COMMAND_NAME          = '${BUILD_COMMAND_NAME}'
  BUILD_AUTHENTICATION        = '${BUILD_AUTHENTICATION}'
  BUILD_LOG_LEVEL             = '${BUILD_LOG_LEVEL}'
  BUILD_VARIABLE_PREFIX       = '${BUILD_VARIABLE_PREFIX}'
  BUILD_VARIABLE_SUFFIX       = '${BUILD_VARIABLE_SUFFIX}'
  BUILD_WITH_LOCAL_RESOURCES  = '${BUILD_WITH_LOCAL_RESOURCES}'
  BUILD_WITH_HTTP_RESOURCES   = '${BUILD_WITH_HTTP_RESOURCES}'
  BUILD_WITH_MATRIX_RESOURCES = '${BUILD_WITH_MATRIX_RESOURCES}'
  BUILD_WITH_FULL_USAGE       = '${BUILD_WITH_FULL_USAGE}'`);

export default {
    input: 'src/main.ts',
    plugins: [

        // See also ./src/pipeline-runtime-constants.ts
        replace({
            exclude: 'node_modules/**',
            // include: './src/pipeline-build-constants.ts',
            values: {
                'BUILD_VERSION'                : BUILD_VERSION,
                'BUILD_NODE_ENV'               : BUILD_NODE_ENV,
                'BUILD_DATE'                   : BUILD_DATE,
                'BUILD_MATRIX_SERVER'          : BUILD_MATRIX_SERVER,
                'BUILD_COMMAND_NAME'           : BUILD_COMMAND_NAME,
                'BUILD_AUTHENTICATION'         : BUILD_AUTHENTICATION,
                'BUILD_LOG_LEVEL'              : BUILD_LOG_LEVEL,
                'BUILD_VARIABLE_PREFIX'        : BUILD_VARIABLE_PREFIX,
                'BUILD_VARIABLE_SUFFIX'        : BUILD_VARIABLE_SUFFIX,
                'BUILD_WITH_LOCAL_RESOURCES'   : BUILD_WITH_LOCAL_RESOURCES,
                'BUILD_WITH_HTTP_RESOURCES'    : BUILD_WITH_HTTP_RESOURCES,
                'BUILD_WITH_MATRIX_RESOURCES'  : BUILD_WITH_MATRIX_RESOURCES,
                'BUILD_WITH_FULL_USAGE'        : BUILD_WITH_FULL_USAGE,
            },
            preventAssignment: true,
            delimiters: ['%{', '}']
        }),

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

        // See also https://github.com/mishoo/UglifyJS/blob/master/README.md#minify-options
        uglify({
            annotations: true,
            toplevel: true,
            sourcemap: false,
            compress: {
                collapse_vars: true,
                imports: true,
                booleans: true,
                annotations: true,
                unused: true,
                dead_code: true,
                passes: 10,
                hoist_funs: true,
                hoist_vars: true,
                merge_vars: true,
                toplevel: true,
                unsafe_math: true
            },
            output: {
                annotations: false,
                shebang: true,
                max_line_len: 120,
                indent_level: 2
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
