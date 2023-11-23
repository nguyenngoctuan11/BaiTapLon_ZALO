
import * as React from 'react' ;
import { 
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    TextInput,
   } from 'react-native';

   const login = ({navigation})=>{
        return(

            <SafeAreaView style={styles.container}>
                <View>
                <Text style={styles.text}>Đăng nhập Zalo</Text>
                </View>
                <View style={styles.view_ses}>
                    <TextInput style={styles.inputSDT} placeholder='Số điện thoại'></TextInput>
                    <TextInput style={styles.inputPass} placeholder='Mật khẩu' keyboardType='visible-password'></TextInput>
                    <TouchableOpacity 
                    onPress={() => navigation.navigate('ListChat')}
                     style={styles.btnDangNhap} ><Text style={styles.textBtnDN}>Đăng Nhập</Text></TouchableOpacity>
                    <TouchableOpacity><Text>Quên mật khẩu</Text></TouchableOpacity>
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
        // justifyContent: "center",
      },
    text:{
        fontSize:40,
        color:"#26CAE1",
    },

    inputSDT:{
        borderColor:'#26CAE1',
        borderWidth:1,
        width:'300px',
        height:'50px',
        padding:10,
        marginTop:10,
        marginBottom:10,
        borderRadius:20,    

    },
    inputPass:{
        borderColor:'#26CAE1',
        borderWidth:1,
        width:'300px',
        height:'50px',
        padding:10,
        marginTop:10,
        marginBottom:10,
        borderRadius:20,  
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
    view_ses:{
        alignItems:'center',
    },
    textBtnDN:{
        color:'#fff',
        fontSize:'20px',
        fontWeight:'bold',
    },
      
    })

export default  login ;