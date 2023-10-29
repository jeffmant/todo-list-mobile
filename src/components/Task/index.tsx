import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./task.styles";
import { Checkbox } from "../Checkbox";

export function Task() {
    return (
        <View style={styles.container}>
            <Checkbox isChecked={true} />
            
            <Text style={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Text>

            <TouchableOpacity  style={styles.icon}>
                <Image source={require('../../../assets/icons/trash-red.png')} />
            </TouchableOpacity>
        </View>
    )
}