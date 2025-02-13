import {StyleSheet} from "react-native";
import {AppColors, AppFonts} from "../../theme/AppTheme";

const stylesAddRecipe = StyleSheet.create({
    mainContainer: {
        backgroundColor: AppColors.background,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    btnBackContainer:{
        position: 'absolute',
        top: 35,
        left: 20,
    },
    addTextContainer:{
        marginTop: 36,
        marginBottom: 20,
    },
    addText: {
        fontFamily: AppFonts.poppinsRegular,
        fontSize: 24,
        color: AppColors.black,
    },
    textHighlight:{
        color: AppColors.primary,
    },
    constraintContainer:{
        width: '85%',
    },
    formInputContainer:{
        borderColor: AppColors.cardCategoryGrey,
        borderWidth: 1,
        paddingHorizontal: 15,
        borderRadius: 12,
        width: '100%',
        backgroundColor: AppColors.white,
        marginBottom: 18,
        alignSelf: "flex-start",
    },
    iconInput:{
        justifyContent: "center",
        alignSelf: "center",
    },
    addNew:{
        color: AppColors.primary,
        fontFamily: AppFonts.poppinsRegular,
        fontSize: 14,
        marginBottom: 18,
        marginTop: 8,
    },
    categoryText:{
        fontFamily: AppFonts.poppinsRegular,
        fontSize: 18,
        marginBottom: 17
    },
    eachCategoryCard:{
        borderRadius: 10,
        marginBottom: 10,
        marginEnd: 10
    },
    eachCategoryText:{
        fontFamily: AppFonts.poppinsRegular,
        fontSize: 16,
        color: AppColors.grey,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    btnContainer:{
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
    },
    btn:{
        width: '50%',
        backgroundColor: AppColors.primary,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    btnText:{
        paddingHorizontal: 30,
        paddingVertical: 15,
        color: AppColors.white,
        fontFamily: AppFonts.poppinsRegular,
    }
})

export default stylesAddRecipe;