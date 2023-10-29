import { Image, TouchableOpacity } from "react-native";
import { styles } from "./addButton.styles";

export function AddButton({ onPress }: { onPress: () => void }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Image style={styles.buttonIcon} source={require('../../../assets/icons/plus.png')} />
        </TouchableOpacity>
    )
}