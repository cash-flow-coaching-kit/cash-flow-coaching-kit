const webpack = require("webpack");
module.exports = function override(config, env) {
    console.log('injecting webpack override from config-overrides.js');
    //console.log(config.resolve.fallback);

    config.resolve.fallback = {
        "fs": false,
        "path": require.resolve("path-browserify"),
        "os": false
    }


    // config.plugins.push(new webpack.DefinePlugin({
    //     process: {env: {}}
    // }))

    return config;
  };