import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./auth-navigator";

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'red'
    }
}

export default function Navigator() {
    return (
        <NavigationContainer theme={MyTheme}>
            <AuthNavigator />
        </NavigationContainer>
    )
}