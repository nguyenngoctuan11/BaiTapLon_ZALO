import { AntDesign } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Image, Pressable, TextInput } from "react-native";
import { View, Text } from "react-native";
import {
  VideoCameraOutlined,
  PhoneOutlined,
  UnorderedListOutlined,
  MehOutlined,
  EllipsisOutlined,
  AudioOutlined,
  FileImageOutlined,
} from "@ant-design/icons";
import { TouchableOpacity } from "react-native";

export const Chat = ({ navigation, route }) => {
  const [value, onChangeText] = useState("");
  const name = route.params?.name;
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://6554d45e63cafc694fe70d65.mockapi.io/api/user")
      .then((response) => response.json())
      .then((json) => {
        let infodata = json.find((item) => item.name === name);
        if (infodata) setData(json.find((item) => item.name === name) || {});
        else {
          // debugger
          fetch("https://6554d45e63cafc694fe70d65.mockapi.io/api/user",
           {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              user: [],
            }),
          })
            .then((response) => response.json())
            .then((json) => setData(json));
            // console.log(data);
        }
      });
  }, []);

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",

          backgroundColor: "#129EFD",
          height: 55,
        }}
      >
        <TouchableOpacity
          style={{ flexDirection: "row", justifyContent: "space-between" }}
          onPress={() => {
            navigation.goBack("Home");
          }}
        >
          <AntDesign name="arrowleft" size={30} color="white"></AntDesign>
        </TouchableOpacity>
        <Text style={{ width: "60%", height: "100%" }}></Text>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            {" "}
            <PhoneOutlined
              style={{
                fontSize: 30,
                color: "white",
                marginRight: 20,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            {" "}
            <VideoCameraOutlined
              style={{
                fontSize: 30,
                color: "white",
                marginRight: 15,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            {" "}
            <UnorderedListOutlined
              style={{
                fontSize: 30,
                color: "white",
                marginRight: 20,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* body */}
      <View
        style={{ flex: 8, backgroundColor: "#e5e5e5", flexDirection: "row" ,width:"100%"}}
      >
        <View style={{ height: "10%" ,borderRadius:"10px",flexDirection:"row"}}>
        <Image
          style={{ width: 60, height: 60, borderRadius: "50%", margin: 10 }}
          source={{ uri: `${data.image}` }}
        />
          <Text style={{backgroundColor:"#fff",width:"50px",borderRadius:"10px"}}>Xin chào bạn !

</Text>
        </View>
      </View>
      {/* footer */}
      <View style={{ flex: 1, flexDirection: "row", backgroundColor: "#fff" }}>
        <TouchableOpacity>
          <MehOutlined
            style={{
              color: "gray",
              fontSize: 30,
              justifyContent: "flex-start",
              padding: 15,
              marginTop: 5,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "#fff",
            width: "40%",
            height: "35px",
            marginTop: 15,
            justifyContent: "center",
            marginLeft: 20,
          }}
          onPress={() => (
            <TextInput
              placeholder="Tin nhắn, @"
              onChangeText={(text) => onChangeText(text)}
              value={value}
            ></TextInput>
          )}
        >
          <Text style={{ color: "gray", fontSize: "20px" }}>Tin nhắn, @</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 20,
          }}
        >
          <EllipsisOutlined
            style={{
              fontSize: 35,
              color: "gray",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 20,
          }}
        >
          <AudioOutlined
            style={{
              fontSize: 30,
              color: "gray",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 10,
          }}
        >
          <FileImageOutlined
            style={{
              fontSize: 30,
              color: "gray",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
