import React from "react";
import { applyMiddleware, combineReducers, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import placesReducer from "./store/reducers/place";
import MainNavigation from "./navigation/MainNavigation";
import { dbInit } from "./helpers/db";

dbInit()
	.then(() => {
		console.log("database initialized");
	})
	.catch((err) => {
		console.log("database initialization failed");
		console.log(err);
	});

const rootReducer = combineReducers({
	places: placesReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
	return (
		<Provider store={store}>
			<MainNavigation />
		</Provider>
	);
}
