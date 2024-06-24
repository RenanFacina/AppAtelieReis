import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "black",
    textAlign:'center',
  },
  h2: {
    fontSize: 16,
    fontWeight:"bold",
    textAlign: "center",
    marginBottom: 10,
  },
  card:{
    flex:1,
    backgroundColor:"#B49CA4",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius:25,
    borderBottomRightRadius:25,
    paddingStart:'5%',
    paddingEnd:'5%',
    paddingBottom:45,
    marginStart:10,
    marginEnd:10,
    marginBottom:30,
  },
  map: {
    width: '100%',
    height: 250,
    margin: 0,

  },
  image: {
    width: '100%',
    height: 250,
  },

  cabecalho:{
    marginTop:'14%',
    marginBottom:'8%',
    paddingStart:'5%',
  },
  subTitulo:{
    fontSize:14,
    marginBottom:5,
    alignSelf:'center',
  },
});

export default styles;
