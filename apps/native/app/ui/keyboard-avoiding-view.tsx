import { KeyboardAvoidingView as Keyboard, Platform, ScrollView, StyleSheet, View } from "react-native";
export default function KeyboardAvoidingView({ children }: { children: React.ReactNode }) {
    return (
        <Keyboard
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <ScrollView>
                {children}
            </ScrollView>
        </Keyboard>

    )
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