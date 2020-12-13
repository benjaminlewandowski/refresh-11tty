import typescript from "rollup-plugin-typescript";
import pkg from "./../../../../package.json";

export default {
    input: "src/resources/typescript/index.ts",
    output: [
        {
            file: pkg.dev,
            format: "cjs",
        },
    ],
    external: [
        ...Object.keys(pkg.devDependencies || {})
    ],
    plugins: [
        typescript({
            typescript: require("typescript"),
        }),
    ],
};
