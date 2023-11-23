import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { TextInput } from "react-native";
import { Pressable } from "react-native";
import { View, Text } from "react-native";

export const CreateAccount = ({ navigation }) => {
  return (
    <View
      style={{ flex: 1, justifyContent: "center", backgroundColor: "#ffff" }}
    >
      <Pressable
        style={{ backgroundColor: "#1faeeb"}}
        onPress={() => {
          navigation.goBack("Home");
        }}
      >
        <AntDesign
          name="arrowleft"
          size={30}
          color="white"
          style={{ marginRight: 330 }}
        >
       
        
         </AntDesign>
          
      </Pressable>
      <View style={{ flex: 6 }}>
        <Text style={{ fontSize: 30, padding: 10, marginBottom: 5 }}>
          Tên Zalo
        </Text>
        <TextInput
          style={{
            borderBottomWidth: "0.5px",
            borderBottomColor: "#645C5C",
            fontSize: 15,
            marginBottom: 30,
          }}
          placeholder="Gồm 2 - 40 ký tự "
          placeholderTextColor={"#645C5C"}
        ></TextInput>
        <View style={{flex:1, padding:15}}>
          <Text style={{marginBottom:10,fontSize:16}}>Lưu ý khi đặt tên</Text>
          <AntDesign name="checkcircle" color={'black'} size={20}>
            <Text style={{fontSize:16,marginLeft:10}}>Không vi phạm quy định đặt tên trên Zalo</Text>
          </AntDesign>
          <AntDesign name="checkcircle" color={'black'} size={20}>
          <Text style={{fontSize:16,marginLeft:10}}>Nên sử dụng tên thật giúp bạn bè dễ nhận ra bạn</Text>
          </AntDesign>
        </View>
      </View>

      <View>
        <View style={{flex:2, flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ marginLeft: 10 }}>
            <Text
              style={{ fontWeight: "500", marginBottom: 5, fontSize: "15px" }}
            >
              Tiếp tục nghĩa là bạn đồng ý với các
            </Text>
            <Text
              style={{ color: "#1FAEEB", fontSize: "14px", fontSize: "500" }}
            >
              điều khoản sử dụng Zalo
            </Text>
          </View>
          <Pressable
            style={{ backgroundColor: "#ffff", flexDirection: "row" }}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <AntDesign
              name="rightcircle"
              size={25}
              color="#1faeeb"
              style={{ marginRight: 20, alignItems: "center" }}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};
