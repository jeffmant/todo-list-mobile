import { Image, Text, View } from "react-native";
import { styles } from "./header.styles";

export function Header() {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../../assets/icons/rocket.png')} />
            <Text style={{ ...styles.title, ...styles.initialText }}>to</Text>
            <Text style={{ ...styles.title, ...styles.finalText }}>do</Text>
        </View>
    )
}