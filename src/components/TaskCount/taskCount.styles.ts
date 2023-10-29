import { colors, typography } from "../../styles";

export const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16
  } as any,
  todoText: {
    fontFamily: typography.bold,
    fontSize: typography.fontSize.medium,
    color: colors.blue
  },
  doneText: {
    fontFamily: typography.bold,
    fontSize: typography.fontSize.medium,
    color: colors.purple
  },
  count: {
    backgroundColor: colors.base.gray400,
    width: 24,
    height: 19,
    marginLeft: 2,
    borderRadius: 100,
    padding: 2,
  },
  countText: {
    color: colors.base.gray200,
    marginLeft: 2
  }
}