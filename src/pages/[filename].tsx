import React from 'react';
import downloadlist from '../../downloadlist.json';

export default (props:any) => {
	const { filename } = props.match.params;
	if (downloadlist[filename]) {
		window.location.href = downloadlist[filename];
	}	
	return (<div>
		404 Not Found.
	</div>);
}