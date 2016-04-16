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

## Usage

There are two ways of using obvious.<br>
Clone the repo: `git clone https://github.com/arielsaldana/obvious.git`.

### Via the command line by globally installing the required tools.

* Globally installing the neccesary tools

`
npm -g i less && npm -g i clean-css
`

* Compiling

`lessc obvious.less > ../css/style.css`

Or if you'd like you minify the css file..<br>

`lessc obvious.less > ../css/obvious.min.css --clean-css="--s1 --advanced --compatibility=ie8"`

### Via nodeJs

* Installing neccesary modules

To get node to install the neccesary modules run `npm i` from the root directory

* Running the project

Run the project via `node index.js`

Any compiled css can be found under css/


### What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
obvious/
├── css/
│   ├── obvious.css
|   ├── obvious.min.css
├── js/
│   ├── lib/
|   |   ├── pan.js
|   |   └── pan.min.js
|   ├── ui.form.class.js
│   └── ui.mateterial.class.js
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
