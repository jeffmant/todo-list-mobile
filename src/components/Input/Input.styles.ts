import { colors, typography } from "../../styles";

export const styles = {
  input: {
    backgroundColor: colors.base.gray500,
    fontFamily: typography.regular,
    color: colors.base.gray100,
    width: '100%' as any,
    height: 54,
    borderRadius: 8,
    padding: 16,
    top: -50,
  },
  filledInput: {
    borderColor: colors.purpleDark,
    borderWidth: 1,
  },
  placeholder: {
    color: colors.base.gray300,
  },
}