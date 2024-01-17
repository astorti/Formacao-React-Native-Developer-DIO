import { createDrawerNavigator } from "@react-navigation/drawer";
const { Screen, Navigator } = createDrawerNavigator()
import HomeScreen from "../screens/HomeScreen";
import GallerytScreen from "../screens/GalleryScreen";

export function DrawerRoutes() {
    return (
        <Navigator>
            <Screen
                name="home"
                component={HomeScreen}
                options={{
                    title: "Main Menu",
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