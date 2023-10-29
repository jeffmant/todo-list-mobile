import { colors, typography } from "../../styles";

export const styles = {
    container: {
        width: '100%',
        height: 54,
        backgroundColor: colors.base.gray400,
        borderRadius: 8,
        marginBottom: 12,
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    } as any,
    text: {
        color: colors.base.gray100,
        fontFamily: typography.regular,
        fontSize: typography.fontSize.medium,
        flexShrink: 1,
        marginRight: 16,
        marginLeft: 16,
        textAlign: 'left',
    } as any,
    checkedText: {
      textDecorationLine: 'line-through', 
      textDecorationStyle: 'solid'
    },
    icon: {
        width: 32,
        height: 32,
        padding: 8,
        '&:hover': {
            backgroundColor: colors.base.gray500,
            color: colors.feedback.danger
        }
    }
}