import { ImageStyle, StyleProp, TextStyle, ViewStyle } from "react-native";
import { colors, typography } from "../../styles";


export const container: StyleProp<ViewStyle> = {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: colors.base.gray700,
  height: 173,
  width: '100%'
}

export const logo: StyleProp<ImageStyle> = {
  width: 20,
  height: 32,
  marginRight: 8
}
 
export const titleContainer: StyleProp<ViewStyle> = {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center'
}

export const title: StyleProp<TextStyle> = {
  fontFamily: typography.bold,
  fontSize: 32
}
 
export const initialText: StyleProp<TextStyle> = {
  ...title,
  color: colors.blue
}

export const finalText: StyleProp<TextStyle> = {
  ...title,
  color: colors.purpleDark
}
