import {
	// instagramLink,
	// spotifyPage,
	// tiktokLink,
	youtubeLink
} from "../constants";

import { isMobile } from "../utils/screen";
import { LinkIcon } from "./LinkIcon";

export const Links = () => {
	return (
		<div style={{
			width: '50%',
			maxHeight: '100%',
			display: 'flex',
			margin: '0 auto',
			alignItems: 'center',
			justifyContent: 'center',
			position: !isMobile && 'absolute',
			bottom: !isMobile && '-25%',
			left: !isMobile && '25%',
			marginTop: isMobile & '2rem'
		}}>
			{/* <LinkIcon
				href={spotifyPage}
				alt={'spotify-link-icon'}
				icon={'ri-spotify-fill'}
			/>
			<LinkIcon
				href={instagramLink}
				alt={'instagram-link-icon'}
				icon={'ri-instagram-fill'}
			/> */}
			<LinkIcon
				href={youtubeLink}
				alt={'youtube-link-icon'}
				icon={'ri-youtube-fill'}
			/>
			<LinkIcon
				href={youtubeLink}
				alt={'soundcloud-link-icon'}
				icon={'ri-soundcloud-fill'}
			/>
			{/* <LinkIcon
				href={tiktokLink}
				alt={'tiktok-link-icon'}
				icon={'ri-tiktok-fill'}
			/> */}
		</div>
	);
};