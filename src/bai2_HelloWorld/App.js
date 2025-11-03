import { Button, Text, View } from "react-native";

export default function App({ goBack }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Xin chào React Native!</Text>
      <Button title="Quay lại" onPress={goBack} />
    </View>
  );
}
