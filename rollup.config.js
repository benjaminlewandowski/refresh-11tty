import typescript from "rollup-plugin-typescript";
import pkg from "./package.json";

export default {
    input: "src/resources/typescript/index.ts",
    output: [
        {
            file: pkg.main,
            format: "cjs",
        },
    ],
    external: [
        ...Object.keys(pkg.dependencies || {}),
        ...Object.keys(pkg.peerDependencies || {}),
    ],
    plugins: [
        typescript({
            typescript: require("typescript"),
        }),
    ],
};
