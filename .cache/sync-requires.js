const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/mnt/c/Users/kklum/Documents/programming/portfolio/gatsby-portfolio/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/mnt/c/Users/kklum/Documents/programming/portfolio/gatsby-portfolio/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/mnt/c/Users/kklum/Documents/programming/portfolio/gatsby-portfolio/src/pages/index.js")))
}

