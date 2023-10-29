import { Image, View } from "react-native";
import { styles } from "./home.styles";
import { Input } from "../../components/Input";
import { AddButton } from "../../components/AddButton";
import { Header } from "../../components/Header";

export function Home() {
    return (
			<>
				<Header />
        <View style={styles.container}>
						<View style={styles.form}>
							<Input />
							<AddButton />
						</View>
        </View>
			</>
    )
}