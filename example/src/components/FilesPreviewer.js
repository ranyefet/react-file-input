var React = require('react');
var ReactDOM = require('react-dom');
var ImagePreviewer = require('./ImagePreviewer');
var prettyFileSize = require('../utils').prettyFileSize;

var FilesPreviewer = React.createClass({
	propTypes: {
		files: React.PropTypes.array,
	},
	renderDate(date) {
		return date.toLocaleDateString();
	},
	renderFile(file) {
		return (
			<tr key={file.id}>
				<td>{file.name}</td>
				<td>{file.type}</td>
				<td>{prettyFileSize(file.size)}</td>
				<td>{this.renderDate(file.lastModifiedDate)}</td>
				<td><ImagePreviewer src={file.dataURL} /></td>
			</tr>
		);
	},
	render() {
		if (!this.props.files.length) return <p>No files to preview</p>;
		return (
			<table className="pure-table">
				<thead>
					<tr>
						<th>Name</th>
						<th>Type</th>
						<th>Size</th>
						<th>Last Modified</th>
						<th>Preview</th>
					</tr>
				</thead>
					<tbody>
						{this.props.files.map(this.renderFile)}
					</tbody>
			</table>
		);
	}
});

module.exports = FilesPreviewer;