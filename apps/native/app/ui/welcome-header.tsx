import { colors } from '@utils/colors'
import { Image, StyleSheet, Text, View } from 'react-native'

const heading = "Online marketplace for Used Goods"
const subheading = "Buy and sell used items in your local area, Chat directly with sellers, and make secure payments. Join our community of buyers and sellers today!"

export default function WelcomeHeader() {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/hero.png')}
                style={styles.image}
                resizeMode="cover"
            />
            <Text style={styles.heading}>{heading}</Text>
            <Text style={styles.subheading}>{subheading}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    image: {
        width: 200,
        height: 200,
    },
    heading: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        letterSpacing: 1,
        marginBottom: 5,
        color: colors.primary
    },
    subheading: {
        fontSize: 12,
        textAlign: 'center',
        lineHeight: 14,
        color: colors.primary
    },
})
