import React, { PropTypes } from 'react';

const FileInput = ({ name = 'file', disabled, accept, onChange, style, className = '', children }) => (
  <div style={{ position: 'relative', display: 'inline-block', ...style }} className={className}>
    <input
      type="file"
      name={name}
      onChange={onChange}
      disabled={disabled}
      accept={accept}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
      }}
    />
    {children}
  </div>
);

FileInput.propTypes = {
	accept: PropTypes.string,
	children: PropTypes.any.isRequired,
	className: PropTypes.string,
	disabled: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  style: PropTypes.object,
};

export default FileInput;
