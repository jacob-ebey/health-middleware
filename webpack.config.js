const path = require("path");

const ModuleFederationPlugin = require("@module-federation/propriatery-tools/packages/remote-federation-plugin/plugin/ModuleFederationPlugin");

module.exports = {
  mode: "production",
  target: "async-node",
  entry: "./src/noop.js",
  output: {
    libraryTarget: "commonjs2",
    filename: "health-middleware.js",
    path: path.resolve(__dirname, "dist")
  },
  optimization: {
    minimize: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'health-middleware',
      library: { type: 'commonjs2' },
      filename: 'remote-entry.js',
      exposes: {
        ping: './src/ping.js'
      }
    })
  ]
};
