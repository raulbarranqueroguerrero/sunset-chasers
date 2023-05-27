import 'remixicon/fonts/remixicon.css';
import React from "react";
import { Songs } from "./components/Songs";
import { Links } from "./components/Links";


const App = () => {
	return (
		<div
			style={{
				width: '100%',
				minHeight: '100vh',
				minWidth: '100vw',
				backgroundColor: '#282c34',
				alignItems: 'center',
				position: 'absolute'
			}}
		>
			<div
				style={{
					width: '100%',
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
				}}>
				<Songs />
				<Links />
			</div>
		</div >
	);
};

export default App;
