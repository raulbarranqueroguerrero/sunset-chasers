export const LinkIcon = ({
	href,
	alt,
	icon
}) => {
	return (
		<a
			href={href}
			target="_blank"
			rel="noreferrer"
			alt={alt}
			className={icon}
			style={{ fontSize: '3.5rem', margin: '0 1rem' }}
		>
		</a>
	);
};