import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import StudentDetail from "./StudentDetail";
import StudentList from "./StudentList";

const Stack = createNativeStackNavigator();

const AddStudentForm = ({ navigation }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const addStudent = () => {
    if (name && age) {
      alert(`Đã thêm sinh viên: ${name}, ${age} tuổi`);
      setName("");
      setAge("");
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Tên sinh viên"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Tuổi"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <Button title="Thêm sinh viên" onPress={addStudent} />
    </View>
  );
};

const App = ({ goBack }) => {
  return (
    <Stack.Navigator initialRouteName="StudentList">
      <Stack.Screen
        name="StudentList"
        component={StudentList}
        options={({ navigation }) => ({
          headerLeft: () => <Button title="Quay lại" onPress={goBack} />,
          headerRight: () => (
            <Button
              title="Thêm"
              onPress={() => navigation.navigate("AddStudent")}
            />
          ),
        })}
      />
      <Stack.Screen
        name="StudentDetail"
        component={StudentDetail}
        options={{
          title: "Chi Tiết Sinh Viên",
          headerLeft: () => <Button title="Quay lại" onPress={goBack} />,
        }}
      />
      <Stack.Screen
        name="AddStudent"
        component={AddStudentForm}
        options={{
          title: "Thêm Sinh Viên",
          headerLeft: () => <Button title="Quay lại" onPress={goBack} />,
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});

export default App;
