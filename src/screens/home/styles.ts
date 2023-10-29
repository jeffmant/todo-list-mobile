import { colors, typography } from "../../styles";

export const styles = {
    container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: 24,
    },
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.base.gray700,
        height: 173,
        width: '100%'
    } as any,
    title: {
        fontSize: 24,
        color: colors.base.gray100,
        fontWeight: typography.fontWeight.bold,
        marginBottom: 16
    }
}