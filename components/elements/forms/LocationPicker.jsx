import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import { StyleSheet, Text, View } from "react-native";
import AppColor from "../../../styles/AppColor";

const LocationPicker = () => {
	const [location, setLocation] = useState(null);
	const [errorMsg, setErrorMsg] = useState(null);

	useEffect(() => {
		(async () => {
			const { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== "granted") {
				setErrorMsg("위치 정보 접근이 거부되었습니다.");
				return;
			}

			const selectedLocation = await Location.getCurrentPositionAsync({});
			setLocation({
				lat: selectedLocation.coords.latitude,
				lng: selectedLocation.coords.longitude,
			});
		})();
	}, []);

	let text = "Waiting..";
	if (errorMsg) {
		text = errorMsg;
	} else if (location) {
		text = JSON.stringify(location);
	}

	return (
		<View style={styles.locationPicker}>
			<View style={styles.mapPreview}>
				<Text>{text}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	locationPicker: {
		marginBottom: 15,
	},
	mapPreview: {
		marginBottom: 10,
		width: "100%",
		height: 150,
		borderColor: AppColor.line,
		borderWidth: 1,
	},
});

export default LocationPicker;
