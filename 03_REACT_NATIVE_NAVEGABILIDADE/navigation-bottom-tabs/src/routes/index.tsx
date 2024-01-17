import { NavigationContainer } from "@react-navigation/native";
import { BottonTabsRoutes } from "./bottom-tabs.routes";

export function Routes() {
    return (
        <NavigationContainer>
            <BottonTabsRoutes/>
        </NavigationContainer>
    )
}