import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image} from "react-native";
import HomeScreen from "../views/Home/HomeScreen";
import CalendarScreen from "../views/Calendar/CalendarScreen";
import CartScreen from "../views/Cart/CartScreen";
import UserScreen from "../views/User/UserScreen";
import {AppColors} from "../theme/AppTheme";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
    return (
        <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: AppColors.primary,
        tabBarInactiveTintColor: AppColors.grey,
            headerShown: false
        }}>
            <Tab.Screen name="Home"
                        options={{title: "Home",
                            tabBarLabel:"Home",
                            tabBarIcon:({color}) =>(
                                <Image source={require("../../../assets/home.png")}
                                       style={{width:25, height:25, tintColor: color}}/>
                            )
                        }}
                        component={HomeScreen} />
            <Tab.Screen name="Calendar"
                        options={{title: "Calendar",
                            tabBarLabel:"Calendar",
                            tabBarIcon:({color}) =>(
                                <Image source={require("../../../assets/calendar.png")}
                                       style={{width:25, height:25, tintColor: color}}/>
                            )
                        }}
                        component={CalendarScreen} />
            <Tab.Screen name="Cart"
                        options={{title: "Cart",
                            tabBarLabel:"Cart",
                            tabBarIcon:({color}) =>(
                                <Image source={require("../../../assets/cart.png")}
                                       style={{width:25, height:25, tintColor: color}}/>
                            )
                        }}
                        component={CartScreen} />
            <Tab.Screen name="User"
                        options={{title: "User",
                            tabBarLabel:"User",
                            tabBarIcon:({color}) =>(
                                <Image source={require("../../../assets/user.png")}
                                       style={{width:25, height:25, tintColor: color}}/>
                            )
                        }}
                        component={UserScreen} />

        </Tab.Navigator>
    );
}