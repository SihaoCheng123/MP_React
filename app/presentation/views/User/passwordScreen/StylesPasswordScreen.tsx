import {StyleSheet} from "react-native";
import {AppColors} from "../../../theme/AppTheme";

const StylesPasswordScreen = StyleSheet.create ({
    mainContainer: {
        backgroundColor: AppColors.userProfileBackground,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },

    profileImageContainer: {
        alignItems: "center",
        marginBottom: 20,
    },

    input: {
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: "#fff",
    },
    saveButton: {
        backgroundColor: "#C3D38E",
        marginTop: 20,
        paddingVertical: 10,
        borderRadius: 20,
        alignItems: "center",
    },
    saveButtonText: {
        color: "#fff",
        fontWeight: "bold",
    },

    textTitle:{
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: 30,
        alignSelf: "flex-start",
        color: AppColors.black,
    },

    profileFormContainer: {
        backgroundColor: AppColors.background,
        width: "90%",
        padding: 20,
        borderRadius: 20,
    },
    label: {
        fontSize: 14,
        fontWeight: "bold",
        marginTop: 10,
        color: "#000",
    }
})

export default StylesPasswordScreen;