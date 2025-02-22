import { Button, ButtonSpinner, ButtonText } from "@ui/button/index";
import FormDivider from "@ui/form-divider";
import FormInput from "@ui/form-input";
import FormNavigator from "@ui/form-navigator";
import { Input, InputField, InputIcon, InputSlot } from "@ui/input";
import KeyboardAvoidingView from "@ui/keyboard-avoiding-view";
import WelcomeHeader from "@ui/welcome-header";
import {
    Lock,
    Mail
} from "lucide-react-native";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import colors from "tailwindcss/colors"

export default function ForgetPassword() {
    const [isLoading, setIsLoading] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <KeyboardAvoidingView>
            <View style={styles.innerContainer}>
                <WelcomeHeader />
                <View style={styles.formContainer}>
                    <FormInput value={email} setValue={setEmail} icon={Mail} keyboardType="email-address" placeholder="Email" />
                    <FormInput value={password} setValue={setPassword} icon={Lock} placeholder="Password" secureTextEntry />
                    <FormInput value={password} setValue={setPassword} icon={Lock} placeholder="Password" secureTextEntry />
                    <Button className="bg-primary-default rounded-md h-16 my-4" disabled={isLoading} onPress={() => setIsLoading(true)}>
                        {isLoading && (
                            <ButtonSpinner color={colors.gray[400]} />
                        )}
                        <ButtonText className="text-white-default">
                            {isLoading ? "Signing In..." : "Request Link"}
                        </ButtonText>
                    </Button>
                    <FormDivider />
                    <FormNavigator leftText="Sign Up" rightText="Sign In" onPressLeft={() => { }} onPressRight={() => { }} />
                </View >
            </View >
        </KeyboardAvoidingView>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        padding: 15,
        width: "100%",
        justifyContent: "center",
    },
    formContainer: {
        marginTop: 15
    }
})