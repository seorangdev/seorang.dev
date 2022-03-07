+++
title = "Using Tailwind CSS Without Node.js"
description = "Why would I need Node.js in a non-JS project?"
date = 2022-01-13
draft = false
+++

## Why?

Tailwind CSS provide us with the CDN version to try and use Tailwind without any additional tools.
But just like the [documentation](https://tailwindcss.com/docs/installation/play-cdn) says, it's not the best choice for production.
Some of the [reasons](https://github.com/tailwindlabs/tailwindcss/discussions/7637#discussioncomment-2243443) are, it affects site performance and user experience.
So wether we like it or not, we have to use build step (or I would call it _compiler_ in this case) to get the best of Tailwind CSS.
But in order to do that, we need to have Node.js installed.
It's not that I don't like Node.js or anything, but.
Why would I need Node.js in a non-JS project?

## How?

Thankfully, the team at Tailwind CSS have (recently) [released](https://tailwindcss.com/blog/standalone-cli) their Tailwind CLI as a self-contained, standalone build. In other words, we don't need to have Node.js installed in order to use Tailwind CLI.

## Usage Example

Here, I'm using fresh Zola SSG project for the demonstration.

1. Download the latest build of `tailwindcss` CLI [here](https://github.com/tailwindlabs/tailwindcss/releases/latest). You may want to add it to your Environment Variables so you can call it from anywhere.
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

5. Then let's open the `tailwind.config.js` file and tell where our HTML files are, so it knows where to scan for the styles we use and include them in the resulting CSS. The file would look like this:

```js
module.exports = {
  content: ["./templates/**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

6. We will save the resulting CSS inside the `static/stye.css` file. Let's add it into our `templates/base.html` file:

```html
<head>
  <link rel="stylesheet" href="/style.css" />
</head>
```

7. Finally we can run the build process. While developing, we might want it to rebuild automatically whenever we make some changes. Let's run this command:

```sh
# longer version
$ tailwindcss --watch --input ./styles/style.css --output ./static/style.css

# shorter version
$ tailwindcss -w -i ./styles/style.css -o ./static/style.css
```

8. When we're ready to deploy, we can build and optimize the resulting CSS by running [minification](https://developer.mozilla.org/en-US/docs/Glossary/minification) to further reduce the size. So let's do it using this command:

```sh
# longer version
$ tailwindcss --minify --input ./styles/style.css --output ./static/style.css

# shorter version
$ tailwindcss -m -i ./styles/style.css -o ./static/style.css
```

## Conclusion

So that's it! Depending on the use case, this (brand new, at the time of writing) standalone CLI might or might not be the right option to use.
