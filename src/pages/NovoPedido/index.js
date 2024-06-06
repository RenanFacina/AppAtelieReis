import React from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import { globalStyles } from "../../global/globalStyles";
import { CustomInput } from "../../components/CustomInput";

export function NovoPedido() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text>Tela Novo Pedido</Text>
      <CustomInput placeholder='Digite um texto' type="text" error="ocorreu um erro"/>
      <CustomInput placeholder='Digite um número' type="numeric"/>
      <CustomInput placeholder='Digite um decimal' type="decimal"/>
      <CustomInput placeholder='Digite um telefone' type="tel"/>
      <CustomInput placeholder='Digite um texto' type="text"/>
    </ScrollView>
  );
}
