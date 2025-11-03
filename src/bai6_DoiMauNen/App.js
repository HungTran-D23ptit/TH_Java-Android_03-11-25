import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";

const App = ({ goBack }) => {
  const [backgroundColor, setBackgroundColor] = useState("#fff");

  const changeColor = () => {
    const colors = [
      "#ff0000",
      "#00ff00",
      "#0000ff",
      "#ffff00",
      "#ff00ff",
      "#00ffff",
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBackgroundColor(randomColor);
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <TouchableOpacity style={styles.button} onPress={changeColor}>
        <Text style={styles.buttonText}>Đổi màu</Text>
      </TouchableOpacity>
      <Button title="Quay lại" onPress={goBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default App;
