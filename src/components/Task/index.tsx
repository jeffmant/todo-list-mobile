import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./task.styles";
import { Checkbox } from "../Checkbox";
import { TaskType } from "../../types/task";

export function Task({ id, title, isChecked }: TaskType) {
    return (
        <View style={styles.container}>
            <Checkbox isChecked={isChecked} />
            
            <Text style={styles.text}>
                {title}
            </Text>

            <TouchableOpacity  style={styles.icon}>
                <Image source={require('../../../assets/icons/trash-red.png')} />
            </TouchableOpacity>
        </View>
    )
}