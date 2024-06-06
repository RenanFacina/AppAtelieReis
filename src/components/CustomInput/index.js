import React from "react";
import { TextInput, StyleSheet, View, Text } from "react-native";

export function CustomInput({
  type = "text",
  value,
  placeholder,
  hideText = false,
  style,
  onChangeText,
  error,
}) {
  return (
    <View style={styles.container}>
      <TextInput
        inputMode={type}
        value={value}
        placeholder={placeholder}
        secureTextEntry={hideText}
        style={[styles.input, style]}
        onChangeText={onChangeText}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  input: {
    height: 50,
    backgroundColor: '#FFF',
    borderColor: "#ccc",
    color: '#ccc',
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 20
  },
  error: {
    fontSize: 14,
    color: "red",
  },
});
