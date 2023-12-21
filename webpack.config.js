const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/js/index.js",
    module: {
        rules: [{ test: /\.css$/, use: ["style-loader", "css-loader"] }],
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js",
    },
};
