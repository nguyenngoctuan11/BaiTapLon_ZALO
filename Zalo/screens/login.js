import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";

function Login(props) {
  const [text, onChangeText] = React.useState("");
  const [phone, onChangePhone] = React.useState("");
  const navigation = useNavigation();
  
  return (
    <View
      style={{
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <Pressable
                   onPress={()=>{
                    navigation.goBack('Home')  // quay trở về trang trước đó
       }}
                >
                    <AntDesign name="arrowleft" size={30} color="black" style={{marginRight:330}} />
                </Pressable>
      <View style={{ flex: 1 }}></View>
      <View
        style={{
          flex: 1,
          width: "100%",
          height: "15%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "#0091ff",
            fontSize: 40,
            fontWeight: "bold",
          }}
        >
          Đăng nhập Zalo
        </Text>
      </View>
      <View
        style={{
          flex: 2,
          height: "50%",
          width: "100%",
          justifyContent: "center",
         
        }}
      >
        <TextInput
          style={{
            height: 50,
            margin: 12,
            fontSize: 20,
            width: "90%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
            border: "1px solid #0091ff",
            marginBottom: 10,
          }}
          onChangeText={onChangePhone}
          value={phone}
          placeholder="Số điện thoại"
          autoFocus={true}
        ></TextInput>

        <TextInput
          style={{
            height: 50,
            margin: 12,
            fontSize: 20,
            width: "90%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
            border: "1px solid #0091ff",
            marginBottom: 30,
          }}
          onChangeText={onChangeText}
          value={text}
          placeholder="Mật khẩu"
        ></TextInput>

        <TouchableOpacity
          style={{
            width: "60%",
            height: 50,
            borderRadius: 20,
            backgroundColor: "#0091ff",
            alignSelf: "center",
          }}
          onPress={() => props.navigation.navigate("ListChat")}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              fontWeight: 500,
              padding: 10,
              color: "#ffff",
            }}
          >
            Đăng nhập
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          width: "60%",
          height: "80%",
        }}
      >
        <TouchableOpacity style={{ width: "100%" }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold 20 ",
              textAlign: "center",
            }}
          >
            Lấy lại mật khẩu
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Login;
