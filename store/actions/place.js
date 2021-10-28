import * as FileSystem from "expo-file-system";
import { dbFetchPlaces, dbInsertPlace } from "../../helpers/db";

export const ADD_PLACE = "ADD_PLACE";
export const GET_PLACES = "GET_PLACES";

export const addPlace = (title, imageUri) => {
	return async (dispatch) => {
		const fileName = imageUri.split("/").pop();
		const newPath = FileSystem.documentDirectory + fileName;

		try {
			await FileSystem.moveAsync({
				from: imageUri,
				to: newPath,
			});
			const dbResult = await dbInsertPlace(title, newPath, "Dummy Address", 15.6, 12.3);
			console.log("dbResult", dbResult);
			dispatch({
				type: ADD_PLACE,
				placeData: { id: dbResult.insertId, title, imageUri: newPath },
			});
		} catch (err) {
			console.log(err);
			throw err;
		}
	};
};

export const getPlaces = () => {
	return async (dispatch) => {
		try {
			const dbResult = await dbFetchPlaces();
			console.log("dbResultGetPlaces", dbResult);
			dispatch({
				type: GET_PLACES,
				places: dbResult.rows._array,
			});
		} catch (err) {
			console.log(err);
		}
	};
};
