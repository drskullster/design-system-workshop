import resolve from '@rollup/plugin-node-resolve';
import { rollupPluginHTML as html } from "@web/rollup-plugin-html";
import css from 'rollup-plugin-import-css';

export default {
  plugins: [
    html({
      input: './src/index.html',
    }),
    
    css({
      output: 'bundle.css',
      inject: true,
    }),
    
    // Resolve bare module specifiers to relative paths
    resolve(),
  ],

  output: {
    dir: 'build',
  },
};
