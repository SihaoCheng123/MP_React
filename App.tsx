import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import RegisterScreen from "./app/presentation/views/auth/Register";
import LoginScreen from "./app/presentation/views/auth/Login";
import {TabNavigator} from "./app/presentation/navigation/TabNavigation";
import CalendarScreen from "./app/presentation/views/Calendar/CalendarScreen";
import HomeScreen from "./app/presentation/views/Home/HomeScreen";
import CartScreen from "./app/presentation/views/Cart/CartScreen";
import UserScreen from "./app/presentation/views/User/UserScreen";

export type RootStackParamList ={
  LoginScreen: undefined,
  RegisterScreen: undefined,
    TabNavigator: undefined,
    HomeScreen: undefined,
    CalendarScreen: undefined,
    CartScreen: undefined,
    UserScreen: undefined,

}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App(){
  return (
      <NavigationContainer>
         <Stack.Navigator screenOptions={{ headerShown: false }}>

             <Stack.Screen name={"TabNavigator"} component={TabNavigator}options={{ headerShown: false }}></Stack.Screen>
             <Stack.Screen name={"RegisterScreen"} component={RegisterScreen} options={{title: "Register"}}></Stack.Screen>
             <Stack.Screen name={"LoginScreen"} component={LoginScreen} options={{title: "Log In"}}></Stack.Screen>
             <Stack.Screen name={"HomeScreen"} component={HomeScreen} options={{ headerShown: false }}></Stack.Screen>
             <Stack.Screen name={"CalendarScreen"} component={CalendarScreen} options={{ headerShown: false }}></Stack.Screen>
             <Stack.Screen name={"CartScreen"} component={CartScreen} options={{ headerShown: false }}></Stack.Screen>
             <Stack.Screen name={"UserScreen"} component={UserScreen} options={{ headerShown: false }}></Stack.Screen>

         </Stack.Navigator>
      </NavigationContainer>
  );
}
