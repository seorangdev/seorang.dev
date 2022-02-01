# Hizzely's Personal Site
This repository contains the source code of the (currently developed) future version of my personal site.

## The Motivation
Tl;dr: I wanted to make the foundation as "vanilla" as possible, opting out from shiny new tech.

### Inception
The last version of my site were built on top of the unstable SvelteKit framework (1.0.0-next.84).
I chose SvelteKit because I love SvelteKit's premise, JavaScript as progressive enhancement by default.
This means that my site won't be completely broken if somehow the framework or other JavaScript code cannot run.

After a few months since I deployed the site and wanted to update the content, somehow I cannot reinstall the dependencies.
Although I'm fully expecting the build to break at some point since the underlying framework still in beta at that time,
I decided to just "deprecate it" and build a new one from scratch. Thus this repo is born.

### No framework is the best framework
Any JavaScript framework, no matter how small, is bloated for my use case.
My use case doesn't benefit much from it except for it's provided structure.
Adding framework means I have more things to take care.

So why would I took the hassle for practically zero gains whatsoever?
Why would I bootstrap any frontend project using JS framework even if it can be accomplished by static HTML + CSS?
What a weird me.

### Hype-Driven Development
I guess I got carried away by the hype and somehow stopped questioning "why do I have to start with this complex tool instead of simpler one?"
since I got the impression of how versatile the tool is that I feel I can use it for any problems I have.
While I think it's not entirely wrong, it certainly makes me less appreciating the tool because I don't exactly know why I use it in the first place.
This might also answer why I always mindlessly searching what tool or framework is the best instead of solving problems at hands
because I want to know what people says instead of asking myself.

### Redemption
Starting from this project, I want myself to practice and get used to question anything that might reveal unecessary things
and get it adjusted or even better deleted before it starts to materialize.

Knowning what I wanted the site to be, this time I wanted to make it as vanilla as possible by embracing the "old-school"
time-tested tech stack. Means instead of building the site around the library or framework, it will just use vanilla HTML + CSS
and opting-out JavaScript by default. JavaScript is used only when it's strictly necessary for supporting specific type of content
and will keep it's usage just for that content, not site-wide.
