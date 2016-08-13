var React = require('react');
var ReactDOM = require('react-dom');

var ImagePreviewer = React.createClass({
	propTypes: {
		src: React.PropTypes.string,
	},
	revokeObjectURL() {
		window.URL.revokeObjectURL(this.props.src);	
	},
	render() {
		return <img src={this.props.src} onLoad={this.revokeObjectURL} style={{ maxWidth: 200 }} />;
	}
});

module.exports = ImagePreviewer;