import React, { useContext, useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { globalStyles } from "../../global/globalStyles";
import { OrderCard } from "../../components/OrderCard";
import { ref, get, off, onValue } from "firebase/database";
import { database } from "../../services/firebase.config";
import { AuthContext } from "../../context/AuthContext";
import { compareDesc, format, parse } from "date-fns";

export function MeusPedidos() {
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
    <ScrollView style={globalStyles.container}>
      {pedidos.map((pedido) => (
        <OrderCard key={pedido.key} order={pedido} />
      ))}
    </ScrollView>
  );
}
