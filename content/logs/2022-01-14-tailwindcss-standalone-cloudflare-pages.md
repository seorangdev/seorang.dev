+++
title = "Building Tailwind CSS Without Node.js On Cloudflare Pages"
description = "Tailwind CSS standalone CLI isn't available by default in Cloudflare Pages. So how do we build it?"
date = 2022-01-14
draft = false
+++

## Why

Continuing [my journey](@/logs/2022-01-12-simplifying-my-website.md) where I wanted this site to be as "vanilla" as possible. Since [Tailwind CSS standalone CLI](@/logs/2022-01-13-tailwindcss-standalone-cli.md) isn't available by default on Cloudflare Pages, a static site hosting service that I will use, I have to figure it out how to build Tailwind CSS there. It's tempting to just commit the generated file that I build locally but, personally, build artifacts should not be committed into repository.

## How

On Cloudflare Pages, turns out we can customize the build command and we're allowed to run custom shell script there. So to achieve this, I'm going to write a simple shell script that will help me automate the build process. Here is how I did it:

1. Download the `tailwindcss` standalone CLI app, save it as "tailwindcss", then make it executable.

```sh
wget -cO - https://github.com/tailwindlabs/tailwindcss/releases/download/v3.0.13/tailwindcss-linux-x64 > tailwindcss \
    && chmod +x ./tailwindcss
```

2. Run the usual build command with the addition of `--minify` argument to make the resulting CSS smaller.

```sh
./tailwindcss -i ./styles/style.css -o ./static/style.css --minify
```

3. Commit the script and deploy it on Cloudflare Pages using **None** as the framework preset.
4. On **Build command** section, here's what I need to do:
   - First I need to make my shell script executable so I can run it
   - Then I can run the script using `sh build.sh` command
   - Finally build the site using `zola build` command

So the final command would look like this:

```sh
chmod +x build.sh && sh build.sh && zola build
```

5. According to the [guide](https://developers.cloudflare.com/pages/framework-guides/deploy-a-zola-site#deploying-with-cloudflare-pages), I need to supply `ZOLA_VERSION` and tell what version of Zola I want to use on **Environment Variables** section.
6. Finally hit the **Save and Deploy** button and wait the result.
7. If the script complains when it runs on Clouflare Pages, make sure `build.sh` is commited with LF as it's End of Line Sequence.

## Conclusion

Although it's not available by default, building Tailwind CSS without Node.js is still easy on Cloudflare Pages. This might also apply on other hosting providers that allows running a custom script.
