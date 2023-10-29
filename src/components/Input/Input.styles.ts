import { StyleProp, TextStyle } from "react-native";
import { colors, typography } from "../../styles";


export const input: StyleProp<TextStyle> = {
  backgroundColor: colors.base.gray500,
  fontFamily: typography.regular,
  color: colors.base.gray100,
  width: '100%' as any,
  height: 54,
  borderRadius: 8,
  padding: 16,
  top: -50,
}

export const filledInput: StyleProp<TextStyle> = {
  ...input,
  borderColor: colors.purpleDark,
  borderWidth: 1,
}
  
export const placeholder: StyleProp<TextStyle> = {
  color: colors.base.gray300,
}
