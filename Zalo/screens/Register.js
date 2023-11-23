import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Pressable } from "react-native";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";

const arr = [
  {
    label: "VN",
    value: "1",
  },
  {
    label: "ThaiLand",
    value: "2",
  },
  {
    label: "Sing",
    value: "3",
  },
  {
    label: "US",
    value: "4",
  },
  {
    label: "Indo",
    value: "5",
  },
  {
    label: "Mailay",
    value: "6",
  },
];
function Register(props) {
  const [selected, setSelected] = useState("Select");
  const [isClicked, setIsClicked] = useState(false);
  const [data, setData] = useState(arr);
  var navigation = useNavigation();
  return (
    <View
      style={{ flex: 1, justifyContent: "center", backgroundColor: "#ffff" }}
    >
      <Pressable
        style={{ backgroundColor: "#1faeeb", flexDirection: "row" }}
        onPress={() => {
          navigation.goBack("Home");
        }}
      >
        <AntDesign
          name="arrowleft"
          size={30}
          color="white"
          style={{ marginRight: 330 }}
        />
      </Pressable>

      <View
        style={{
          flex: 1,
          width: "390px",
          height: "1px",
          justifyContent: "center",
          backgroundColor: "#d9d9d9",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: "15px",
            fontWeight: "500",
            fontStyle: "normal",
            alignItems: "center",
          }}
        >
          Vui lòng nhập số điện thoại và mật khẩu đăng nhập
        </Text>
      </View>
      <View style={{ flex: 9, backgroundColor: "#ffff" }}>
        <TouchableOpacity
          style={{
            width: "20%",
            height: 50,
            borderBottomWidth:"1px",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 10,
          }}
          onPress={() => {
            setIsClicked(!isClicked);
          }}
        >
          <Text>{setSelected}</Text>
          {isClicked ? (
            <Image
              source={require("../assets/upload.png")}
              style={{
                width: 15,
                height: 15,
                justifyContent: "flex-end",
                alignItems: "center",
                marginLeft: 50,
              }}
            />
          ) : (
            <Image
              source={require("../assets/dropdown.png")}
              style={{
                width: 20,
                height: 20,
                justifyContent: "flex-end",
                alignItems: "center",
                marginLeft: 50,
              }}
            />
          )}
        </TouchableOpacity>
        {isClicked ? (
          <View
            style={{
              width: "20%",
              height: 80,
              borderRadius: "5px",
              borderWidth: "1px",
            }}
          >
            <FlatList
              data={data}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setSelected(item.label);
                      setIsClicked(false);
                    }}
                  >
                    <Text>{item.label}</Text>
                  </TouchableOpacity>
                );
              }}
            ></FlatList>
          </View>
        ) : null}
      </View>
      <View
        style={{
          flex: 1,
          marginLeft: 20,
          backgroundColor: "#ffff",
          flexDirection: "column",
        }}
      >
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
          <View  style={{marginLeft:5}}>
          <Text
            style={{ fontWeight: "500", marginBottom: 5, fontSize: "15px" }}
          >
            Tiếp tục nghĩa là bạn đồng ý với các
          </Text>
          <Text style={{ color: "#1FAEEB", fontSize: "14px", fontSize: "500" }}>
            điều khoản sử dụng Zalo
          </Text>
        </View>
        <Pressable
        style={{ backgroundColor: "#ffff", flexDirection: "row" }}
        onPress={() => {
          navigation.navigate("CreateAccount");
        }}
      >
        <AntDesign
          name="rightcircle"
          size={25}
          color="#1faeeb"
          style={{ marginRight: 20,alignItems:"center" }}
        />
      </Pressable>
        </View>
        
      </View>
    </View>
  );
}
export default Register;
