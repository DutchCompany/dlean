import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: colors.text
    },
    map: {
        width: '100%',
        height: '100%',
    },
})