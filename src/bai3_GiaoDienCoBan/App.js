import { Image, StyleSheet, Text, View, Button } from "react-native";

const App = ({ goBack }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        style={styles.logo}
      />
      <Text style={styles.title}>Hello React Native</Text>
      <Button title="Quay lại" onPress={goBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default App;
