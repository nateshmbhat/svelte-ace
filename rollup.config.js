import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import svelte from 'rollup-plugin-svelte'
import autoPreprocess from 'svelte-preprocess'
import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'

const production = !process.env.ROLLUP_WATCH
const name = pkg.name
  .replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
  .replace(/^\w/, (m) => m.toUpperCase())
  .replace(/-\w/g, (m) => m[1].toUpperCase())

export default {
  input: 'src/main.ts',
  output: [
    {
      file: pkg.module,
      format: 'es',
      sourcemap: production,
    },
    {
      file: pkg.main,
      format: 'umd',
      name,
      sourcemap: production,
    },
  ],
  plugins: [
    commonjs(),
    typescript({ sourceMap: !production, inlineSources: !production }),
    svelte({
      compilerOptions: {
        dev: !production,
        css: (css) => {
          css.write('index.css', production)
        },
      },
      emitCss: false,
      preprocess: autoPreprocess(),
    }),
    resolve({
      dedupe: ['svelte'],
    }),
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
}
