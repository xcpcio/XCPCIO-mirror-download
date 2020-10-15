import React from 'react';
import downloadlist from '../../downloadlist.json';

export default (props:any) => {
	const { filename } = props.match.params;
  let message = "404 Not Found.";
	if (downloadlist[filename]) {
		window.location.href = downloadlist[filename];
    message = "downloading";
	}	
	return (<div>
      {message}
	</div>);
}
