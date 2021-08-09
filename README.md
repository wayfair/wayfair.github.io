# wayfair.github.io

[![License: BSD 0-Clause](https://img.shields.io/badge/License-BSD%200--Clause-7462E0.svg)](LICENSE)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-24B8EE.svg)](CODE_OF_CONDUCT.md)

## 🚀 Quick Start

To get started editing this site, you'll need Node v12+. We recommend using [nvm](https://github.com/nvm-sh/nvm).

Once that's installed, you'll need [`yarn`](https://yarnpkg.com/) as well.

Start developing by initializing your node modules:

```shell
yarn
```

Then start the [gatsby development server](https://www.gatsbyjs.com/docs/):

```shell
yarn build
yarn develop
```

Plenty of information may show, but you should eventually see something like:

```shell
You can now view gatsby-starter-default in the browser.
⠀
  http://localhost:8000/
⠀
```

You can edit the site by editing the files in `src/`. This site uses CSS, JS, and [css-in-js](https://cssinjs.org/).

> 💡 Note that for most images, you'll want to run `yarn build` before they show up correctly on the development site.

## Contributing to Docs

If you're here to write some of our plentiful documentation, use these foolproof steps:

1. Ensure you've completed the [Quick Start](#-quick-start) above, and have a server running.
1. Make a new branch for your new document post.
1. Create a new directory (or sub-directory, or sub-sub-directory) in `src/docs` like `my-doc`
1. Create an `index.md` file in `src/docs/my-doc` (or whatever you named your doc). This will be your document's markdown page.
1. Write the [frontmatter](https://github.com/remarkjs/remark-frontmatter#use) for the page like so:

```markdown
---
title: "My Snazzy Article"
---
```

1. Optionally, include any assets you need (images, etc) alongside `index.md`, and reference them directly, eg: `[my-image](./my-image)`
1. Watch your markdown come to life in your browser by visiting the corresponding path to your document from `/docs` (in this case, we'd visit `docs/my-doc`)
1. When satisfied, commit the result for review.

## Deploying

As long as permissions work and everything is aligned in the stars, you ought to be able to deploy with:

```shell
yarn deploy
```

## Troubleshooting

If you see strange behavior from developing or building the app, try `npx gatsby clean`. This should use the `gatsby-cli` to clean out frayed node modules or other unexpected hitches.
