import buble from 'rollup-plugin-buble';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import svelte from 'rollup-plugin-svelte';

export default {
  /*|format|*/format: 'iife', /*|format|*/
  /*|moduleName|*/moduleName: 'SimpleUI', /*|moduleName|*/
  plugins: [
    resolve({
      jsnext: true,
      main: true
    }),
    commonjs({
      include: /*|includes|*/[]/*|includes|*/
    }),
    svelte(),
    buble()
  ]
};
