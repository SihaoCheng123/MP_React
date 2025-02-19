import{StyleSheet} from "react-native";
import {AppColors} from "../../theme/AppTheme";

const styleHome = StyleSheet.create({

    mainContainer:{
        backgroundColor: AppColors.background,
        width: '100%',
        height: '100%',
    },

    textTitleUsername:{
        color: AppColors.black,
        marginTop: 80,
        fontSize: 30,
        fontFamily: 'Montserrat',
        textAlign: 'left',
        justifyContent: 'center',
        marginLeft: 30,
    },

    textTodaysMenu:{
        color: AppColors.black,
        fontSize: 24,
        fontFamily: 'Montserrat',
        textAlign: 'left',
        marginLeft: 50,
        marginBottom: 10,
    },

    textSubtitle:{
        color: AppColors.black,
        marginTop: 20,
        fontSize: 16,
        fontFamily: 'Montserrat',
        textAlign: 'left',
        marginLeft: 50,
        marginBottom: 10,
    },

    simpleCard:{
        marginTop: 5,
        marginBottom: 5,
    }
})

export default styleHome;