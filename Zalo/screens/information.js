import * as React from 'react' ;
import { 
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    FlatList,
   } from 'react-native';
import { SettingOutlined , UserSwitchOutlined ,CustomerServiceTwoTone , RightOutlined  
    ,SearchOutlined, LockOutlined ,PieChartOutlined,CloudOutlined ,QrcodeOutlined,AppstoreOutlined,MessageOutlined,ContactsOutlined,UserOutlined,ClockCircleOutlined} from '@ant-design/icons';
import { AntDesign} from '@expo/vector-icons';

   const information = ({navigation})=>{
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                
                <TouchableOpacity style={styles.btnicon}>
                       
                      <SearchOutlined style={{fontSize:'30px' , color:'#fff'}}/>
                     </TouchableOpacity>   
                    <TouchableOpacity style={styles.btntext} onPress={
                        () => <TextInput placeholder='Tìm kiếm'></TextInput>
                    }>
                         <Text style={styles.txtS}>Tìm kiếm</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnSetting}>
                      <SettingOutlined style={{fontSize:'30px' , color:'#fff'}}/>
                    </TouchableOpacity>
                  </View> 
                  <View style={styles.group_list}>
                        <View style={styles.view_imp}>
                            <TouchableOpacity style={styles.btnImp}>
                                <Image style={styles.img_avt} source={require('../assets/Avatar.png')}/>
                                <View style={styles.view_avt}>
                                <Text style={{fontWeight:500}}>
                                    Avatar  
                                    {/* su dung api de load ten */}
                                </Text>
                                <Text style={{color:'grey' , fontWeight:500 , marginTop:1}}>
                                    Xem trang cá nhân 
                                </Text>
                                </View>
                                <TouchableOpacity>
                                     <UserSwitchOutlined style={{fontSize:'30px' , color:'#157ef9'}}/>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.view_song}>
                            <TouchableOpacity style={styles.btn_song}>
                                <CustomerServiceTwoTone style={{marginTop:5 , fontSize:30}} />
                                <View style={{marginLeft:15}}>
                                <Text style={{fontWeight:500 , fontSize:18}}>Nhạc chờ Zalo</Text>
                                <Text style={{color:'grey' , fontWeight:500}}>Đăng ký nhạc chờ , thể hiện cá tính</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.view_qr}>
                            <TouchableOpacity style={styles.btn_qr}>
                             <QrcodeOutlined style={{fontSize:'30px',color:'#129EFD'}}/>                    
                                <View style={{marginLeft:15}}>
            
                                <Text style={ {fontWeight:500 , fontSize:18,marginTop:5}}>Ví QR</Text>
                                <Text style={{color:'grey' , fontWeight:500}}>Lưu trữ và xuất trình các tin nhắn quan trọng</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.view_mid}>
                        <View style={styles.view_cloud}>
                            <TouchableOpacity style={styles.btn_clu}>
                                <CloudOutlined style={{fontSize:30 , color:'#129EFD',marginTop:5 }}/>
                                <View style={{marginLeft:15}}>
                                <Text  style={ {fontWeight:500 , fontSize:18}}>Cloud của tôi</Text>
                                <Text  style={{color:'grey' , fontWeight:500}}>Lưu trữ các tin nhắn quan trọng</Text>
                                </View>
                                <RightOutlined  style={{marginLeft:90 , marginTop:15}}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.view_data}>
                            <TouchableOpacity style={styles.btn_data}>
                            <PieChartOutlined style={{color:'#129EFD',fontSize:30,marginTop:5}}/>
                                <View style={{marginLeft:15}}>
                                <Text  style={ {fontWeight:500 , fontSize:18}}>Dung lượng và dữ liệu</Text>
                                <Text  style={{color:'grey' , fontWeight:500}}>Quản lý dữ liệu Zalo của bạn</Text>
                                </View>
                                <RightOutlined  style={{marginLeft:108 , marginTop:15}}/>
                            </TouchableOpacity>
                        </View>
                        </View>

                        <View style={styles.view_bot}>
                        <View style={styles.vew_scu}>
                            <TouchableOpacity style={styles.btn_scu}>
                                <Image style={styles.iconsearch} source={require('../assets/icon_sec.png')}/>
                                <Text  style={ {fontWeight:500 , fontSize:18 , marginLeft:15}}>Tài khoản bảo mật</Text>
                                <RightOutlined  style={{marginLeft:138 , marginTop:15}}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.view_qrt}>
                            <TouchableOpacity style={styles.btn_qrt}>
                            <LockOutlined style={{fontSize:'30px',color:'#129EFD',marginTop:5}}/>
                                <Text  style={ {fontWeight:500 , fontSize:18 , marginLeft:15}}>Quyền riêng tư</Text>
                                <RightOutlined  style={{marginLeft:165 , marginTop:15}}/>
                            </TouchableOpacity>
                        </View>
                        </View>
                    </View>
               
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

         </View>

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
    },
    btnQr:{
        margin:15,
    },
    group_menu:{
        flex:1,
        backgroundColor:'#fff',

    },
    view_imp:{
        backgroundColor:'#fff',
        justifyContent:'center',
    },
    btnImp :{   
        flexDirection:'row',
        padding:'15px',
    },
    view_avt:{
        marginLeft:10,
        marginRight:140,
    },
    img_avt:{
        resizeMode:'contain',
        width:'50px',
        height:'50px',
        
    },
    btn_song:{
        flexDirection:'row',
        padding:'15px',
       
    },
    btn_qr:{
        flexDirection:'row',
        padding:'15px',
       
    },
    view_song:{
        backgroundColor:'#fff',
        justifyContent:'center',
        marginTop:'10px',
    },
    view_qr:{
        backgroundColor:'#fff',
        justifyContent:'center',
        marginTop:'10px',
    },
    view_mid:{
        marginTop:10,
    },
    view_cloud:{
        backgroundColor:'#fff',
        justifyContent:'center',
        borderColor:'grey',
        borderBottomWidth:'1px',
       
    },
    view_data:{
        backgroundColor:'#fff',
        justifyContent:'center',
    },
    btn_clu:{
        flexDirection:'row',
        padding:'15px',
    },
    btn_data:{
        flexDirection:'row',
        padding:'15px',
    },
    view_bot:{
        marginTop:10,
    },
    vew_scu:{
        backgroundColor:'#fff',
        justifyContent:'center',
        borderColor:'grey',
        borderBottomWidth:'1px',
    },
    view_qrt:{
        backgroundColor:'#fff',
        justifyContent:'center',
    },
    btn_scu:{
        flexDirection:'row',
        padding:'15px',
    },
    btn_qrt:{
        flexDirection:'row',
        padding:'15px',
    }
   });
   export default information ;