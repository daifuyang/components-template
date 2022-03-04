// rollup.config.js
import postcss from "rollup-plugin-postcss";
import postcssUrl from "postcss-url";
import typescript from "@rollup/plugin-typescript";
import image from "@rollup/plugin-image";
export default {
  input: "index.ts",
  output: {
    file: `dist/index.esm.js`,
    format: "esm"
  },
  plugins: [
    postcss({
      plugins: [
        postcssUrl({
          url: "inline"
        }),
      ],
    }),
    typescript({ tsconfig: './tsconfig.json' }),
    image()
  ]
};
