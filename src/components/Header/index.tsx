import { Image, Text, View } from "react-native";
import * as styles from "./header.styles";

export function Header() {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../../assets/icons/rocket.png')} />
            <View style={styles.titleContainer}>
              <View><Text style={styles.initialText}>to</Text></View>
              <View><Text style={styles.finalText}>do</Text></View>
            </View>
        </View>
    )
}