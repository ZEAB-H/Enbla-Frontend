import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import { SplashScreen } from "../screens";


const Stack=createStackNavigator()

const Navigators=()=>{
    return(

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="splash"/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}