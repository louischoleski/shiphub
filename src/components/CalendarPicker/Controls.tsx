import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export interface IControlsProps {
	styles?: any;
	label?: string;
	component?: any;
	textStyles?: any;
	disabled?: boolean;
	onPressControl: () => void;
}

const Controls: React.FC<IControlsProps> = ({
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
		<View style={{ opacity: disabled ? 0 : 1 }}>
			{component || (
				<Text style={[textStyles]}>
					{label}
				</Text>
			)}
		</View>
	</TouchableOpacity>
);

export default Controls;
