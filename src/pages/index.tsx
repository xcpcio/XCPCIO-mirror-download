import React from 'react';
import downloadlist from '../../downloadlist.json';

export default (props:any) => {
	return (
		<div>
			<ul>
				{
					Object.keys(downloadlist).map((key, index) => {
						return (<li><a href={downloadlist[key]}>{key}</a></li>);
					})
				}
			</ul>
		</div>
	);
}