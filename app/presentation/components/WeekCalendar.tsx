import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {AppColors} from "../theme/AppTheme";
import {useState} from "react";


export const CalendarWeek = () => {
    const today = new Date();
    const actualDay = today.getDay()
    const diff = today.getDate() - actualDay + (actualDay == 0 ? - 6 : 1)
    const numbersOfWeek: number[] = []
    const daysOfWeek = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
    for (let i = 0; i < daysOfWeek.length; i++) {
        numbersOfWeek.push(diff + i - 1)
    }

    const [selectedDay, setSelectedDay] = useState<number>(actualDay)

    const pressedDay = (index: number) =>{
        setSelectedDay(index)
    }
    return (
        <View style={styleCalendarWeek.mainContainer}>
            <FlatList contentContainerStyle={{display:"flex", flexDirection:"row", alignSelf:"center"}}
                      horizontal={false}
                      data={daysOfWeek} renderItem={(item) =>
                <TouchableOpacity style={{...styleCalendarWeek.defaultStyle, backgroundColor: selectedDay === item.index ? AppColors.primary : 'transparent'}} onPress={() =>{pressedDay(item.index)}}>
                    <View>
                        <Text style={{...styleCalendarWeek.weekdayName, color: selectedDay === item.index ? AppColors.white: AppColors.black}}>{daysOfWeek[item.index]}</Text>
                        <Text style={{...styleCalendarWeek.weekdayNumber, color: selectedDay === item.index ? AppColors.white : AppColors.black}}>{numbersOfWeek[item.index]}</Text>
                    </View>
                </TouchableOpacity>

                    }
            ></FlatList>
        </View>

    )
}

const styleCalendarWeek = StyleSheet.create({
    mainContainer: {
        width: "100%",
        marginBottom: 24
    },
    defaultStyle: {
    flexDirection: "column",
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
        alignSelf: "center"
    },
    weekdayNumber: {
        fontSize: 12,
        color: AppColors.black,
        marginTop: 5,
        alignSelf: "center"
    },
})