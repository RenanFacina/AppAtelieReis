import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../../global/globalStyles";
import { useForm, Controller } from "react-hook-form";
import { Picker } from "@react-native-picker/picker";
import { database } from "../../services/firebase.config";
import { get, push, ref, set } from "firebase/database";
import { AuthContext } from "../../context/AuthContext";
import { format } from "date-fns";

export function NovoPedido() {
  const [categorias, setCategorias] = useState([]);
  const { user } = useContext(AuthContext);

  //TODO Usar .then e .catch na funcao get
  useEffect(() => {
    async function getCategorias() {
      const snapshot = await get(ref(database, "categorias"));
      if (snapshot.exists()) {
        setCategorias([]);

        snapshot.forEach((item) => {
          let data = {
            key: item.key,
            nome: item.val().nome,
          };
          setCategorias((oldArray) => [...oldArray, data]);
        });
      } else {
        console.log("No data available");
      }
    }

    getCategorias();
  }, []);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onSubmit", defaultValues: { categoria: "" } });

  function handleCreateNewOrder(data) {
    const novoPedido = {
      usuario: user.uid,
      dataPedido: format(new Date(), "dd/MM/yyyy HH:mm"),
      status: "pendente",
      categoria: data.categoria,
      quantidade: data.quantidade,
      descricao: data.teste,
      enderecoEntrega: data.teste,
      telefoneContato: data.teste,
    };

    const pedidosRef = ref(database, "pedidos/");
    const novoPedidoRef = push(pedidosRef);

    set(novoPedidoRef, novoPedido)
      .then(() => {
        alert("Pedido adicionado com sucesso!");
      })
      .catch((error) =>
        alert(`Ocorreu um erro ao adicionar um novo pedido\n ${error}`)
      );
  }

  return (
    <ScrollView style={globalStyles.container}>
      {/*Picker*/}
      {errors.categoria && (
        <Text style={{ color: "#FF0000" }}>Campo obrigatório</Text>
      )}
      <View
        style={[
          globalStyles.pickerView,
          {
            borderWidth: errors.categoria && 2,
            borderColor: errors.categoria && "#FF0000",
          },
        ]}
      >
        <Controller
          control={control}
          name="categoria"
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Picker
              style={globalStyles.pickerInput}
              selectedValue={value}
              onValueChange={onChange}
              onBlur={onBlur}
            >
              <Picker.Item label="Escolha um..." value="" />
              {categorias.map((item) => (
                <Picker.Item
                  style={globalStyles.pickerItem}
                  key={item.key}
                  label={item.nome.charAt(0).toUpperCase() + item.nome.slice(1)}
                  value={item.nome}
                />
              ))}
            </Picker>
          )}
        />
      </View>

      {/*Input Teste*/}
      {errors.teste && (
        <Text style={{ color: "#FF0000" }}>Campo obrigatório</Text>
      )}
      <Controller
        control={control}
        name="teste"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[
              globalStyles.input,
              {
                borderWidth: errors.teste && 2,
                borderColor: errors.teste && "#FF0000",
              },
            ]}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Digite teste"
          />
        )}
      />

      {/*Quantidade*/}
      {errors.quantidade && (
        <Text style={{ color: "#FF0000" }}>Campo obrigatório</Text>
      )}
      <Controller
        control={control}
        name="quantidade"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[
              globalStyles.input,
              {
                borderWidth: errors.quantidade && 2,
                borderColor: errors.quantidade && "#FF0000",
              },
            ]}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Quantidade"
            keyboardType="numeric"
          />
        )}
      />

      <TouchableOpacity
        style={globalStyles.submitButton}
        onPress={handleSubmit(handleCreateNewOrder)}
      >
        <Text style={globalStyles.submitButtonText}>Enviar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
