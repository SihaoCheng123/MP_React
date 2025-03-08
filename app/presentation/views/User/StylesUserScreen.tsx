import { StyleSheet } from "react-native";
import { AppColors } from "../../theme/AppTheme";

const stylesUserScreen = StyleSheet.create({
    mainContainer: {
        backgroundColor: AppColors.userProfileBackground,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    imageContainer: {
        alignSelf: "center",
        marginTop: 80,
        width: 150,
        height: 150,
        borderRadius: 75,
    },
    image: {
        alignSelf: "center",
        justifyContent: "center",
    },
    text: {
        marginTop: 25,
        justifyContent: "center",
        alignSelf: "center",
        fontSize: 18,
        fontFamily: "Poppins",
    },
    textAccount: {
        fontSize: 18,
        fontFamily: "Poppins",
        paddingBottom: 15,
    },
    boxAccountContainer: {
        marginTop: 70,
        marginStart: 20,
        marginEnd: 20,
    },
    boxContainer: {
        backgroundColor: AppColors.background,
        borderRadius: 25,
        padding: 10,
    },
    rowContainer: {
        backgroundColor: AppColors.background,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 30,
        alignItems: "center",
    },
    iconsAccountContainer: {
        width: 20,
        height: 20,
    },

    profileImageContainer: {
        alignItems: "center",
        marginBottom: 20,
    },
    profileImage: {
        width: 130,
        height: 130,
        borderRadius: 60,
    },
    editButton: {
        marginTop: 10,
        backgroundColor: "#fff",
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    editText: {
        color: "#000",
        fontWeight: "bold",
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
        backgroundColor: "#C3D38E", // Color verde claro
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
    }
});

export default stylesUserScreen;
