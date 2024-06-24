import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "black",
    textAlign: 'center',
    right: 10,
  },
  h2: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 16,
    fontWeight:"bold",
    textAlign: "center",
  },
  card:{
    flex:1,
    justifyContent: 'center',
    backgroundColor:"#B49CA4",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    paddingTop: 5,
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
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: 250,
    marginTop: 10,
    borderRadius: 20,
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
