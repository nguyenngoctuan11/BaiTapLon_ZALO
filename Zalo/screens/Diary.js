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
          
import {MessageOutlined,UserOutlined ,
        IdcardOutlined,SearchOutlined,SettingOutlined,UserAddOutlined,
        AppstoreOutlined,ClockCircleOutlined,ContactsOutlined,UsergroupAddOutlined, GroupOutlined,
        PhoneOutlined,VideoCameraOutlined,PictureOutlined,NotificationOutlined,VideoCameraAddOutlined,
        FolderAddOutlined,HeartOutlined,CommentOutlined,EllipsisOutlined} from '@ant-design/icons';
import {useEffect,useState} from 'react';
var data =[] ;
var url = "https://654da848cbc325355741c2bd.mockapi.io/phoneBook";

   const Diary = ({navigation})=>{
    var [data , setData] = useState([]);
    var fc = () => {
        fetch(url)
        .then((response) => response.json())
        .then((json) =>{
            data=json;
            setData(data);
        });
    };
 useEffect(fc,[]);
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
                        <PictureOutlined style={{color:'#fff', fontSize:30}}/>
                    </TouchableOpacity>
                   
                    <TouchableOpacity style={styles.btnicon}>
                        <NotificationOutlined style={{color:'#fff', fontSize:30}}/>
                    </TouchableOpacity>
                    
                </View>
                {/* body */}
            <ScrollView style={{
                flex:9,
                backgroundColor:'#eeeff0',
            }}>
                <View style={{
                    backgroundColor:'#ffffff',
                    padding:'5px',
                }}>
                 
                <TouchableOpacity style={{
                   flexDirection :'row',
                   alignItems:'center',
                   padding:'10px',
                }}>
                <Image 
                    style={{
                        resizeMode:'contain',
                        width:'50px',
                        height:'50px',
                    }}
                    source={require('../assets/Avatar.png')}/>
                <Text style={{
                    fontSize:'16px',
                    marginLeft:'10px',
                }}>Hôm nay bạn thấy thế nào ?</Text>
                </TouchableOpacity>
                {/* btn đăng ảnh - đăng video - Tạo album */}
              <View style={{
                flexDirection : 'row',
                justifyContent:'space-around',
                marginTop:'10px',
              }}>
              {/* Đăng ảnh */}

                <TouchableOpacity style={{
                    backgroundColor:'#ededed',
                    flexDirection:'row',
                    padding:5,
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:'10px',
                }}>
                    <PictureOutlined style={{
                        color:'#cee7a8',
                        fontSize:'25px'
                    }}/>
                    <Text style={{
                        marginLeft:5,
                    }}>Đăng ảnh </Text>
                </TouchableOpacity>
              <TouchableOpacity
                 style={{
                    backgroundColor:'#ededed',
                    flexDirection:'row',
                    padding:5,
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:'10px',
                }}>
                    <VideoCameraOutlined style={{
                        color:'#fc858a',
                        fontSize:25
                    }}/>
                    <Text style={{
                        marginLeft:5,
                    }}>Đăng video</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={{
                    backgroundColor:'#ededed',
                    flexDirection:'row',
                    padding:5,
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:'10px',
                }}>
                    <FolderAddOutlined style={{
                        color:'#4fbaf2',
                        fontSize:25,
                    }}/>
                    <Text style={{
                        marginLeft:5,
                    }}>Tạo album</Text>
                </TouchableOpacity>
              </View>
                </View>
                {/* Khoảng khắc */}
                <View style={{
                    backgroundColor:'#ffffff',
                    padding:'10px',
                    marginTop:'10px',

                    
                }}>
                <Text>
                    Khoảng khắc
                </Text>
                <View style={{
                    backgroundColor:'pink',
                    width:'80px',
                    height:'120px',
                    borderRadius:'10px',
                    marginTop:'10px',
                    justifyContent:'center',
                    alignItems:'center',
                }}>
                <Image style={{
                    width:'70px',
                    height:'100px',

                    resizeMode:'contain',
                }} source={require('../assets/img_1.png')}>
                </Image>
                </View>
               
                
                </View>
                <View style={{
                    marginTop:'10px',  
                    backgroundColor:'#eeeff0', 
                    justifyContent:'center',
                    
                }}>
                {data.map((item)=>{
                        return(
                          <View style={{
                            marginTop:'20px',
                            backgroundColor:'#ffffff',
                            flex:5,
                          }}>
                            <View style={{
                                flex:1,
                                flexDirection:'row',
                                marginTop:'10px',
                                backgroundColor:'#ffffff',
                                padding:'10px',
                            }}>
                                <Image style={{
                            width:'50px',
                            height:'50px',
                            borderRadius:'25px',
                          }} source={item.avt}/>
                          <View style={{
                            flexDirection:'row',
                          }}>
                        <View style={{
                            marginLeft:'10px',
                            width:'270px',
                            
                          }}>
                        <Text>{item.name}</Text>
                          <Text style={{
                            marginTop:'10px',
                            color:'gray',
                            fontSize:'16px',
                          }}>12/11 lúc 13:45</Text>
                        </View>
                        <EllipsisOutlined style={{
                            fontSize:30,
                            marginLeft:'10px',
                            color:'grey',
                        }} />
                          </View>
                          
                        </View>
                        
                           <View style={{
                            flex:4,
                            backgroundColor:'#ffffff',
                           }}>
                           <Image style={{
                                width:'400px',
                                height:'300px',        
                                resizeMode:'contain',   
                            }} source={item.image}/>

                           </View>
                        <View style={{
                            flexDirection:'row',
                            padding:'5px',
                            backgroundColor:'#fff',
                            alignItems:'center',
                            flex:1,
                            backgroundColor:'#fff',
                        }}>
                    <View style={{
                             flexDirection:'row',
                            // padding:'5px',
                            // backgroundColor:'#fff',
                            // alignItems:'center',
                             flex:2,
                             backgroundColor:'white',

                        }}>
                            <TouchableOpacity style={{
                                flexDirection:'row',
                                alignItems:'center',
                            }}>
                            <HeartOutlined style={{
                                fontSize:'30px',
                            }}/>
                             <Text style={{
                                marginLeft:'10px',
                            }}>7</Text>

                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                flexDirection:'row',
                                alignItems:'center',
                                marginLeft:'10px',
                            }}>
                            <CommentOutlined style={{
                                fontSize:'30px',

                            }}/>
                            <Text style={{
                                marginLeft:'10px',
                            }}>7</Text>
                            </TouchableOpacity>
                        </View>  
                         <View style={{
                             flexDirection:'row',
                         }}>
                               <Text style={{
                                
                                color:'rgb(218,219,219)',

                            }}>
                                 Thích bởi
                            </Text>
                            <Image style={{
                                width:20,
                                height:20,
                                marginLeft:10,
                                marginRight:5,
                            }} source={require('../assets/Avatar.png')}/>
                         </View>

                        </View>    
                            
                        </View> 
                           
                        );
                    })}
                </View>
            </ScrollView>
           
           {/* footer */}
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
        backgroundColor: "#eeeff0",
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
         
         backgroundColor:'pink',
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
         width:'55%',
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
   export default Diary ;

 