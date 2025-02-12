import {View} from "react-native";
import {Calendar} from "react-native-calendars";
import {AppColors} from "../theme/AppTheme";

// interface ICalendarProps{
//     onDayPress?: (date:string) => void,
// }

export const CalendarComponent = () =>{
    return (
        <View>
            <Calendar style={{width: '85%', borderRadius: 12, alignSelf: 'center', maxHeight: 380, maxWidth: 370}}
                      theme={{
                          arrowColor: AppColors.cardsGreyBackgroundRegisterAndRecipes,
                          todayTextColor: AppColors.black,
                          todayBackgroundColor: AppColors.primary,
                          textSectionTitleColor: AppColors.black,
                          selectedDayBackgroundColor: AppColors.background,
                          monthTextColor: AppColors.black,
                          textDayHeaderFontSize: 14,
                          textDayHeaderFontWeight: 'black',
                          textMonthFontWeight: 'bold',
                          textDayFontSize: 13,
                          textMonthFontSize: 14,
                      }}
                      hideArrows={false}
                      hideExtraDays={false}
                      enableSwipeMonths={true}
            />
        </View>
    )
}
