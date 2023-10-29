import { Image, TouchableOpacity } from "react-native";
import { styles } from "./addButton.styles";

export function AddButton() {
    return (
        <TouchableOpacity style={styles.button}>
            <Image style={styles.buttonIcon} source={require('../../../assets/icons/plus.png')} />
        </TouchableOpacity>
    )
}