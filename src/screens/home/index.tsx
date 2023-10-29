import { View } from "react-native";
import { styles } from "./home.styles";
import { Input } from "../../components/Input";
import { AddButton } from "../../components/AddButton";

export function Home() {
    return (
			<>
        <View style={styles.head} />
        <View style={styles.container}>
						<View style={styles.form}>
							<Input />
							<AddButton />
						</View>
        </View>
			</>
    )
}