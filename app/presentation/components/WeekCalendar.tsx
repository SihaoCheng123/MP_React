import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {AppColors} from "../theme/AppTheme";
import {useState} from "react";

interface ICalendarWeekProps {
    onDateSelected: (date: string) => void;
}

export const CalendarWeek = ({onDateSelected}: ICalendarWeekProps) => {
    const formatDate = (date: Date): string => {
        return date.toISOString().split("T")[0]
    }

    const today = new Date();
    const actualDay = today.getDay()
    const diff = today.getDate() - actualDay + (actualDay == 0 ? - 6 : 1)
    const numbersOfWeek: number[] = []
    const daysOfWeek = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
    const datesOfWeek : string[] = []
    for (let i = 0; i < daysOfWeek.length; i++) {
        const date = new Date(today)
        date.setDate(diff + i -1)
        numbersOfWeek.push(diff + i - 1)
        datesOfWeek.push(formatDate(date))
    }

    const [selectedDay, setSelectedDay] = useState<number>(actualDay)

    const pressedDay = (index: number) =>{
        setSelectedDay(index)
        const selectedDate = datesOfWeek[index]
        onDateSelected(selectedDate)
        console.log(datesOfWeek[index])
    }
    return (
        <View style={styleCalendarWeek.mainContainer}>
            <FlatList contentContainerStyle={{display:"flex", flexDirection:"row", alignSelf:"center"}}
                      horizontal={false}
                      data={daysOfWeek} renderItem={(item) =>
                <TouchableOpacity style={{...styleCalendarWeek.defaultStyle, backgroundColor: selectedDay === item.index ? AppColors.primary : 'transparent'}}
                                  onPress={() =>{pressedDay(item.index)}}>
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