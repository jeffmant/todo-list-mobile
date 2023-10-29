import { colors, typography } from "../../styles";

export const styles = {
  listEmpty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  } as any,
  listEmptyIcon: {
    width: 56,
    height: 56
  },
  listEmptyTitle: {
    marginTop: 24,
    marginBottom: 8,
    color: colors.base.gray300,
    fontFamily: typography.bold,
    fontSize: typography.fontSize.large
  },
  listEmptyText: {
    color: colors.base.gray300,
    fontFamily: typography.regular,
    fontSize: typography.fontSize.medium
  }
}