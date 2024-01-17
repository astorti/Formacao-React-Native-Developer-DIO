import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import GallerytScreen from "../screens/GalleryScreen";
import { MaterialCommunityIcons} from '@expo/vector-icons'

const {Navigator, Screen } = createBottomTabNavigator()

export function BottonTabsRoutes() {
    return (
        <Navigator>
            <Screen
                name='home'
                component={HomeScreen}
                options={{
                    title: "Main",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="home"
                            color={'blue'}
                            size={size}
                        />
                    )
                }}
            />
            <Screen
                name='gallery'
                component={GallerytScreen}
                options={{
                    title: "Gallery",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="view-gallery"
                            color={'green'}
                            size={24}
                        />
                    )
                }}/>
        </Navigator>
    )
}