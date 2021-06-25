import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/main.ts",
  output: {
    file: "nature-ai2html-v0.0.0.js",
    format: "iife",
  },
  plugins: [typescript({ module: "ES2015" })],
};
