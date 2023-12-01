import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import commonjs from '@rollup/plugin-commonjs'
import sass from 'node-sass'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import terser from '@rollup/plugin-terser'

export default [
    {
        input: 'src/index.js',
        output: [ 
            {
                file: "release/index.cjs.min.js",
                format: 'cjs',
                sourcemap: false,
                
            },
        ],
        plugins: [
            peerDepsExternal(),
            commonjs({ 
                include: 'node_modules/**',
            }),
            resolve(),
            babel({
            exclude: 'node_modules/**',
            babelHelpers: 'bundled',
            }),
            postcss({
            preprocessor: (content, id) => new Promise((res) => {
                const result = sass.renderSync({ file: id })

                res({ code: result.css.toString() })
            }),
            plugins: [autoprefixer],
            modules: {
                scopeBehaviour: 'global',
            },
            sourceMap: true,
            extract: true,
            }),
        ],
    },
    {
        input: 'src/index.js',
        output: [ 
            {
                file: "release/index.umd.min.js",
                format: 'umd',
                sourcemap: false,
                name:'sazaState',
                
            },
        ],
        plugins: [
            peerDepsExternal(),
            commonjs({ 
                include: 'node_modules/**',
            }),
            resolve(),
            babel({
                exclude: 'node_modules/**',
                babelHelpers: 'bundled',
            }),
            postcss({
            preprocessor: (content, id) => new Promise((res) => {
                const result = sass.renderSync({ file: id })

                res({ code: result.css.toString() })
            }),
            plugins: [autoprefixer],
            modules: {
                scopeBehaviour: 'global',
            },
            sourceMap: true,
            extract: true,
            }),
        ],
    },
    {
        input: 'src/index.js',
        output: [ 
            {
                file: "release/index.esm.min.js",
                format: 'esm',
                sourcemap: false,
                
            },
        ],
        plugins: [
            peerDepsExternal(),
            commonjs({ 
                include: 'node_modules/**',
            }),
            resolve(),
            babel({
                exclude: 'node_modules/**',
                babelHelpers: 'bundled',
            }),
            postcss({
            preprocessor: (content, id) => new Promise((res) => {
                const result = sass.renderSync({ file: id })

                res({ code: result.css.toString() })
            }),
            plugins: [autoprefixer],
            modules: {
                scopeBehaviour: 'global',
            },
            sourceMap: true,
            extract: true,
            }),
        ],
    },
    {
        input: 'src/index.js',
        output: [ 
            {
                file: "release/index.js",
                sourcemap: false,
                
            },
        ],
        plugins: [
            peerDepsExternal(),
            commonjs({ 
                include: 'node_modules/**',
            }),
            resolve(),
            babel({
                exclude: 'node_modules/**',
                babelHelpers: 'bundled',
            }),
            postcss({
            preprocessor: (content, id) => new Promise((res) => {
                const result = sass.renderSync({ file: id })

                res({ code: result.css.toString() })
            }),
            plugins: [autoprefixer],
            modules: {
                scopeBehaviour: 'global',
            },
            sourceMap: true,
            extract: true,
            }),
        ],
    }

]