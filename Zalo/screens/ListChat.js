/* màn hình 1  bao gồm : đăng nhập , đăng ký , quên mật khẩu*/
import * as React from 'react' ;
import { 
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    StatusBar,ScrollView
   } from 'react-native';
import { TextInput } from 'react-native-paper';
          <MessageOutlined style={{color:"#b0a7a7",fontSize:25}}/>
          import {MessageOutlined,UserOutlined ,
             IdcardOutlined,SearchOutlined,SettingOutlined,UserAddOutlined,
             AppstoreOutlined,ClockCircleOutlined,ContactsOutlined,UsergroupAddOutlined, GroupOutlined,PhoneOutlined,VideoCameraOutlined} from '@ant-design/icons';


           
   const ListChat = ({navigation})=>{
    var [data, setData] = React.useState([]);
    var fc = () => {
      const url = "https://6554d45e63cafc694fe70d65.mockapi.io/api/user";
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          data = json;
          setData(data);
        });
    };
    React.useEffect(fc, []);
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                <TouchableOpacity style={styles.btnicon}>
                       <SearchOutlined style={{color:'#fff',fontSize:30}}/>
                </TouchableOpacity>   
                    <TouchableOpacity style={styles.btntext} onPress={
                        () => <TextInput placeholder='Tìm kiếm'></TextInput>
                    }>
                         <Text style={styles.txtS}>Tìm kiếm</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnicon}>
                        <UserAddOutlined style={{color:'#fff', fontSize:30}}/>
                    </TouchableOpacity>
                    
                </View>
            <ScrollView style={{
                flex:9,
                backgroundColor:'grey',
            }}>
           <View style={{ flex: 8, borderBottomColor: "gray" }}>
          {data.map((item) => {
            return (
              <TouchableOpacity style={{ backgroundColor: "#ffff" }} onPress ={()=>{
                navigation.navigate({name:"Chat",params: {name}})
              }} >
                <View
                  style={{
                    width: "100%",
                    borderBottomColor: "#ededee",
                    borderBottomWidth: "0.5px",
                    flexDirection: "row",
                    padding: 10,
                  }}
                >
                  <Image
                    source={item.image}
                    style={{ height: 40, width: 40, borderRadius: "50px" }}
                  ></Image>

                  <View
                    style={{
                      justifyContent: "space-around",
                      width: "70%",
                      marginLeft: "20px",
                    }}
                  >
                    <Text style={{ fontSize: "16px", fontWeight: "bold" }}>
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: "14px",
                        fontWeight: 400,
                        color: "gray",
                      }}
                    >
                      {item.mess}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
    </ScrollView>
    <View
        style={{
          backgroundColor: "#faefef",
          justifyContent: "space-around",
          flexDirection: "row",
          alignItems:'center',
          height:"55px",
        }}
      >
        <TouchableOpacity onPress={()=>navigation.navigate('ListChat')}>
          <MessageOutlined style={{ color: "#b0a7a7", fontSize: 25 }} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Phonebook')}>
<ContactsOutlined style={{ color: "#b0a7a7", fontSize: 25 }} />
        </TouchableOpacity>

        <TouchableOpacity>
          <AppstoreOutlined style={{ color: "#b0a7a7", fontSize: 25 }} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Diary')}>
          <ClockCircleOutlined style={{ color: "#b0a7a7", fontSize: 25 }} />
        </TouchableOpacity>

        <TouchableOpacity  onPress={()=>navigation.navigate('information')}>
          <UserOutlined style={{ color: "#b0a7a7", fontSize: 25 }} />
        </TouchableOpacity>
      </View>    
     </SafeAreaView>
     
        );
   };
   const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        // justifyContent: "center",
      },
      
      text:{
         fontSize:80,
         color:"#1faeeb",
     },
     header:{
         
         flexDirection:'row',
         justifyContent:'flex-start',
         backgroundColor:'#129EFD',
         height:55,
     },
     group_list:{
         flex:8,
         backgroundColor:'#d9d9d9',
     },
     iconsearch:{
         width:'30px',
         height:'30px',
         resizeMode:'contain',
     },
     btnicon:{
         margin:10,
     },
     btntext:{
         backgroundColor:'#129EFD',
         width:'70%',
         height:"35px",
         marginTop:10,
         justifyContent:'center',
         marginLeft:10,
         borderRadius:10,
         padding:10,
 
         
     },
     btnSetting:{
         justifyContent:'center',
         marginLeft:'10px',
         
     },
     txtS:{
         color:'#87C6FF',
         fontSize:'16px',
     },
   });
   export default ListChat ;