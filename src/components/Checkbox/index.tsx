import { Image, TouchableOpacity, View } from "react-native";
import * as styles from "./checkbox.styles";

export function Checkbox({ isChecked, handleCheck }: { isChecked: boolean, handleCheck: () => void }) {
    return (
      <TouchableOpacity onPress={handleCheck}>
        <Image 
          style={styles.icon} 
          source={isChecked ? 
            require('../../../assets/icons/checked.png') : 
            require('../../../assets/icons/unchecked.png')
          }
        />
      </TouchableOpacity>
    )
}