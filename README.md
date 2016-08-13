# FileInput

This component allows you to customize the look of file-input element. 


## Demo & Examples

Live demo: [ranyefet.github.io/react-file-input](http://ranyefet.github.io/react-file-input/)

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Installation

The easiest way to use react-file-input is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-file-input.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-file-input --save
```


## Usage

You can use any custom react component as FileInput children

```
var FileInput = require('react-file-input');

<FileInput onChange={handleFileChanged}>
  <button>Select files...</button>
</FileInput>
```

### Properties

* accept (string)
* children (React element) *required*
* className (string) - custom class name that will be applied to input container
* disabled (bool) - controls input disabled attribute
* name (string) _default: 'file'_ - controls input name attribute
* onChange (func) - callback to handle input onChange event
* style (obj) - custom style object that will be applied to input container

### Notes

Enhancements and pull requests are welcomed.

## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## License

The MIT License (MIT)

Copyright (c) 2016 ranyefet.

