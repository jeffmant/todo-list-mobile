import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./task.styles";
import { Checkbox } from "../Checkbox";

export function Task({ task }: { task: { id: number, title: string, isChecked: boolean } }) {
    return (
        <View style={styles.container}>
            <Checkbox isChecked={task.isChecked} />
            
            <Text style={styles.text}>
                {task.title}
            </Text>

            <TouchableOpacity  style={styles.icon}>
                <Image source={require('../../../assets/icons/trash-red.png')} />
            </TouchableOpacity>
        </View>
    )
}