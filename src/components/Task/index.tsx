import { Image, Text, TouchableOpacity, View } from "react-native";
import * as styles from "./task.styles";
import { Checkbox } from "../Checkbox";
import { TaskType } from "../../types/task";

export function Task(
  { task, handleCheck, handleDelete }: 
  { task: TaskType, handleCheck: () => void, handleDelete: () => void }
) {
    return (
        <View style={styles.container}>
            <Checkbox handleCheck={handleCheck} isChecked={task.isChecked} />
            
            <Text style={
              task.isChecked ? 
              styles.checkedText : 
              styles.text
            }>
                {task.title}
            </Text>

            <TouchableOpacity onPress={handleDelete} style={styles.icon}>
                <Image source={require('../../../assets/icons/trash-red.png')} />
            </TouchableOpacity>
        </View>
    )
}