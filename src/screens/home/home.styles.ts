import { colors } from "../../styles";

export const styles = {
    container: {
        flex: 1,
        backgroundColor: colors.base.gray600,
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
    form: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingRight: 16,
        paddingLeft: 16,
    } as any
}