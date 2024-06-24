import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import * as PhosphorIcons from "phosphor-react-native";

export function IconButton({
  title,
  iconName,
  iconSize = 60,
  iconColor = "#FFF",
  onPress,
  style,
}) {
  // Obtém o ícone com base no nome fornecido
  const IconComponent = PhosphorIcons[iconName];

  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      {IconComponent && (
        <IconComponent size={iconSize} color={iconColor} style={styles.icon} />
      )}
      {title && <Text style={styles.buttonText}>{title}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '45%',
    height: 170,
    justifyContent: "center",
    alignItems: "center",
    margin: 9,
    backgroundColor: "#007bff",
    borderRadius: 10,
    padding: 10
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 22,
    fontWeight: 'bold'
  },
});
