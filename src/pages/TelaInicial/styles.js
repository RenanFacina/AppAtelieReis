import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,     
        backgroundColor:"#B49CA4", 
    },
    logo:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#B49CA4',
    },
    form:{
        flex:1,
        backgroundColor:'#FFF',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingStart: '5%',
        paddingEnd: '5%',
    },

    title1:{
        fontSize:26,
        fontWeight:'bold',
        marginTop:28,
        marginBottom:5,
    },
    title2:{
        fontSize:19,
        fontWeight:'bold',
        marginBottom:12,
    },
    text:{
        color:'black'
    },
    botao:{
        position:'absolute',
        backgroundColor:"#B49CA4",
        borderRadius:50,
        paddingVertical:8,
        width:'60%',
        alignSelf:'center',
        bottom:'15%',
        alignItems:'center',
        justifyContent:'center',
    },
    botaoTexto:{
        fontSize:18,
        color:'black',
        fontWeight:'bold'
    }
});

export default styles;