import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/erlangc.js",
  output: [
    {
      file: "index.js",
      format: "umd",
      name: "ErlangC",
    },
    {
      file: "index.esm.js",
      format: "es",
      name: "ErlangC",
    },
  ],
  plugins: [
    commonjs(),
    resolve(),
    babel({ babelHelpers: "bundled" }),
    terser(),
  ],
};
