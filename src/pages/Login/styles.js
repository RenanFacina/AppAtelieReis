import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  titulo: {
    fontSize: 36,
    fontWeight: "bold",
    color: "blue",
    margin: 10,
  },
  input: {
    borderColor: "blueviolet",
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 22,
    width: "80%",
    padding: 10,
    margin: 10,
  },
  botao: {
    backgroundColor: "blueviolet",
    borderRadius: 10,
    width: "80%",
    padding: 10,
    margin: 10,
    alignItems: "center",
  },
  textoBotao: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  subBotao: {
    padding: 10,
  },
  subTextoBotao: {
    color: "blueviolet",
  },
});
