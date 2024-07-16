import React from 'react';
import { isMobile } from '../utils/screen';

const Email = ({ email = 'infosunsetchasers@gmail.com' }) => (
	<div
		style={{
			width: '50%',
			maxHeight: '100%',
			display: 'flex',
			margin: '0 auto',
			alignItems: 'center',
			justifyContent: 'center',
			position: !isMobile && 'absolute',
			bottom: !isMobile && '-35%',
			left: !isMobile && '25%',
			fontSize: isMobile ? '12px' : '16px',
			marginTop: isMobile && '2rem'
		}}
	>
		<a href={`mailto:${email}`}>{email}</a>
	</div>
);

export default Email;