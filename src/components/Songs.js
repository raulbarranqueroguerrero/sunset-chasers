import { Spotify } from "react-spotify-embed";
import { albumLink, songLink } from "../constants";
import { isMobile } from "../utils/screen";

export const Songs = () => {
	return (
		<div
			style={{
				width: '100%',
				height: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				marginBottom: isMobile ? '6rem' : '7.5rem',
				flexDirection: isMobile && 'column',
			}}
		>
			<Spotify
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
			/>
		</div >
	);
};