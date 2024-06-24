import React, { useContext, useEffect, useState } from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import { IconButton } from "../../components/IconButton";
import { globalStyles } from "../../global/globalStyles";
import { OrderCard } from "../../components/OrderCard";
import { ref, get, off, onValue } from "firebase/database";
import { database } from "../../services/firebase.config";
import { AuthContext } from "../../context/AuthContext";
import { compareDesc, format, parse } from "date-fns";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import Home from "../Home";

export function MeusPedidos() {
  const navigation = useNavigation();

  const [pedidos, setPedidos] = useState([]);
  const { user } = useContext(AuthContext);

  //use efect antigo
  // useEffect(() => {
  //   const pedidosRef = ref(database, "pedidos");
  //   const userUid = user.uid;

  //Get todos os pedidos
  //   get(pedidosRef)
  //     .then((snapshotPedidos) => {
  //       const pedidosUsuario = [];

  //Percorrer todos pedidos
  //       snapshotPedidos.forEach((snapshotPedido) => {

  //         const pedido = snapshotPedido.val();

  //Se usuário do pedido for o mesmo que está logado, adicionar ao array
  //         if (pedido.usuario === userUid) {
  //           pedidosUsuario.push({ key: snapshotPedido.key, ...pedido });
  //         }
  //       });

  //       setPedidos(pedidosUsuario);
  //     })
  //     .catch((error) => {
  //       alert(`Ocorreu um erro ao buscar os pedidos do usuário:\n${error}`);
  //     });
  // }, []);

  useEffect(() => {
    const pedidosRef = ref(database, "pedidos");
    const userUid = user.uid;

    const handlePedidosUpdate = (snapshotPedidos) => {
      let pedidosUsuario = [];

      snapshotPedidos.forEach((snapshotPedido) => {
        const pedido = snapshotPedido.val();

        if (pedido.usuario === userUid) {
          pedidosUsuario.push({
            key: snapshotPedido.key,
            ...pedido,
          });
        }
      });

      //Ordenar pedidos do mais recente ao mais antigo
      pedidosUsuario.sort((a, b) => {
        const dateA = parse(a.dataPedido, "dd/MM/yyyy HH:mm", new Date());
        const dateB = parse(b.dataPedido, "dd/MM/yyyy HH:mm", new Date());
        return dateB.getTime() - dateA.getTime();
      });

      setPedidos(pedidosUsuario);
    };

    // Adicionar o listener de mudanças nos pedidos
    onValue(pedidosRef, handlePedidosUpdate, {
      onlyOnce: false,
    });

    return () => {
      // Limpar o listener ao desmontar o componente para evitar vazamentos de memória
      off(pedidosRef, "value", handlePedidosUpdate);
    };
  }, []);

  return (
    <Animatable.View style={{ width:'100%', height:'100%'}}
    delay = {600}
    animation = {'fadeInUp'}>
      <ScrollView style={globalStyles.container}>
        {pedidos.map((pedido) => (
          <OrderCard key={pedido.key} order={pedido} />
        ))}
      </ScrollView>
      <IconButton style={styles.addButton}
        iconName="Plus"
        onPress={() => navigation.navigate("Novo Pedido")}
      />
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  addButton: {
    height: 65,
    width: 65,
    backgroundColor: '#B49CA4',
    borderRadius: 15,
    left: '70%',
    bottom: '5%',
  },
})