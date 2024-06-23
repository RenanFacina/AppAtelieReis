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

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      categoria: "",
      tamanho: "",
      descricao: "",
      quantidade: "",
      telefoneContato: "",
      enderecoEntrega: "",
    },
  });

  useEffect(() => {
    get(ref(database, "categorias"))
      .then((snapshot) => {
        setCategorias([]);

        snapshot.forEach((item) => {
          let data = {
            key: item.key,
            nome: item.val().nome,
          };
          setCategorias((oldArray) => [...oldArray, data]);
        });
      })
      .catch((error) => {
        alert(`Ocorreu um erro ao buscar as categorias:\n${error}`);
      });
  }, []);

  function handleCreateNewOrder(data) {
    const novoPedido = {
      usuario: user.uid,
      dataPedido: format(new Date(), "dd/MM/yyyy HH:mm"),
      status: "pendente",
      categoria: data.categoria,
      tamanho: data.tamanho,
      descricao: data.descricao,
      quantidade: data.quantidade,
      telefoneContato: data.telefoneContato,
      enderecoEntrega: data.enderecoEntrega,
    };

    const pedidosRef = ref(database, "pedidos/");
    const novoPedidoRef = push(pedidosRef);

    set(novoPedidoRef, novoPedido)
      .then(() => {
        reset();
        alert("Pedido adicionado com sucesso!");
      })
      .catch((error) =>
        alert(`Ocorreu um erro ao adicionar um novo pedido\n ${error}`)
      );
  }

  return (
    <ScrollView style={globalStyles.container}>
      {/*Categoria*/}
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
              <Picker.Item style={globalStyles.pickerItem} label="Escolha uma Categoria..." value="" />
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

      {/*Tamanho*/}
      <View
        style={[
          globalStyles.pickerView,
          {
            borderWidth: errors.tamanho && 2,
            borderColor: errors.tamanho && "#FF0000",
          },
        ]}
      >
        <Controller
          control={control}
          name="tamanho"
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Picker
              style={globalStyles.pickerInput}
              selectedValue={value}
              onValueChange={onChange}
              onBlur={onBlur}
            >
              <Picker.Item style={globalStyles.pickerItem} label="Escolha um Tamanho..." value="" />
              <Picker.Item style={globalStyles.pickerItem} label="P" value="P" />
              <Picker.Item style={globalStyles.pickerItem} label="M" value="M" />
              <Picker.Item style={globalStyles.pickerItem} label="G" value="G" />
              <Picker.Item style={globalStyles.pickerItem} label="GG" value="GG" />
            </Picker>
          )}
        />
      </View>

      {/*Descrição*/}
      <Controller
        control={control}
        name="descricao"
        rules={{ required: true, maxLength: 50 }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[
              globalStyles.input,
              {
                borderWidth: errors.descricao && 2,
                borderColor: errors.descricao && "#FF0000",
              },
            ]}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Descrição"
          />
        )}
      />

      {/*Quantidade*/}
      <Controller
        control={control}
        name="quantidade"
        rules={{ required: true, max: 100 }}
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

      {/*Telefone para contato*/}
      <Controller
        control={control}
        name="telefoneContato"
        rules={{ required: true, maxLength: 11 }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[
              globalStyles.input,
              {
                borderWidth: errors.telefoneContato && 2,
                borderColor: errors.telefoneContato && "#FF0000",
              },
            ]}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Telefone para contato"
            keyboardType="phone-pad"
          />
        )}
      />

      {/*Endereço para entrega*/}
      <Controller
        control={control}
        name="enderecoEntrega"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[
              globalStyles.input,
              {
                borderWidth: errors.enderecoEntrega && 2,
                borderColor: errors.enderecoEntrega && "#FF0000",
              },
            ]}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Endereço para entrega"
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
