import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Bai10 from "@/src/bai10_DanhSachSinhVien/App";
import Bai2 from "@/src/bai2_HelloWorld/App";
import Bai3 from "@/src/bai3_GiaoDienCoBan/App";
import Bai4 from "@/src/bai4_DanhThiep/App";
import Bai5 from "@/src/bai5_TinhDiemTrungBinh/App";
import Bai6 from "@/src/bai6_DoiMauNen/App";
import Bai7 from "@/src/bai7_TodoList/App";
import Bai8 from "@/src/bai8_StackNavigation/App";
import Bai9 from "@/src/bai9_TabNavigation/App";

export default function App() {
  const [selected, setSelected] = useState<string | null>(null);

  if (selected === "bai2") return <Bai2 goBack={() => setSelected(null)} />;
  if (selected === "bai3") return <Bai3 goBack={() => setSelected(null)} />;
  if (selected === "bai4") return <Bai4 goBack={() => setSelected(null)} />;
  if (selected === "bai5") return <Bai5 goBack={() => setSelected(null)} />;
  if (selected === "bai6") return <Bai6 goBack={() => setSelected(null)} />;
  if (selected === "bai7") return <Bai7 goBack={() => setSelected(null)} />;
  if (selected === "bai8") return <Bai8 goBack={() => setSelected(null)} />;
  if (selected === "bai9") return <Bai9 goBack={() => setSelected(null)} />;
  if (selected === "bai10") return <Bai10 goBack={() => setSelected(null)} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chọn bài </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setSelected("bai2")}
      >
        <Text style={styles.buttonText}>Bài 2 - Hello World</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setSelected("bai3")}
      >
        <Text style={styles.buttonText}>Bài 3 - Giao diện cơ bản</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setSelected("bai4")}
      >
        <Text style={styles.buttonText}>Bài 4 - Danh thiếp cá nhân</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setSelected("bai5")}
      >
        <Text style={styles.buttonText}>Bài 5 - Tính điểm trung bình</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setSelected("bai6")}
      >
        <Text style={styles.buttonText}>Bài 6 - Đổi màu nền</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setSelected("bai7")}
      >
        <Text style={styles.buttonText}>Bài 7 - Danh sách công việc</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setSelected("bai8")}
      >
        <Text style={styles.buttonText}>Bài 8 - Stack Navigation</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setSelected("bai9")}
      >
        <Text style={styles.buttonText}>Bài 9 - Tab Navigation</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setSelected("bai10")}
      >
        <Text style={styles.buttonText}>Bài 10 - Danh sách sinh viên</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    backgroundColor: "#f9f9f9",
  },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: { color: "#fff", fontSize: 16 },
});
