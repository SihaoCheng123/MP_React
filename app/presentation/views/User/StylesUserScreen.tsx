import {StyleSheet} from 'react-native';
import {AppColors} from '../../theme/AppTheme';

const stylesUserScreen  = StyleSheet.create({
    mainContainer:{
        backgroundColor: AppColors.userProfileBackground,
        width: '100%',
        height: '100%',
    },
    imageContainer:{
        alignSelf: 'center',
        marginTop: 80,
        width: 150,
        height: 150,
        borderRadius: '50%'
    },
    image:{
        alignSelf: 'center',
        justifyContent: 'center',
    },
    text:{
        marginTop: 25,
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 18,
        fontFamily: 'Poppins',
    },
    textAccount:{
        fontSize: 18,
        fontFamily: 'Poppins',
        paddingBottom: 15,
    },
    boxAccountContainer:{
        marginTop: 70,
        marginStart: 20,
        marginEnd: 20,
    },
    boxContainer:{
        backgroundColor: AppColors.background,
        borderRadius: 25,
        padding: 10
    },
    rowContainer:{
        backgroundColor: AppColors.background,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 30,
        alignItems: 'center',
    },
    iconsAccountContainer:{
        width: 20,
        height: 20,
    }
})

export default stylesUserScreen;