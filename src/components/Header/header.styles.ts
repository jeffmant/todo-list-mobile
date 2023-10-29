import { colors, typography } from "../../styles";

export const styles = {
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.base.gray700,
        height: 173,
        width: '100%'
    } as any,
    logo: {
        width: 20,
        height: 32,
        marginRight: 8
    },
    title: {
        fontFamily: typography.fontFamily,
        fontWeight: 'bold',
        fontSize: 32,
    } as any,
    initialText: {
        color: colors.blue
    },
    finalText: {
        color: colors.purpleDark
    }
}