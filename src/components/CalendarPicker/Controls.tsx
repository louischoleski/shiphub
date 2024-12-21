import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const Controls = ({
	label,
	styles,
	disabled,
	component,
	textStyles,
	onPressControl,
}) => (
	<TouchableOpacity
		style={styles}
		disabled={disabled}
		onPress={() => onPressControl()}
		hitSlop={{ top: 20, bottom: 20, left: 40, right: 40 }}
	>
		<View style={{opacity: disabled ? 0 : 1}}>
			{component || (
				<Text style={[textStyles]}>
					{label}
				</Text>
			)}
		</View>
	</TouchableOpacity>
);

export default Controls;
