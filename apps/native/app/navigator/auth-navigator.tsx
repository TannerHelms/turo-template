import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ForgetPassword from "@views/forget-password";
import SignIn from "@views/sign-in";
import SignUp from "@views/sign-up";


export type AuthNavigatorProps = {
    SignIn: undefined
    SignUp: undefined
    ForgetPassword: undefined
}

const Stack = createNativeStackNavigator<AuthNavigatorProps>();

export default function AuthNavigator() {
    return (
        <Stack.Navigator id={undefined} initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        </Stack.Navigator>
    )
}