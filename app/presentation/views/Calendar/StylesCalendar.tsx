import {StyleSheet} from "react-native";
import {AppColors} from "../../theme/AppTheme";

const stylesCalendar = StyleSheet.create({
    mainContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: AppColors.background
    },
    calendarContainer: {
        marginTop: 60,
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: AppColors.grey
    },
    calendarTexts:{
        alignSelf: "center",
        display: "flex",
        flexDirection: "column",
    },
    modalContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#00000080',
        display: "flex",
        flexDirection: "column",
    },
    modal:{
        width: "100%",
    },
    calendarChange:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
        marginBottom: 35
    },
    arrow:{
        justifyContent: "center",
        alignSelf: "center"
    },
    monthText: {
        fontSize: 20,
        fontWeight: "bold",
        color: AppColors.black,
    },
    yearText: {
        fontSize: 12,
        color: AppColors.secondary,
        textAlign: "center",
    },
    mealsAndRecipes:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    meals:{
        flexDirection: "column",
        justifyContent: "space-evenly",
        width: "30%",
        borderEndWidth: 1,
        borderEndColor: AppColors.grey,
        height: '100%',
        alignItems: "center"
    },
    recipes:{
        width: "70%",
        alignContent: "center",
        justifyContent: "center",
    }
})

export default stylesCalendar;