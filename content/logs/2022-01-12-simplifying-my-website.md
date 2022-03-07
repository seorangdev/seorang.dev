+++
title = "Simplifying My Website"
description = "Breaking free from JavaScript frameworks"
date = 2022-01-12
draft = false
+++

## The Inception

What would you do if you wanted to build a new personal website? If you straight away
fire up your terminal and spin up new project using JavaScript framework of [your choice](https://2021.stateofjs.com/en-US/libraries/front-end-frameworks),
then that's also exactly what I did last time.
<br><br>
The last version of my site was built on top of the beta [SvelteKit](https://kit.svelte.dev/) framework
(1.0.0-next.84). But after few months since I deployed the site and wanted to update the content,
I cannot build the site due to dependency issue. Well, I'm fully expecting the build would break
at some point due to the unstable nature of any non-stable release. But instead of fixing it,
I decided to just move on and build a new one from scratch. Thus this site was born.

## No framework is the best framework

Reflecting on how I utilized the powerful framework on my last site, I found that
any JavaScript framework no matter how small, is bloated for me. My use case didn't
benefit much from it except for it's provided structure.
<br><br>
The last version was essentially just a simple landing page consist of literally
a single page and single route. But such simple site was built using a tool that
way too overkill for that kind of purpose. Not to mention the unnecessary complex
tooling that comes with it to produce the actual code that the browser can understand.
That's literally the quintessence of [Law of the instrument](https://en.wikipedia.org/wiki/Law_of_the_instrument)
without me being aware at that time.
<br><br>
Adding framework means I have more things to take care of. So why did I even think
to build my simple site on top of JavaScript framework in the first place? That very
same site could probably be built with less effort by writing HTML + CSS and a bit
of "vanilla" JavaScript by hand. It's not like I'm going to make a realtime, highly
interactive website that I really need a JavaScript framework to make my life less
miserable.

## A comfort zone

When I think about it, I realized that somehow I've stopped questioning my choice
such as "why do I want to start with this complex tool instead of simpler one?"
since I got the impression of how versatile the tool is that I feel I can use
it for any problems I have. While I think it's not entirely wrong, it certainly
makes me super lazy and less appreciating the tool because I'm not entirely sure
why I use it in the first place.
<br><br>
Frankly, having such reliance on framework actually also affect me negatively.
For example, sometimes I'm having a hard time formulating a simple solution
for a simple problem because my brain constantly filled with
"how can I fit this problem to this framework?" Or to put it another way,
I only know exactly exactly one solution for every problems.

## Redemption

So starting from this project, I want myself to practice and get used to question
anything that might have a chance to reveal unecessary things and get it re-evaluated
or even better deleted before it starts to materialize.

## The Plan

I know what I want in terms of the purpose, functionality, and looks of this site.
So this time I want to make it as "vanilla" as possible by approaching the most simplest
way to build a website. I'm going to build it the way we used to build a website
before JavaScript took the storm.
<br><br>
The site in general won't have any interactivity. So opting-out JavaScript by default
is really feasible to make the code even simpler. JavaScript will only be used when I'm
out of alternative and it's strictly necessary for supporting specific type of content
that cannot be substituted. I will also keep it's scope limited just for that specific
use case, not site-wide.
<br><br>
Of course I want to keep myself sane, at least in the long run. So although it is more
than possible to write the entire site code 100% by hand, I'm going to leverage [Static
Site Generator (SSG)](https://www.cloudflare.com/learning/performance/static-site-generator/)
instead to help me automate it and create a separation between the actual content and the presentation code.
<br><br>
And no, I'm not going to use JavaScript-based SSGs such as [Gatsby](https://www.gatsbyjs.com/), [Gridsome](https://gridsome.org/) or [Next.js](https://nextjs.org/)
since they're shipping full-blown framework by default to support their main features
such as client-side navigation like in a [Single-Page Application](https://en.wikipedia.org/wiki/Single-page_application)
which I don't need. Though apparently there are some plugins and workarounds to this.
But wouldn't that counts as a hack? Instead I'm going to use [Zola](https://getzola.org),
a Rust-based SSG. I've tried other such as [Hugo](https://gohugo.io/) and
[Jekyll](https://jekyllrb.com/) but personally I find Zola is much simpler to use.
