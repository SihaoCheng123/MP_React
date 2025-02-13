import {StyleSheet} from "react-native";
import {AppColors, AppFonts} from "../../theme/AppTheme";

const stylesDetailedRecipe = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        position: 'relative',
    },
    imageContainer: {
        height: "35%",
        width: "100%",
    },
    viewWithImage:{
        width: '100%',
        height: '100%',
    },
    viewWithoutImage:{
        backgroundColor: AppColors.grey,
        width: '100%',
        height: '100%',
    },
    iconsContainer:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        position: "absolute",
        top: '15%',
        width: '85%',
        alignSelf: "center",
    },
    recipeDetailsContainer: {
        backgroundColor: AppColors.white,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        width: '100%',
        height: '100%',
        position: "absolute",
        top: '30%'
    },
    recipeDetailsConstraintContainer:{
        width: '85%',
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 37,
        display: "flex",
        flexDirection: "column",
    },
    recipeName:{
        fontSize: 24,
        color: AppColors.black,
        fontFamily: AppFonts.poppinsRegular
    },
    highlightText:{
        color: AppColors.primary,
    },
    timeContainer:{
        display: "flex",
        flexDirection: "row",
        marginTop: 5,
        marginBottom: 14,
        alignItems:"center",
        height: 20
    },
    timeText:{
        fontSize: 16,
        color: AppColors.grey,
        marginStart: 20
    },
    servingsContainer:{
        display: "flex",
        flexDirection: "row",
    },
    servingsText:{
        fontFamily: AppFonts.poppinsRegular,
        fontWeight: "bold",
        fontSize: 16,
        marginEnd: 22
    },
    servingsAmountContainer:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    itemServingAmount:{
        marginHorizontal: 10
    },
    addText:{
        color: AppColors.secondary,
        textAlign: "right",
        fontSize: 16,
        fontFamily: AppFonts.poppinsMedium,
        marginVertical: 10,
        marginEnd: 10,
    },
    tabContainer:{
        backgroundColor: AppColors.cardsGreyBackgroundRegisterAndRecipes,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 15,
        marginTop: 13
    },
    eachTab:{
        width: "50%",
        justifyContent: "center",
        alignItems: "center",
    },
    tabContainerChosen: {
        width: "50%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: AppColors.primary,
        borderRadius: 15,
    },
    tabText:{
        fontSize: 18,
        fontFamily: AppFonts.poppinsMedium,
        paddingVertical: 15
    },
    tabTextChosen:{
        fontSize: 18,
        fontFamily: AppFonts.poppinsMedium,
        paddingVertical: 10,
        color: AppColors.white,
    }
})

export default stylesDetailedRecipe