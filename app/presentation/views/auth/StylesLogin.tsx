import {StyleSheet} from "react-native";
import {AppColors} from "../../theme/AppTheme";

const stylesLogin = StyleSheet.create({
    mainContainer: {
        backgroundColor:  AppColors.background,
        width: '100%',
        height: '100%',
    },
    textCreateAccountContainer:{
        marginTop: 56,
        alignSelf: 'center',
        width:'70%',
    },
    textCreateAccount:{
        marginTop: 50,
        fontSize: 36,
        color: AppColors.black,
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        textAlign:'center',
        justifyContent:'center',
    },
    imageContainer: {
        alignSelf: 'center',
        marginTop: "40%",
    },
    logo:{
        margin: "auto",
        width: 325,
        height: 150,
    },
    normalText:{
        color: AppColors.grey,
        fontSize: 12,
        fontFamily: 'Poppins',
        justifyContent:'center',
        alignSelf: 'center',
        textAlign:'center',
    },
})

export default stylesLogin;