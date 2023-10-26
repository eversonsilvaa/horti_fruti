import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import  Home from "../screens/Home";
import  Produtos from "../screens/Produtos";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: () => <Feather name="home" size={25} />,
            }}
          />
          <Tab.Screen
            name="Produtos" 
            component={Produtos}
            options={{
              tabBarIcon: () => <Feather name="shopping-cart" size={25} />,
            }}
          />
     
        </Tab.Navigator>
      );
}