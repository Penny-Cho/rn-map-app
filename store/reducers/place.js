import Place from "../../models/place";
import { ADD_PLACE, GET_PLACES } from "../actions/place";

const initialState = {
	places: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_PLACES: {
			return {
				places: action.places.map(
					(pl) => new Place(pl.id.toString(), pl.title, pl.imageUri)
				),
			};
		}
		case ADD_PLACE: {
			const newPlace = new Place(
				action.placeData.id.toString(),
				action.placeData.title,
				action.placeData.imageUri
			);
			return {
				places: state.places.concat(newPlace),
			};
		}
		default: {
			return state;
		}
	}
};
