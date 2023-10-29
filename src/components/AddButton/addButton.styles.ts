import { colors } from "../../styles";

export const styles = {
    button: {
        backgroundColor: colors.blueDark,
        height: 52,
        width: 52,
        borderRadius: 8,
        padding: 16,
        top: -50,
        marginLeft: 4,
        '&:active': {
            backgroundColor: colors.blue,
        }
    },
    buttonIcon: {
        width: 20,
        height: 20
    }
}