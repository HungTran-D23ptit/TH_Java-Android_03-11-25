import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const StudentList = ({ navigation }) => {
  const students = [
    { id: "1", name: "Nguyễn Văn A", age: 20 },
    { id: "2", name: "Trần Thị B", age: 21 },
    { id: "3", name: "Lê Văn C", age: 22 },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate("StudentDetail", { student: item })}
    >
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.age}>Tuổi: {item.age}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={students}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  item: {
    padding: 15,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  age: {
    fontSize: 16,
    color: "#666",
  },
});

export default StudentList;
