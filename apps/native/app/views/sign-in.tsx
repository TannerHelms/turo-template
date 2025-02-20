import FormInput from "@ui/form-input";
import { Input, InputField, InputIcon, InputSlot } from "@ui/input";
import WelcomeHeader from "@ui/welcome-header";
import {
    Lock,
    Mail
} from "lucide-react-native";
import { StyleSheet, View } from "react-native";
export default function SignIn() {
    return (
        <View style={styles.container}>
            <WelcomeHeader />
            <View style={styles.formContainer}>
                <FormInput icon={Mail} />
                <FormInput icon={Lock} />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        width: "100%",
        justifyContent: "center",
        transform: [{
            translateY: "-10%"
        }]
    },
    formContainer: {
        marginTop: 15
    }
})