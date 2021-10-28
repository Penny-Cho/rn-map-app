import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Alert, Button, Image, Platform, StyleSheet, Text, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import AppColor from "../../../styles/AppColor";

const ImageSelector = ({ onImageTaken }) => {
	const [image, setImage] = useState(null);

	useEffect(() => {
		(async () => {
			if (Platform.OS !== "web") {
				const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
				if (status !== "granted") {
					Alert.alert("Sorry, we need camera roll permissions to make this work!");
				}
			}
		})();
	}, []);

	const imageHandler = async () => {
		const result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		console.log(result);

		if (!result.cancelled) {
			setImage(result.uri);
			onImageTaken(result.uri);
		}
	};

	return (
		<View style={styles.imagePicker}>
			<View style={styles.imagePreview}>
				{image ? (
					<Image style={styles.image} source={{ uri: image }} />
				) : (
					<Text>no image paickerd yet</Text>
				)}
			</View>
			<Button title="Take Image" color={AppColor.primary} onPress={imageHandler} />
		</View>
	);
};

ImageSelector.propTypes = {
	onImageTaken: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
	imagePicker: {},
	imagePreview: {
		width: "100%",
		height: 200,
		marginBottom: 10,
		justifyContent: "center",
		alignItems: "center",
		borderColor: AppColor.line,
		borderWidth: 1,
	},
	image: {
		width: "100%",
		height: "100%",
	},
});

export default ImageSelector;
