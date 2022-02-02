+++
title = "Adding Tailwind CSS Into Zola Site Without Node.js"
description = "Because setting up new build system just to use one package is like adding unnecessary complexity"
date = 2022-01-13
draft = false
+++

## Why?
Tailwind CSS by default is huge. To use it in production, we need to do some optimization like removing unused code.
In order to do that, Tailwind uses PostCSS, and PostCSS runs on Node.js.
Setting up another tool just to use one package feels like adding unnecessary complexity, especially for simple project like this site.
## How?
Thankfully, the team at Tailwind CSS recently [released](https://tailwindcss.com/blog/standalone-cli) their standalone `tailwindcss` CLI tool. By using the standalone tool, we're now able to use Tailwind CSS within non-JavaScript project without Node.js.
1. Download the latest build of `tailwindcss` CLI tool [here](https://github.com/tailwindlabs/tailwindcss/releases/latest)
2. Use the tool as usual, for my use case it's enough for me to just generate the `tailwind.config.js` file. So let's do it:
```sh
$ tailwindcss init
```
3. Let's create a folder and an empty file where we will write our CSS:
```sh
$ mkdir styles
$ touch style.css
```
4. Add these Tailwind CSS code at the top in our `style.css` file:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
5. Then let's open the `tailwind.config.js` file and tell where our HTML files are, so it knows which CSS code to include when we build the production CSS. The file would look like this:
```js
module.exports = {
  content: [
    "./templates/**/*.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
6. We will save the resulting CSS code inside the `static/stye.css` file. Let's add it into our `templates/base.html` file:
```html
<head>
  <link rel="stylesheet" href="/style.css">
</head>
``` 
7. Finally we can build the CSS. While developing, we might want it to rebuild automatically whenever we make some changes. Let's run this command:
```sh
$ tailwindcss --watch --input ./styles/style.css --output ./static/style.css
``` 
8. When we're ready to commit and deploy, we can optimize the resulting CSS by removing unused code and minify it. So let's do it using this command:
```sh
$ tailwindcss --minify --input ./styles/style.css --output ./static/style.css
``` 
## Conclusion
That's it! for simple use case like mine, this standalone tool perfectly fits my use case. How about yours? Thanks for reading!