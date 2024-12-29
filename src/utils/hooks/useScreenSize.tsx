import React from 'react';
import { Dimensions } from 'react-native';

const useScreenSize = () => {
	// Initialize state with the current screen dimensions
	const [screenSize, setScreenSize] = React.useState({
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
	});

	React.useEffect(() => {
		// Handler to update state on dimension changes
		const handleResize = ({ window }) => {
			setScreenSize({
				width: window.width,
				height: window.height,
			});
		};

		// Add event listener for screen dimension changes
		const subscription = Dimensions.addEventListener('change', handleResize);

		// Cleanup the event listener on component unmount
		return () => subscription?.remove();
	}, []);

	return screenSize;
}

export default useScreenSize;

