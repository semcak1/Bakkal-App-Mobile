import React from "react";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Signin from "../screens/Signin";
import Signup from "../screens/Signup";
import CustomersScreen from "../screens/customer/CustomersScreen";
import DashboardScreen from "../screens/DashboardScreen";
import IncomesExpensesScreen from "../screens/incomeExpenses/IncomesExpensesScreen";
import { Settings } from "react-native";
import SettingsScreen from "../screens/SettingsScreen";
import { createSwitchNavigator } from "@react-navigation/compat";
import { Colors } from "../styles/style";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome,
} from "react-native-vector-icons";
import AddCustomerScreen from "../screens/customer/AddCustomerScreen";
import AddIncomeExpensesScreen from "../screens/incomeExpenses/AddIncomeExpensesScreen";
import CustomerDetails from "../screens/customer/CustomerDetails";
import UpdateCustomerScreen from "../screens/customer/UpdateCustomerScreen";
import AddDebtScreen from "../screens/customer/AddDebtScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CustomerDebtScreen from "../screens/customer/CustomerDebtScreen";
import CustomerPaymentScreen from "../screens/customer/CustomerPaymentScreen";
import { paramsContext } from "../context/navigationContext";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();
let isLoggedIn = true;

const BottomTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.accent,
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = "md-analytics";
            focused ? (color = Colors.accent) : (color = Colors.primary);
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Müşteriler"
        component={CustomerStack}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = "ios-people";
            focused ? (color = Colors.accent) : (color = Colors.primary);
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Gelir - Gider"
        component={IncExpStack}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = "money";
            focused ? (color = Colors.accent) : (color = Colors.primary);
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Ayarlar"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = "md-settings";
            focused ? (color = Colors.accent) : (color = Colors.primary);
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const LoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const CustomerStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Customer List"
        component={CustomersScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Add Customer" component={AddCustomerScreen} />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="DetailOfCustomer"
        component={CustomerDetail}
      />
    </Stack.Navigator>
  );
};

const IncExpStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Gelir - Gider" component={IncomesExpensesScreen} />
      <Stack.Screen name="Ana kalem" component={AddIncomeExpensesScreen} />
    </Stack.Navigator>
  );
};

const CustomerDetail = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CustomerDebtsPayments"
        component={CustomerDebtsPayments}
      />

      <Stack.Screen name="Edit Customer" component={UpdateCustomerScreen} />
      <Stack.Screen name="AddDebt" component={AddDebtScreen} />
    </Stack.Navigator>
  );
};

// const CustomerDebt = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="CustomerDebtScreen" component={CustomerDebtScreen} />
//       <Stack.Screen name="Edit Customer" component={UpdateCustomerScreen} />
//       <Stack.Screen name="AddDebt" component={AddDebtScreen} />
//     </Stack.Navigator>
//   );
// };

const CustomerDebtsPayments = ({ route }) => {

  const customerData = route.params;
  return (
    <paramsContext.Provider value={customerData}>
      <TopTab.Navigator initialRouteName="CustomerDebt">
        <TopTab.Screen
          name="CustomerDebtScreen"
          component={CustomerDebtScreen}
        />
        <TopTab.Screen
          name="CustomerPayment"
          component={CustomerPaymentScreen}
        />
      </TopTab.Navigator>
    </paramsContext.Provider>
  );
};

export const RootNavigator = createSwitchNavigator({
  App: BottomTab,
  Login: LoginStack,
});
