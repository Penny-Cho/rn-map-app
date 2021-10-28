import React, { useEffect } from "react";
import { FlatList, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import PlaceItem from "../components/defined/PlaceItem";
import { getPlaces } from "../store/actions/place";
import LayoutStyle from "../styles/LayoutStyle";

const PlacesListScreen = ({ navigation }) => {
	const places = useSelector((state) => state.places.places);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPlaces());
	}, [dispatch]);

	return (
		<View style={LayoutStyle.container}>
			<FlatList
				data={places}
				renderItem={({ item }) => {
					return (
						<PlaceItem
							onPress={() =>
								navigation.navigate("PlaceDetail", {
									title: item.title,
									id: item.id,
								})
							}
							title={item.title}
							image={item.imageUri}
							address="123"
						/>
					);
				}}
			/>
		</View>
	);
};

export default PlacesListScreen;
