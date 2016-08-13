var React = require('react');
var ReactDOM = require('react-dom');
var FileInput = require('react-file-input');
var ImagePreviewer = require('./components/ImagePreviewer');
var FilesPreviewer = require('./components/FilesPreviewer');
var mapFiles = require('./utils').mapFiles;
var fileToPlainObject = require('./utils').fileToPlainObject;

var App = React.createClass({
	getInitialState() {
		return { files: [] };
	},
	handleUpload(e) {
		const files = e.target.files; // do something with files
		this.setState({ files: mapFiles(fileToPlainObject, files) });
	},
	render () {
		return (
			<div>
				<div style={{ marginBottom: 20 }}>
					<FileInput name="myFile" onChange={this.handleUpload}>
						<button>Select File</button>
					</FileInput>
				</div>
				<FilesPreviewer files={this.state.files} />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
