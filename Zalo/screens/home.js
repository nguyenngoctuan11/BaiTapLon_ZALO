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
   } from 'react-native';

   const home = ({navigation})=>{
        return(
            <SafeAreaView style={styles.container}>
                <View>
                    <Text style={styles.text}>Zalo</Text>
                </View>
                <View style={styles.ses}>
                    <TouchableOpacity style={styles.btnDangNhap}
                        onPress={() => navigation.navigate('login')}
                    ><Text style={styles.textBtnDN}>ĐĂNG NHẬP</Text></TouchableOpacity>
                    <TouchableOpacity  style={styles.btnDangKy}><Text style={styles.textBtnDK}>ĐĂNG KÝ</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btnQuenMK}><Text>Quên mật khẩu</Text></TouchableOpacity>
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
        alignItems: "center",
        justifyContent:"center",
        // justifyContent: "center",
      },
    text:{
        fontSize:80,
        color:"#26CAE1",
    },
    btnDangNhap:{
        width:232,
        height:64,
        backgroundColor:'#5CE1FE',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:'20px',
        marginBottom:"20px",

    },
    btnDangKy:{
        width:232,
        height:64,
        backgroundColor:'#C9C9C9',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:'20px',
    },
    btnQuenMK:{
        justifyContent:'center',
        alignContent:'center',
        marginLeft:'65px',
        marginTop:'10px',
    },
    textBtnDN:{
        color:'#fff',
        fontSize:'20px',
        fontWeight:'bold',
    },
    textBtnDK:{
        color:'black',
        fontSize:'20px',
        fontWeight:'bold',
    },
    ses:{
        justifyContent:'center',
        alignContent:'center',
    }
   });
   export default home ;