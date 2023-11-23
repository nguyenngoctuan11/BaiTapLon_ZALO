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

var data = [] ;
var url =  "https://654da848cbc325355741c2bd.mockapi.io/phoneBook"; 
           
   const Phonebook = ({navigation})=>{
    var [data , setData] = React.useState([]);
    var fc = () => {
        fetch(url)
        .then((response) => response.json())
        .then((json) =>{
            data=json;
            setData(data);
        });
    };
    React.useEffect(fc,[]);
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
            <View style={{
                flex:8,
                backgroundColor:'#fff',
            
            }} >
                    <View style={{
                    flexDirection:'row',
                    justifyContent:'space-around',
                    borderBottomWidth:1,
                    flex:1,

                     }}>
                    <TouchableOpacity style={{  
                        backgroundColor:'#fff',
                        padding:20,
                        marginBottom:2,
                        
                    }}>
                            <Text style={{
                                fontSize:'16px',
                                color:'grey',
                            }}>
                                Bạn bè
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                        backgroundColor:'#fff',
                        padding:20,
                       
                    }}>
                            <Text style={{
                                fontSize:'16px',
                                color:'grey',
                            }}>
                                Nhóm 
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                        backgroundColor:'#fff',
                        padding:20,
                       
                    }}>
                            <Text style={{
                                fontSize:'16px',
                                color:'grey',
                            }}>
                                OA 
                            </Text>
                        </TouchableOpacity>
                  </View>
                  {/* lo*/}
                  <View style={{
                    flex:2,
                  }}>
                    <TouchableOpacity style={{
                        flexDirection:'row',
                        backgroundColor:'#fff',
                        padding:5,
                    }}>
                        <View style={{
                            backgroundColor:'#129EFD',
                            borderRadius:'10px',
                            marginRight:10,

                        }}>
                        <UsergroupAddOutlined style={{
                            fontSize:'25px',
                            color:'#fff',
                            margin:5
                        }} />
                        
                        </View>
                        <Text style={{
                             fontWeight:'500',
                             marginTop:'5px',
                             fontSize:16,
                        }}>Lời mời kết bạn</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        flexDirection:'row',
                        backgroundColor:'#fff',
                        padding:5,
                    }}>
                        <View style={{
                            backgroundColor:'#129EFD',
                            borderRadius:'10px',
                            marginRight:10,
                        }}>
                        

                        <ContactsOutlined style={{
                             fontSize:'25px',
                             color:'#fff',
                             margin:5,
                        }}/>
                        </View>
                        <View>
                        <Text style={{
                            fontSize:16,
                            fontWeight:'500',
                            fontSize:16,
                        }}>Danh bạ máy</Text>
                        <Text style={{
                            fontWeight:'450',
                            color:'grey',
                        }}>Các liên hệ có ứng dụng Zalo</Text>
                        </View>
                    </TouchableOpacity>
                  </View>
            </View>
            <View style={{
               
                backgroundColor:'#fff',
                flexDirection:'row',
                height:'50px',
                
               
            }}>
                <TouchableOpacity style={{
                    flexDirection:'row',
                    padding:5,
                    borderColor:'grey',
                    borderWidth:'1px',
                    backgroundColor:'#fff',
                    borderRadius:'14px',
                    margin:5,
                    justifyContent:'center',
                    alignItems:'center',
                }}>
                    <Text>Tất cả 108</Text>
                    
                </TouchableOpacity>
                <TouchableOpacity style={{
                    flexDirection:'row',
                    padding:5,
                    borderColor:'grey',
                    borderWidth:'1px',
                    backgroundColor:'#fff',
                    borderRadius:'14px',
                    margin:5,
                    justifyContent:'center',
                    alignItems:'center',
                }}>
                    <Text>Mới truy cập 114</Text>
                  
                </TouchableOpacity>
            </View>
            {data.map((item) => {
        return (
          <TouchableOpacity
            style={{
              flexDirection: "row",
                padding:'15px',
            
              backgroundColor: "#fff",
            }}
            key={item.id}
          >
            <Image style={{
                width:'60px',
                height:'60px',
                borderRadius:'25px'
                
            }}
            source={item.avt}/>
            <View style={{
                backgroundColor:'#fff',
                width:'50%',
                marginLeft:'15px',
                alignItems:'center',
                justifyContent:'center',
            }}>
                
                <Text style={{
                    fontSize:'20px',
                    fontWeight:'500',
                }}>{item.name}</Text>
                
            </View>
            <TouchableOpacity style={{
                backgroundColor:'#fff',
                marginLeft:'15px',
                justifyContent:'center',
                alignItems:'center',
                
               
            }}>
                  <PhoneOutlined style={{
                    fontSize:30,
                    color:'#b0a7a7',
                  }}/>
            </TouchableOpacity>
            
            <TouchableOpacity style={{
                backgroundColor:'#fff', 
                marginLeft:'15px',
                justifyContent:'center',
                alignItems:'center',
              
            }}>
               <VideoCameraOutlined style={{
                    fontSize:30,
                    color:'#b0a7a7',
               }}/>
            </TouchableOpacity>
          </TouchableOpacity>
        );
      })} 
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
   export default Phonebook ;