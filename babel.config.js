const withImages = require('next-images');

module.exports = {
  presets: ["next/babel"],
  plugins: [
    ["styled-components", { "ssr": true }],
    "inline-react-svg"
  ]
}, withImages();
