import { ImageStyle, StyleProp, TextStyle, ViewStyle } from "react-native";
import { colors, typography } from "../../styles";


export const container: StyleProp<ViewStyle> = {
  width: '100%',
  height: 54,
  backgroundColor: colors.base.gray400,
  borderRadius: 8,
  marginBottom: 12,
  padding: 16,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
}

export const text: StyleProp<TextStyle> = {
  color: colors.base.gray100,
  fontFamily: typography.regular,
  fontSize: typography.fontSize.medium,
  flexShrink: 1,
  marginRight: 16,
  marginLeft: 16,
  textAlign: 'left',
}

export const checkedText: StyleProp<TextStyle> = {
  ...text,
  textDecorationLine: 'line-through', 
  textDecorationStyle: 'solid'
}
 
export const icon: StyleProp<ImageStyle> = {
  width: 32,
  height: 32,
  padding: 8,
}
