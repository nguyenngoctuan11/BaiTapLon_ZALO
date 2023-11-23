import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Home = (props) => {
  var navigation = useNavigation();
  return (
    <View style={styles.container1}>
      <View style={styles.header}>
        <Text style={styles.text}>Zalo</Text>
      </View>
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate("Login")}
        >
          <Text style={styles.text_login}> Đăng nhập</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate("Register")}
        >
          <Text style={styles.text_register}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.link_forget}>Quên mật khẩu ?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Home
