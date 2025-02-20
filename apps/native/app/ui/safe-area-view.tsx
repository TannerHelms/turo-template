import React from 'react'
import { Platform, StatusBar, StyleSheet, SafeAreaView as SafeArea } from 'react-native'

export default function SafeAreaView({ children, style }: { children: React.ReactNode; style?: object }) {
    return (
        <SafeArea style={[styles.container, style]}>
            {children}
        </SafeArea>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        width: "100%",
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // Adjust for Android status bar
    },
})