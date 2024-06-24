import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StartApp } from '../constants';
import {
  Login,
  Home,
  Register,
  Forgot
} from '../src/'

const Stack = createStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false, gestureEnabled: false }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Forgot" component={Forgot} />
    </Stack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"StartApp"}
        screenOptions={{ headerShown: false, gestureEnabled: false }}
      >
        <Stack.Group>
          <Stack.Screen name="StartApp" component={StartApp} />
          <Stack.Screen name="Main" component={Main} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};