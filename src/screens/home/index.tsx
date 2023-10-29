import { View } from "react-native";
import { styles } from "./home.styles";
import { Input } from "../../components/Input/Input";

export function Home() {
    return (
			<>
        <View style={styles.head} />
        <View style={styles.container}>
            <Input />
        </View>
			</>
    )
}