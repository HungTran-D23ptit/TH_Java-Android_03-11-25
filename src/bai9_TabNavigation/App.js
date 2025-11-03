import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button, StyleSheet, Text, View } from "react-native";

const Tab = createBottomTabNavigator();

const HomeTab = ({ goBack }) => (
  <View style={styles.container}>
    <Text>Trang chủ</Text>
    <Button title="Quay lại" onPress={goBack} />
  </View>
);

const SearchTab = ({ goBack }) => (
  <View style={styles.container}>
    <Text>Tìm kiếm</Text>
    <Button title="Quay lại" onPress={goBack} />
  </View>
);

const SettingsTab = ({ goBack }) => (
  <View style={styles.container}>
    <Text>Cài đặt</Text>
    <Button title="Quay lại" onPress={goBack} />
  </View>
);

const App = ({ goBack }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home">{() => <HomeTab goBack={goBack} />}</Tab.Screen>
      <Tab.Screen name="Search">
        {() => <SearchTab goBack={goBack} />}
      </Tab.Screen>
      <Tab.Screen name="Settings">
        {() => <SettingsTab goBack={goBack} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
