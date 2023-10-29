import { ImageStyle, StyleProp, ViewStyle } from "react-native";
import { colors } from "../../styles";


export const button: StyleProp<ViewStyle> = {
  backgroundColor: colors.blueDark,
  height: 52,
  width: 52,
  borderRadius: 8,
  padding: 16,
  top: -50,
  marginLeft: 4,
}

export const buttonIcon: StyleProp<ImageStyle> = {
  width: 20,
  height: 20
}
