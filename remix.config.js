/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  // ... other config options ...
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildPath: "build/index.js",
  serverModuleFormat: "cjs",
  watchPaths: ["./public"],
  // Add SVG to the list of handled assets
  serverDependenciesToBundle: [/.*\.svg$/],
} 