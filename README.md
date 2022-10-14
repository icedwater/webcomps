# Messing Around With WebComponents

ISBN: 978-1-8386-49234

This is mostly a follow-the-book repository, working through "Getting Started
With Web Components" by Prateek Jadhwani. I like that many codepen links were
given with example code, so that we could tinker with Web Components straight
off the bat.

However, I wanted to be able to use a local server, and even [MDN docs][comp]
didn't show me how, so I searched around and found `<script type = "module">`
which did what I wanted.

## Prerequisites

- modern graphical browser supporting JavaScript
- Python (for the web server)

## Getting Started

Just clone this repository, enter its directory, then run a web server in the
background:

    git clone https://github.com/icedwater/webcomps
    cd webcomps
    python -m http.server 8000 & # change 8000 to your preferred port

This should show you the basic index.html, with a terrible colour scheme that
you can change in basic.css whenever you like.

This is a work-in-progress repo that will be updated as I go through the book
and other references which I will try my best to list below. Cheers!

[comp]: https://developer.mozilla.org/en-US/docs/Web/Web_Components

