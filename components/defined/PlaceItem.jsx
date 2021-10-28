import React from "react";
import PropTypes from "prop-types";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TextStyle from "../../styles/TextStyle";

const PlaceItem = ({ image, title, address, onPress }) => {
	return (
		<TouchableOpacity onPress={onPress} style={styles.root}>
			<Image style={styles.image} source={{ uri: image }} />
			<View style={styles.container}>
				<Text style={TextStyle.h4}>{title}</Text>
				<Text style={TextStyle.body1}>{address}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	root: {
		marginVertical: 20,
	},
	image: {
		width: "100%",
		height: 100,
	},
	container: {
		paddingVertical: 20,
	},
});

PlaceItem.propTypes = {
	onPress: PropTypes.func,
	image: PropTypes.string,
	title: PropTypes.string.isRequired,
	address: PropTypes.string.isRequired,
};

PlaceItem.defaultProps = {
	onPress: () => {},
	image: "https://cdn.pixabay.com/photo/2015/09/02/13/18/female-918986_960_720.jpg",
};

export default PlaceItem;
