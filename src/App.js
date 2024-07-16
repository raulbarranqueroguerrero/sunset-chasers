import 'remixicon/fonts/remixicon.css';
import React from "react";
import { Songs } from "./components/Songs";
import { Links } from "./components/Links";
import { isMobile } from './utils/screen';
import Email from './components/Email';

const App = () => {
	return (
		<div
			style={{
				width: '100%',
				height: '100%',
				backgroundColor: '#282c34',
				alignItems: 'center',
				position: 'absolute'
			}}
		>
			<div
				style={{
					width: '100%',
					height: 'auto',
					position: 'absolute',
					top: '40%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					marginTop: isMobile && '1rem',
				}}>
				<Songs />
				<Links />
				<Email />
			</div>
		</div >
	);
};

export default App;
