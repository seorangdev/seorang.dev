# Hizzely's Personal Site
This repository contains the source code of my [personal website](https://seorang.dev).

## Requirement
- [Zola](https://www.getzola.org/)
- [Tailwind CSS Standalone CLI](https://github.com/tailwindlabs/tailwindcss/releases/latest)

## Development
1. Build the development (unminified) CSS and watch for changes
```sh
$ tailwindcss -w -i ./styles/style.css -o ./static/style.css
```
2. Start the development server
```sh
$ zola serve
```

## Build for Deployment
1. Build the minified CSS
```sh
$ tailwindcss -m -i ./styles/style.css -o ./static/style.css
```
2. Build the site
```sh
$ zola build
```
