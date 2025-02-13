import{StyleSheet} from "react-native";
import {AppColors} from "../../theme/AppTheme";

const styleHome = StyleSheet.create({

    mainContainer:{
        backgroundColor: AppColors.background,
        width: '100%',
        height: '100%',
    },

   /* textTitleContainer:{
        alignSelf: 'center',
        width:'100%',
        marginTop: 100,
        color: AppColors.black,
        fontFamily: 'Poppins',
        fontWeight: 'bold',
    },
    */

    textTitleUsername:{
        color: AppColors.black,
        marginTop: 80,
        fontSize: 30,
        fontFamily: 'Montserrat',
        textAlign: 'left',
        justifyContent: 'center',
        marginLeft: 20,

    }
})

export default styleHome;