import React from 'react';

const Youtube = ({
	src,
	title,
	height = 315,
	width = 560
}) => (
	<iframe
		width={width}
		height={height}
		src={src}
		title={title}
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		referrerpolicy="strict-origin-when-cross-origin"
		allowfullscreen
	/>
);

export default Youtube;