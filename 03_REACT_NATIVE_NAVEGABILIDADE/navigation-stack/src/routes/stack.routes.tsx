import { createStackNavigator } from "@react-navigation/stack";
const { Screen, Navigator } = createStackNavigator()
import HomeScreen from "../screens/HomeScreen";
import GallerytScreen from "../screens/GalleryScreen";

export function StackRoutes() {
    return (
        <Navigator>
            <Screen
                name="home"
                component={HomeScreen}
                options={{
                    title: "Main Menu",
                    headerShown: false
            }}/>
            <Screen
                name="gallery"
                component={GallerytScreen}
                options={{
                    title: 'Gallery',
                    headerTintColor: "green",
                }}/>
        </Navigator>
    )
}