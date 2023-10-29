import { StyleProp, TextStyle, ViewStyle } from "react-native";
import { colors, typography } from "../../styles";


export const container: StyleProp<ViewStyle> = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 16
}

export const todoText: StyleProp<TextStyle> = {
    fontFamily: typography.bold,
    fontSize: typography.fontSize.medium,
    color: colors.blue
}
export const doneText: StyleProp<TextStyle> = {
  fontFamily: typography.bold,
  fontSize: typography.fontSize.medium,
  color: colors.purple
}

export const countContainer: StyleProp<ViewStyle> = { 
  flexDirection: 'row', 
  justifyContent: 'center', 
  alignItems: 'center' 
}

export const count: StyleProp<ViewStyle> = {
  backgroundColor: colors.base.gray400,
  width: 24,
  height: 19,
  marginLeft: 8,
  borderRadius: 100,
  padding: 2,
}

export const countText: StyleProp<TextStyle> = {
  color: colors.base.gray200,
  marginLeft: 2
}
