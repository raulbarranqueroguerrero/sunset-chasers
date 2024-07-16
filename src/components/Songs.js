import { Spotify } from "react-spotify-embed";
import {
	// albumLink,
	// songLink
}
	from "../constants";
import { isMobile } from "../utils/screen";
import Youtube from "./Youtube";

export const Songs = () => {
	return (
		<div
			style={{
				width: '100%',
				height: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				marginBottom: isMobile ? '6rem' : '',
				// flexDirection: isMobile && 'column',
			}}
		>
			{/* <Spotify
				link={songLink}
				style={{ marginRight: !isMobile && '1rem' }}
			/>
			<Spotify
				link={albumLink}
				wide={isMobile}
				style={{
					margin: !isMobile && '0 5rem',
					width: isMobile && '90%'
				}}
			/> */}
			<Youtube
				src={'https://www.youtube.com/embed/U79i6P0yXwk?si=rhydz0jVNN7VE7CT'}
				title={'When You Got Me'}
				width={isMobile ? 300 : 1120}
				height={isMobile ? 180 : 630}
			/>
		</div >
	);
};