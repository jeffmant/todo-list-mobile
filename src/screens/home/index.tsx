import { Text, View } from "react-native";
import { styles } from "./styles";

export function Home() {
    return (
        <>
        <View style={styles.head} />
        <View style={styles.container}>
            <Text style={styles.title}> Hello World </Text>
        </View>
        </>
    )
}