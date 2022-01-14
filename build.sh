#!/bin/sh

wget -cO - https://github.com/tailwindlabs/tailwindcss/releases/download/v3.0.13/tailwindcss-linux-x64 > tailwindcss \
    && chmod +x ./tailwindcss \
    && ./tailwindcss -i ./styles/style.css -o ./static/style.css --minify \