import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";

const Stack = createNativeStackNavigator();

const App = ({ goBack }) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: () => <Button title="Quay lại" onPress={goBack} />,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerLeft: () => <Button title="Quay lại" onPress={goBack} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default App;
