import { Formik } from "formik";
import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import MainBtn from "../components/elements/buttons/MainBtn";
import AppTextInput from "../components/elements/forms/AppTextInput";
import ImageSelector from "../components/elements/forms/ImageSelector";
import LocationPicker from "../components/elements/forms/LocationPicker";
import { addPlace } from "../store/actions/place";
import LayoutStyle from "../styles/LayoutStyle";
import TextStyle from "../styles/TextStyle";

const NewPlaceScreen = ({ navigation }) => {
	const [image, setImage] = useState(null);
	const dispatch = useDispatch();

	const imageTakenHandler = (imagePath) => {
		setImage(imagePath);
	};

	return (
		<ScrollView style={LayoutStyle.background}>
			<Formik
				initialValues={{ title: "" }}
				onSubmit={(values) => {
					dispatch(addPlace(values.title, image));
					console.log(values);
					navigation.navigate("PlaceList");
				}}
			>
				{({ values, handleSubmit, handleChange }) => (
					<View style={LayoutStyle.container}>
						<Text style={TextStyle.inputLabel}>Title</Text>
						<AppTextInput value={values.title} onChangeText={handleChange("title")} />
						<ImageSelector onImageTaken={imageTakenHandler} />
						<LocationPicker />
						<MainBtn title="Save Place" onPress={handleSubmit} />
					</View>
				)}
			</Formik>
		</ScrollView>
	);
};

export default NewPlaceScreen;
