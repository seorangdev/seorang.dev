+++
title = "Building Tailwind CSS Without Node.js On Cloudflare Pages"
date = 2022-01-14
draft = false
+++

# Why
Continuing our goal where we wanted this site to be as "vanilla" as possible. Since Tailwind CSS standalone CLI isn't available by default on Cloudflare Pages, a static site hosting service that we will use, we have to figure it out how to build Tailwind CSS there. We might be tempted to just commit the generated file that we build locally but, personally, build artifacts should not be committed into repository.
# How
On Cloudflare Pages, we can customize the build command and we're allowed to run custom shell script there. So to achieve this, we're going to write a simple shell script that will help us automate the build process. Here is what we need to do:
1. Download the `tailwindcss` standalone CLI app, save it as "tailwindcss", then make it executable.
```
wget -cO - https://github.com/tailwindlabs/tailwindcss/releases/download/v3.0.13/tailwindcss-linux-x64 > tailwindcss \
    && chmod +x ./tailwindcss
```
You can use different version if you want.
2. Run the usual build command with the addition of `--minify` argument to make the resulting CSS smaller.
```
./tailwindcss -i ./styles/style.css -o ./static/style.css --minify
```
3. Commit the script and let's deploy it on Cloudflare Pages using **None** as the framework preset.
4. On **Build command** section, here's what we need to do:
    - First we need to make our shell script executable so we can run it
    - Then we can run the script using `sh build.sh` command
    - Finally build the site using `zola build` command

So the final command would look like this:
```
chmod +x build.sh && sh build.sh && zola build
```
5. Don't forget that according to the [guide](https://developers.cloudflare.com/pages/framework-guides/deploy-a-zola-site#deploying-with-cloudflare-pages), we need to supply `ZOLA_VERSION` and tell what version of Zola we want to use on **Environment Variables** section.
6. Finally let's hit the **Save and Deploy** button and wait the result.
7. If the script complains when it runs on Clouflare Pages, make sure `build.sh` is commited with LF as it's End of Line Sequence.
# Conclusion
Although it's not available by default, building Tailwind CSS without Node.js is still easy on Cloudflare Pages. This might also apply on other hosting providers that allows running a custom script.