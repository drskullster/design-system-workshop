// Import rollup plugins
import resolve from '@rollup/plugin-node-resolve';
import css from "rollup-plugin-import-css";

export default {
  input: ['./src/index.js'],
  plugins: [
    // Resolve bare module specifiers to relative paths
    resolve(),

    css({
      output: 'styles.css',
    }),
  ],

  output: {
    dir: 'build',
  },
  preserveEntrySignatures: 'strict',
};
