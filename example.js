require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var ImagePreviewer = require('./ImagePreviewer');
var prettyFileSize = require('../utils').prettyFileSize;

var FilesPreviewer = React.createClass({
	displayName: 'FilesPreviewer',

	propTypes: {
		files: React.PropTypes.array
	},
	renderDate: function renderDate(date) {
		return date.toLocaleDateString();
	},
	renderFile: function renderFile(file) {
		return React.createElement(
			'tr',
			{ key: file.id },
			React.createElement(
				'td',
				null,
				file.name
			),
			React.createElement(
				'td',
				null,
				file.type
			),
			React.createElement(
				'td',
				null,
				prettyFileSize(file.size)
			),
			React.createElement(
				'td',
				null,
				this.renderDate(file.lastModifiedDate)
			),
			React.createElement(
				'td',
				null,
				React.createElement(ImagePreviewer, { src: file.dataURL })
			)
		);
	},
	render: function render() {
		if (!this.props.files.length) return React.createElement(
			'p',
			null,
			'No files to preview'
		);
		return React.createElement(
			'table',
			{ className: 'pure-table' },
			React.createElement(
				'thead',
				null,
				React.createElement(
					'tr',
					null,
					React.createElement(
						'th',
						null,
						'Name'
					),
					React.createElement(
						'th',
						null,
						'Type'
					),
					React.createElement(
						'th',
						null,
						'Size'
					),
					React.createElement(
						'th',
						null,
						'Last Modified'
					),
					React.createElement(
						'th',
						null,
						'Preview'
					)
				)
			),
			React.createElement(
				'tbody',
				null,
				this.props.files.map(this.renderFile)
			)
		);
	}
});

module.exports = FilesPreviewer;

},{"../utils":4,"./ImagePreviewer":2,"react":undefined,"react-dom":undefined}],2:[function(require,module,exports){
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var ImagePreviewer = React.createClass({
	displayName: 'ImagePreviewer',

	propTypes: {
		src: React.PropTypes.string
	},
	revokeObjectURL: function revokeObjectURL() {
		window.URL.revokeObjectURL(this.props.src);
	},
	render: function render() {
		return React.createElement('img', { src: this.props.src, onLoad: this.revokeObjectURL, style: { maxWidth: 200 } });
	}
});

module.exports = ImagePreviewer;

},{"react":undefined,"react-dom":undefined}],3:[function(require,module,exports){
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var FileInput = require('@ranyefet/react-file-input');
var ImagePreviewer = require('./components/ImagePreviewer');
var FilesPreviewer = require('./components/FilesPreviewer');
var mapFiles = require('./utils').mapFiles;
var fileToPlainObject = require('./utils').fileToPlainObject;

var App = React.createClass({
	displayName: 'App',

	getInitialState: function getInitialState() {
		return { files: [] };
	},
	handleUpload: function handleUpload(e) {
		var files = e.target.files; // do something with files
		this.setState({ files: mapFiles(fileToPlainObject, files) });
	},
	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'div',
				{ style: { marginBottom: 20 } },
				React.createElement(
					FileInput,
					{ name: 'myFile', onChange: this.handleUpload },
					React.createElement(
						'button',
						null,
						'Select File'
					)
				)
			),
			React.createElement(FilesPreviewer, { files: this.state.files })
		);
	}
});

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

},{"./components/FilesPreviewer":1,"./components/ImagePreviewer":2,"./utils":4,"@ranyefet/react-file-input":undefined,"react":undefined,"react-dom":undefined}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.prettyFileSize = prettyFileSize;
exports.fileToPlainObject = fileToPlainObject;
exports.mapFiles = mapFiles;

function prettyFileSize(size) {
	var i = Math.floor(Math.log(size) / Math.log(1024));
	var res = (size / Math.pow(1024, i)).toFixed(2) * 1;
	return res + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i];
}

;

function fileToPlainObject(file) {
	return {
		id: file.lastModified,
		name: file.name,
		type: file.type,
		size: file.size,
		lastModifiedDate: file.lastModifiedDate,
		dataURL: window.URL.createObjectURL(file)
	};
}

;

function mapFiles(fn, files) {
	var result = [];
	for (var i = 0; i < files.length; i++) result.push(fn(files[i]));
	return result;
}

},{}]},{},[3]);
