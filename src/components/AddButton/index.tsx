import { Image, TouchableOpacity } from "react-native";
import { styles } from "./addButton.styles";

export function AddButton({ disabled, onPress }: { disabled: boolean, onPress: () => void }) {
    return (
        <TouchableOpacity disabled={disabled} onPress={onPress} style={styles.button}>
            <Image style={styles.buttonIcon} source={require('../../../assets/icons/plus.png')} />
        </TouchableOpacity>
    )
}