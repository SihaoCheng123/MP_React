import {FlatList, StyleSheet, Text, View} from "react-native";
import {AppColors} from "../theme/AppTheme";


export const CalendarWeek = () => {
    const today = new Date();
    const actualDay = today.getDay()
    const diff = today.getDate() - actualDay + (actualDay == 0 ? - 6 : 1)
    const numbersOfWeek: number[] = []
    const daysOfWeek = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
    for (let i = 0; i < daysOfWeek.length; i++) {
        numbersOfWeek.push(diff + i - 1)
    }



    return (
        <View style={styleCalendarWeek.mainContainer}>
            <FlatList contentContainerStyle={{display:"flex", flexDirection:"row", alignSelf:"center"}}
                      horizontal={false}
                      data={daysOfWeek} renderItem={(item) =>

                <View style={[item.index == actualDay ? styleCalendarWeek.actualDay : styleCalendarWeek.eachDay]}>
                    <Text style={[item.index == actualDay ? styleCalendarWeek.actualWeekdayName : styleCalendarWeek.weekdayName]}>{daysOfWeek[item.index]}</Text>
                    <Text style={[item.index == actualDay ? styleCalendarWeek.actualWeekdayNumber : styleCalendarWeek.weekdayNumber]}>{numbersOfWeek[item.index]}</Text>
                </View>
                    }
            ></FlatList>
        </View>

    )
}

const styleCalendarWeek = StyleSheet.create({
    mainContainer: {
        width: "100%",
    },
    eachDay:{
        flexDirection: "column",
        alignItems: "center",
        borderRadius: 16,
        marginEnd: 8,
        width: 44,
        height: 62,
        alignContent: "center",
        justifyContent: "center",
    },
    actualDay:{
        flexDirection: "column",
        backgroundColor: AppColors.primary,
        alignItems: "center",
        borderRadius: 16,
        marginEnd: 8,
        width: 44,
        height: 62,
        alignContent: "center",
        justifyContent: "center",
    },
    weekdayName: {
        fontSize: 12,
        color: AppColors.grey,
    },
    actualWeekdayName:{
        fontSize: 12,
        color: AppColors.white,
    },
    weekdayNumber: {
        fontSize: 12,
        color: AppColors.black,
        marginTop: 5
    },
    actualWeekdayNumber:{
        fontSize: 12,
        color: AppColors.white,
        marginTop: 5
    }
})