import React, { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { IconButton } from "../../components/IconButton";
import { globalStyles } from "../../global/globalStyles";
import { AuthContext } from '../../context/AuthContext'

export function Home({ navigation }) {
  const { user } = useContext(AuthContext)

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Olá, {user.nome}! </Text>
      <View style={styles.buttonContainer}>
        <IconButton
          iconName="Plus"
          title="Novo Pedido"
          onPress={() => navigation.navigate("Novo Pedido")}
        />
        <IconButton
          iconName="Scroll"
          title="Meus Pedidos"
          onPress={() => navigation.navigate("Meus Pedidos")}
        />
        <IconButton
          iconName="Info"
          title="Sobre"
          onPress={() => navigation.navigate("Sobre")}
        />
        <IconButton
          iconName="SignOut"
          title="Sair"
          // onPress={() => navigation.navigate("Sobre")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
