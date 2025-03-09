import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {AppColors} from "../theme/AppTheme";
import {useState} from "react";

interface ICalendarWeekProps {
    onDateSelected: (date: string) => void;
}

export const CalendarWeek = ({onDateSelected}: ICalendarWeekProps ) => {


    const formatDate = (date: Date): string => {
        return date.toISOString().split("T")[0]
    }

    const today = new Date();
    const actualDay = today.getDay(); // Día de la semana (0-6)
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - actualDay + (actualDay === 0 ? -6 : 1)); // Lunes de la semana actual

    const numbersOfWeek: number[] = [];
    const daysOfWeek = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
    const datesOfWeek: string[] = [];

    for (let i = 0; i < daysOfWeek.length; i++) {
        const date = new Date(startOfWeek);
        date.setDate(startOfWeek.getDate() + i); // Sumamos días desde el lunes
        numbersOfWeek.push(date.getDate());
        datesOfWeek.push(formatDate(date));
    }

    const [selectedDay, setSelectedDay] = useState<number>(actualDay);

    const pressedDay = (index: number) => {
        setSelectedDay(index);
        const selectedDate = datesOfWeek[index];
        onDateSelected(selectedDate);
        console.log("Fecha seleccionada:", selectedDate);
    };
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