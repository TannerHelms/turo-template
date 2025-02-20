import SafeAreaView from "@ui/safe-area-view";
import WelcomeHeader from "@ui/welcome-header";
import { colors } from "@utils/colors";
import React from "react";
import { View, Text, Image, StyleSheet, Platform, StatusBar, TextInput } from "react-native";

export default function SignIn() {
    return (
        <View style={styles.container}>
            <WelcomeHeader />
            <View style={styles.formContainer}>

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        width: "100%"
    },
    input: {
        width: "100%",
        padding: 8,
        borderRadius: 5,
        marginBottom: 10,
        color: colors.primary,
        borderWidth: 1,
    },
    image: {
        width: 200,
        height: 200,
    },
    formContainer: {
        marginTop: 15
    }
})