import { Image, StyleSheet, Text, View, Button } from "react-native";

const App = ({ goBack }) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        style={styles.avatar}
      />
      <Text style={styles.name}>Nguyễn Văn A</Text>
      <Text style={styles.position}>Software Developer</Text>
      <Text style={styles.contact}>Email: nguyen@example.com</Text>
      <Text style={styles.contact}>Phone: 0123-456-789</Text>
      <Button title="Quay lại" onPress={goBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    margin: 20,
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  position: {
    fontSize: 18,
    marginBottom: 20,
  },
  contact: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default App;
