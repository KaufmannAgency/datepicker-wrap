import { babel } from '@rollup/plugin-babel';
import image from '@rollup/plugin-image';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import pkg from './package.json';

export default [
  {
    input: 'src/index.js',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
    plugins: [peerDepsExternal(), babel({ babelHelpers: 'bundled' }), image()],
  },
];
