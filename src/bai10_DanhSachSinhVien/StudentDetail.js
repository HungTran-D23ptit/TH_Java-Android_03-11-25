import { StyleSheet, Text, View } from "react-native";

const StudentDetail = ({ route }) => {
  const { student } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.detail}>Tên: {student.name}</Text>
      <Text style={styles.detail}>Tuổi: {student.age}</Text>
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
  detail: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default StudentDetail;
