import React from "react";
import { Text, StyleSheet, View } from "react-native";

export function OrderCard({ order }) {
  return (
    <View style={styles.orderCard}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardHeaderDate}>Data: {order.dataPedido}</Text>
        <Text style={styles.cardHeaderStatus}>Status: {order.status}</Text>
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.cardBodyText}>Categoria: {order.categoria}</Text>
        <Text style={styles.cardBodyText}>Tamanho: {order.tamanho}</Text>
        <Text style={styles.cardBodyText}>Descrição: {order.descricao}</Text>
        <Text style={styles.cardBodyText}>Quantidade: {order.quantidade}</Text>
        <Text style={styles.cardBodyText}>Tel. Contato: {order.telefoneContato}</Text>
        <Text style={styles.cardBodyText}>Endereço de Entrega: {order.enderecoEntrega}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  orderCard: {
    borderRadius: 5,
    backgroundColor: "#FFF",
    marginBottom: 25
  },
  cardHeader: {
    borderRadius: 5,
    backgroundColor: "#ff0",
    padding: 10,
  },
  cardHeaderDate: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
    margin: 5
  },
  cardHeaderStatus: {
    textAlign: 'right'
  },
  cardBody: {
    padding: 10,  
  },
  cardBodyText: {
    fontSize: 18,
  }
});
