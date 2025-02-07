import {StyleSheet} from "react-native";
import {AppColors} from "../../theme/AppTheme";

const styleRegister = StyleSheet.create({
    mainContainer:{
        backgroundColor:  AppColors.background,
        width: '100%',
        height: '100%',
    },
    textCreateAccountContainer:{
        alignSelf: 'center',
        width:'100%',
    },
    textCreateAccount:{
        marginTop: 100,
        fontSize: 36,
        color: AppColors.black,
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        textAlign:'center',
        justifyContent:'center',
    },
    textDescription:{
        fontSize: 12,
        fontFamily: 'Poppins',
        color: AppColors.black,
        fontWeight: 'bold',
        textAlign:'center',
        justifyContent:'center',
        marginTop: 15,
        marginBottom: 25,
    },
    mainContent:{
        width:'80%',
        alignSelf: 'center',
    },
    checkboxAndTextContainer:{
        display: 'flex',
        flexDirection:'row',
        width:'100%',
        marginBottom: 22
    },
    checkbox: {
        backgroundColor: AppColors.cardsGreyBackgroundRegisterAndRecipes,
        width: 19,
        height: 19,
        borderRadius: 3,
        marginEnd: 15 ,
    },
    normalText:{
        color: AppColors.grey,
        fontSize: 12,
        fontFamily: 'Poppins',
    },
    highlightedText:{
        color: AppColors.primary,
        fontSize: 12,
        fontFamily: 'Poppins',
    },
    signInText:{
        marginTop: 40,
        alignSelf: 'center',
    }
})

export default styleRegister