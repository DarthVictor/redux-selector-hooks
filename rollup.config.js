import typescript from "rollup-plugin-typescript2";
export default [
  {
    input: "./src/index.ts",
    output: {
      file: "./lib/index.esm.js",
      format: "esm",
    },
    external: ["react", "react-redux"],
    plugins: [typescript()],
  },
  {
    input: "./src/index.ts",
    output: {
      file: "./lib/index.js",
      format: "cjs",
    },
    external: ["react", "react-redux"],
    plugins: [typescript()],
  },
];
