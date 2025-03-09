import {StyleSheet} from "react-native";
import {AppColors} from "../../../theme/AppTheme";

const stylesPreparedRecipes = StyleSheet.create({
    mainContainer: {
        backgroundColor: AppColors.userProfileBackground,
        width: "100%",
        height: "100%",
    },
    arrowBack:{
      marginTop: 50,
        marginStart: 50
    },
    textTitle:{
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: 30,
        color: AppColors.black,
        textAlign: "center"
    },
    recipesContainer: {
        width: "100%"
    }
})

export default stylesPreparedRecipes;