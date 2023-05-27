import { instagramLink, spotifyPage, tiktokLink, youtubeLink } from "../constants";
import { LinkIcon } from "./LinkIcon";

export const Links = () => {
	return (
		<div style={{ width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
			<LinkIcon
				href={spotifyPage}
				alt={'spotify-link'}
				icon={'ri-spotify-fill'}
			/>
			<LinkIcon
				href={instagramLink}
				alt={'instagram-link'}
				icon={'ri-instagram-fill'}
			/>
			<LinkIcon
				href={youtubeLink}
				alt={'youtube-link'}
				icon={'ri-youtube-fill'}
			/>
			<LinkIcon
				href={tiktokLink}
				alt={'tiktok-link'}
				icon={'ri-tiktok-fill'}
			/>
		</div>
	);
};