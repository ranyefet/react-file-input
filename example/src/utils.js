export function prettyFileSize(size) {
  var i = Math.floor( Math.log(size) / Math.log(1024) );
  var res = ( size / Math.pow(1024, i) ).toFixed(2) * 1;
  return res + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i];
};

export function fileToPlainObject(file) {
	return {
		id: file.lastModified,
		name: file.name,
		type: file.type,
		size: file.size,
		lastModifiedDate: file.lastModifiedDate,
		dataURL: window.URL.createObjectURL(file),
	};
};

export function mapFiles(fn, files) {
	var result = [];
	for (var i = 0; i < files.length; i++) result.push(fn(files[i]));
	return result;
}