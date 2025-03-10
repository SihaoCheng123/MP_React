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
    meals: {
        flexDirection: "column",
        justifyContent: "space-evenly", // Asegura que el contenido dentro del contenedor 'meals' tenga un espaciado adecuado
        width: "30%",
        borderRightWidth: 1, // Usamos borderRight para el borde vertical (si prefieres un borde izquierdo, usa borderLeft)
        borderRightColor: AppColors.grey, // Definir el color del borde
        paddingVertical: 10, // Añadido padding para un espaciado adecuado
        paddingHorizontal: 5, // Añadido padding para evitar que el texto o los elementos estén pegados al borde
        alignItems: "center", // Centra el contenido horizontalmente
    },
    recipes:{
        width: "70%",
        alignContent: "center",
        justifyContent: "center",
    },
    addBtnContainer:{
        position: "absolute",
        bottom: 20,
        right: 0,
},
    calendarContainerHome:{
        marginTop: 40,
        marginBottom: 20,
        alignItems: "center",
        borderBottomColor: AppColors.grey
    }
})

export default stylesCalendar;