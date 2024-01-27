import * as path from "node:path";

export default (env:any) => {
  console.log(env.watch);
  return {
    mode: (process.env.NODE_ENV as "production" | "development" | undefined) ?? "development",
    entry: "./src/main/webapp/index.tsx",
    module: {
      rules: [
        {
          test: /.ts|.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js", ".jsx"],
    },
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname,"./src/main/resources/static"),
    },
    watchOptions: {
      aggregateTimeout: 500,
      poll: 1000,
      ignored: path.resolve(__dirname,"./node_modules")
    },
    watch: env.watch === "true"
  };
};