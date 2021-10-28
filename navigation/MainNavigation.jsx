import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PlacesListScreen from "../screens/PlacesListScreen";
import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";
import MapScreen from "../screens/MapScreen";
import HeaderStyle from "../styles/HeaderStyle";
import HeaderBtn from "../components/elements/buttons/HeaderBtn";

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={HeaderStyle} initialRouteName="PlaceList">
				<Stack.Screen
					name="PlaceList"
					component={PlacesListScreen}
					options={() => ({
						headerRight: (props) => <HeaderBtn {...props} />,
					})}
				/>
				<Stack.Screen
					name="PlaceDetail"
					component={PlaceDetailScreen}
					options={({ route }) => ({
						title: route.params.title,
					})}
				/>
				<Stack.Screen name="NewPlace" component={NewPlaceScreen} />
				<Stack.Screen name="Map" component={MapScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default MainNavigation;
