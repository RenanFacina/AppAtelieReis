import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#FFF",
    height: 60,
    marginBottom: 20,
    paddingHorizontal: 17,
    fontSize: 20,
    borderRadius: 10,
  },
  pickerView: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginBottom: 20,
  },
  pickerInput: {
    height: 60,
    fontSize: 20,
  },
  pickerItem: {
    fontSize: 20,
  },
  wideButton: {
    backgroundColor: '#8d6889',
    height: 120,
    width: 250,
  },
  submitButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: "#B49CA4",
    height: 50,
    borderRadius: 10,
  },
  submitButtonText: {
    color: "#FFF",
    fontSize: 20,
  },
});