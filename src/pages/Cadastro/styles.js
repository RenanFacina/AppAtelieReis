import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B49CA4",
  },
  cabecalho:{
    marginTop:'14%',
    marginBottom:'8%',
    paddingStart:'5%',
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFF",
  },
  subTitulo:{
    fontSize:20,
    marginTop:28,
  },
  form:{
    backgroundColor:'#FFF',
    flex:1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart:'5%',
    paddingEnd:'5%'
  },
  input: {
    borderBottomWidth:1,
    height:40,
    marginBottom:12,
    fontSize:16,
  },
  botao: {
    backgroundColor: "#B49CA4",
    width:'100%',
    borderRadius:4,
    paddingVertical:8,
    marginTop:14,
    justifyContent:'center',
    alignItems:'center'
  },
  textoBotao: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  subTextoBotao: {
    color: "#a1a1a1",
    marginTop:14,
    padding:10,
  },
  forcaSenha:{
    marginBottom:5,
    fontWeight:"bold",
  },
});

export default styles;