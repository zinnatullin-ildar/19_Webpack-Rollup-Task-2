import { babel } from '@rollup/plugin-babel';
import styles from 'rollup-plugin-styles';
import image from '@rollup/plugin-image';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload'

export default {
    input: './index.js',
    output: {
        file: './build/bundle.js',
        format: 'cjs',
        name: 'build'
    },
    watch: {
        exclude: ['node_modules/**']
    },
    plugins: [
        babel({
            babelHelpers: 'bundled',
            presets: ['@babel/env']
        }),
        styles(),
        image({
            limit: 100000,
        }),
        serve({
            open: true,
            contentBase: './',
            port: 8000,
        }),
        livereload(),
    ],
};
