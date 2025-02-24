import {StyleSheet} from "react-native";
import {AppColors} from "../../theme/AppTheme";

const styleCartScreen = StyleSheet.create({
    mainContainer:{
        backgroundColor: AppColors.tertiary,
        width: '100%',
        height: '100%',
    },
    container:{
        marginTop: 100,
    },
    text:{
        fontSize: 24,
        fontFamily: 'Poppins-Medium',
        marginStart: 15,
    },
    productContainer:{
        marginTop: 30,
    }
})

export default styleCartScreen;