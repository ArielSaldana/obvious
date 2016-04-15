# Obvious

Obvious Less Framework

## Table of contents

- [Quick start](#quick-start)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [Versioning](#versioning)
- [Creators](#creators)
- [Copyright and license](#copyright-and-license)

## Quick start

- Clone the repo: `git clone https://github.com/arielsaldana/obvious.git`.

- To compile use the command lessc unreal.less > ../css/style.css
to minimize the css output use : lessc unreal.less > ../css/style.css --clean-css="--s1 --advanced --compatibility=ie8"

### What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
obvious/
├── css/
│   ├── obvious.min.css
├── js/
│   ├── obvious.js
│   └── obvious.min.js
└── fonts/
    ├── glyphicons-halflings-regular.eot
    ├── glyphicons-halflings-regular.svg
    ├── glyphicons-halflings-regular.ttf
    ├── glyphicons-halflings-regular.woff
    └── glyphicons-halflings-regular.woff2
```

To create a webpage with this framework start with this skeleton:

```HTML
<!DOCTYPE html>
<html>
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
      
      <title>Obvious</title>
      
      <link rel="stylesheet" href="http://unreal.io/css/obvious.min.css">
    </head>
    <body>
        <h1>Hello, Obvious</h1>
    </body>
</html>
```
