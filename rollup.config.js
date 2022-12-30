const terser = require("rollup-plugin-terser").terser;
const pluginTypescript = require("@rollup/plugin-typescript");
const pluginCommonjs = require("@rollup/plugin-commonjs");
const pluginNodeResolve = require("@rollup/plugin-node-resolve");
const { babel } = require("@rollup/plugin-babel").babel;
const resolve = require("path").resolve;

const pkg = require("./package.json");

const moduleName = pkg.name.replace(/^@.*\//, "");
const inputFileName = "./index.ts";
const author = pkg.author;
const banner = `
  /**
   * @license
   * author: ${author}
   * ${moduleName}.js v${pkg.version}
   * Released under the ${pkg.license} license.
   */
`;

module.exports = [
  {
    input: inputFileName,
    output: [
      {
        name: moduleName,
        file: pkg.browser,
        format: "iife",
        sourcemap: "inline",
        banner,
        extend: true,
      },
      {
        name: moduleName,
        file: pkg.browser.replace(".js", ".min.js"),
        format: "iife",
        sourcemap: "inline",
        banner,
        plugins: [terser()],
        extend: true,
      },
    ],
    plugins: [
      pluginTypescript(),
      pluginCommonjs({
        extensions: [".js", ".ts"],
      }),
      babel({
        babelHelpers: "bundled",
        configFile: resolve(__dirname, ".babelrc.js"),
      }),
      pluginNodeResolve({
        browser: true,
      }),
    ],
  },

  // ES
  {
    input: inputFileName,
    output: [
      {
        file: pkg.module,
        format: "es",
        sourcemap: "inline",
        banner,
        exports: "named",
        extend: true,
      },
    ],
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.devDependencies || {}),
    ],
    plugins: [
      pluginTypescript(),
      pluginCommonjs({
        extensions: [".js", ".ts"],
      }),
      babel({
        babelHelpers: "bundled",
        configFile: resolve(__dirname, ".babelrc.js"),
      }),
      pluginNodeResolve({
        browser: false,
      }),
    ],
  },

  // CommonJS
  {
    input: inputFileName,
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: "inline",
        banner,
        exports: "default",
        extend: true,
      },
    ],
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.devDependencies || {}),
    ],
    plugins: [
      pluginTypescript(),
      pluginCommonjs({
        extensions: [".js", ".ts"],
      }),
      babel({
        babelHelpers: "bundled",
        configFile: resolve(__dirname, ".babelrc.js"),
      }),
      pluginNodeResolve({
        browser: false,
      }),
    ],
  },
];

// import babel from "rollup-plugin-babel";
// import resolve from "@rollup/plugin-node-resolve";
// import external from "rollup-plugin-peer-deps-external";

// import postcss from "rollup-plugin-postcss";

// export default [
//   {
//     input: "./src/index.js",
//     output: [
//       {
//         file: "dist/index.js",
//         format: "cjs",
//       },
//       {
//         file: "dist/index.es.js",
//         format: "es",
//       },
//     ],
//     plugins: [
//       postcss({
//         plugins: [],
//         minimize: true
//       }),
//       babel({
//         exclude: "node_modules/**",
//         presets: ["@babel/preset-react"],
//       }),
//       external(),
//       resolve(),
//     ],
//   },
// ];
