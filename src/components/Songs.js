import { Spotify } from "react-spotify-embed";
import { albumLink, songLink } from "../constants";

export const Songs = () => {
	return (
		<div
			style={{
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
				marginBottom: '7.5rem'
			}}
		>
			<Spotify style={{ margin: '0 5rem' }} link={songLink} />
			<Spotify style={{ margin: '0 5rem' }} link={albumLink} />
		</div>
	);
};