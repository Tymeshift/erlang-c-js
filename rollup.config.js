import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { uglify } from "rollup-plugin-uglify";

export default {
  input: "./src/erlangc.js",
  output: {
    file: "./index.js",
    format: "umd",
    name: "ErlangC"
  },
  plugins: [
    babel({
      exclude: "node_modules/**"
    }),
    resolve(),
    commonjs(),
    uglify()
  ]
};
