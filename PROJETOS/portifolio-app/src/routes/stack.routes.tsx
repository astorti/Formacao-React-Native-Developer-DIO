import { createStackNavigator } from "@react-navigation/stack";
const { Screen, Navigator } = createStackNavigator()
import Home from "../screens/HomeScreen";
import Skills from "../screens/SkillsScreen";

export function StackRoutes() {
    return (
        <Navigator>
            <Screen
                name="home"
                component={Home}
                options={{
                    title: "Perfil",
            }}/>
            <Screen
                name="skills"
                component={Skills}
                options={{
                    title: 'Skills',
                }}/>
        </Navigator>
    )
}