import React, {useState} from "react";
import {Text, View} from "react-native";
import styleHome from "./StylesHome";
import stylesHome from "./StylesHome";
import {CalendarWeek} from "../../components/WeekCalendar";
import stylesCalendar from "../Calendar/StylesCalendar";
import {SimpleRecipeCard} from "../../components/RecipeCard";
import {AppColors} from "../../theme/AppTheme";

function HomeScreen() {
    const colors = [
        { id: 0, color: AppColors.white },
        { id: 1, color: AppColors.secondary },
        { id: 2, color: AppColors.primary },
    ];
    const [selectedDate, setSelectedDate] = useState<string>("");
    return (
        <View style={stylesHome.mainContainer}>
            <Text style={styleHome.textTitleUsername}>HELLO user!</Text>

            {/* -- calendario de la semana */}
            <View style={stylesCalendar.calendarContainerHome}>
                <CalendarWeek onDateSelected={setSelectedDate}/>
            </View>

            <Text style={styleHome.textTodaysMenu}>
                Today's <Text style={{ color: AppColors.primary }}>menu!</Text>
            </Text>

            {/* -- tarjetas de recetas home -- cuando no tienen nada */}
            <View style={styleHome.simpleCard}>
                <Text style={styleHome.textSubtitle}>Breakfast</Text>
                <SimpleRecipeCard recipe={[]} />
            </View>

            <View style={styleHome.simpleCard}>
                <Text style={styleHome.textSubtitle}>Lunch</Text>
                <SimpleRecipeCard recipe={[]}  />
            </View>

            <View style={styleHome.simpleCard}>
                <Text style={styleHome.textSubtitle}>Dinner</Text>
                <SimpleRecipeCard recipe={[]} />
            </View>
        </View>
    );
}
export default HomeScreen