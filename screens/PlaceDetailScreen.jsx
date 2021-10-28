import React from "react";
import { Text, View } from "react-native";
import LayoutStyle from "../styles/LayoutStyle";

const PlcaeDetailScreen = ({ route }) => {
	const { title } = route.params;

	return (
		<View style={LayoutStyle.defaultScreen}>
			<Text>{title}</Text>
		</View>
	);
};

export default PlcaeDetailScreen;
