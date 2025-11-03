import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const App = ({ goBack }) => {
  const [toan, setToan] = useState("");
  const [ly, setLy] = useState("");
  const [hoa, setHoa] = useState("");
  const [average, setAverage] = useState(null);

  const calculateAverage = () => {
    const t = parseFloat(toan);
    const l = parseFloat(ly);
    const h = parseFloat(hoa);
    if (!isNaN(t) && !isNaN(l) && !isNaN(h)) {
      setAverage((t + l + h) / 3);
    } else {
      setAverage(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tính Điểm Trung Bình</Text>
      <TextInput
        style={styles.input}
        placeholder="Điểm Toán"
        keyboardType="numeric"
        value={toan}
        onChangeText={setToan}
      />
      <TextInput
        style={styles.input}
        placeholder="Điểm Lý"
        keyboardType="numeric"
        value={ly}
        onChangeText={setLy}
      />
      <TextInput
        style={styles.input}
        placeholder="Điểm Hóa"
        keyboardType="numeric"
        value={hoa}
        onChangeText={setHoa}
      />
      <Button title="Tính điểm" onPress={calculateAverage} />
      {average !== null && (
        <Text style={styles.result}>
          Kết quả trung bình: {average.toFixed(2)}
        </Text>
      )}
      <Button title="Quay lại" onPress={goBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  result: {
    fontSize: 18,
    marginTop: 20,
  },
});

export default App;
