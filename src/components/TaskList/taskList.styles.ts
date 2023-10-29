import { 
  ImageStyle, 
  StyleProp, 
  TextStyle, 
  ViewStyle 
} from "react-native";
import { colors, typography } from "../../styles";


export const listEmpty: StyleProp<ViewStyle> = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  borderStyle: 'solid',
  borderTopWidth: 0.5,
  borderTopColor: colors.base.gray300,
  paddingTop: 32
}

export const listEmptyIcon: StyleProp<ImageStyle> = {
  width: 56,
  height: 56
}

export const listEmptyTitle: StyleProp<TextStyle> = {
  marginTop: 24,
  marginBottom: 8,
  color: colors.base.gray300,
  fontFamily: typography.bold,
  fontSize: typography.fontSize.large
}

export const listEmptyText: StyleProp<TextStyle> = {
  color: colors.base.gray300,
  fontFamily: typography.regular,
  fontSize: typography.fontSize.medium
}
