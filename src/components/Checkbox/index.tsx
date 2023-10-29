import { Image, View } from "react-native";
import { styles } from "./checkbox.styles";

export function Checkbox({ isChecked }: { isChecked: boolean }) {
    return (
        <Image style={styles.container} source={isChecked ? require('../../../assets/icons/checked.png') : require('../../../assets/icons/unchecked.png')} />
    )
}