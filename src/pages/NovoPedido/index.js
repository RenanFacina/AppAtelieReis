import React, { useEffect, useState } from "react";
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
import { get, ref } from "firebase/database";

export function NovoPedido() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onSubmit" });

  function handleCreateNewOrder(data) {
    console.log(data);
  }

  const [categorias, setCategorias] = useState([]);

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

  return (
    <ScrollView style={globalStyles.container}>
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
          render={({ field: { onChange, value = 1 } }) => (
            <Picker
              style={globalStyles.pickerInput}
              selectedValue={value}
              onValueChange={onChange}
            >
              <Picker.Item
                key="1"
                label="Escolha um"
                value={1}
                enabled={false}
              />
              {categorias.map((item) => (
                <Picker.Item
                  style={globalStyles.pickerItem}
                  key={item.key}
                  label={item.nome}
                  value={item.nome}
                />
              ))}
            </Picker>
          )}
        />
      </View>

      {errors.teste && (
        <Text style={{ color: "#FF0000" }}>Campo obrigatório</Text>
      )}
      <Controller
        control={control}
        name="teste"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={[
              globalStyles.input,
              {
                borderWidth: errors.teste && 2,
                borderColor: errors.teste && "#FF0000",
              },
            ]}
            onChangeText={onChange}
            value={value}
            placeholder="Digite teste"
          />
        )}
      />

      {errors.quantidade && (
        <Text style={{ color: "#FF0000" }}>Campo obrigatório</Text>
      )}
      <Controller
        control={control}
        name="quantidade"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={[
              globalStyles.input,
              {
                borderWidth: errors.quantidade && 2,
                borderColor: errors.quantidade && "#FF0000",
              },
            ]}
            onChangeText={onChange}
            value={value}
            placeholder="Quantidade"
            keyboardType="numeric"
          />
        )}
      />

      <TouchableOpacity onPress={handleSubmit(handleCreateNewOrder)}>
        <Text>Clique para enviar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

{
  /* <Picker
          style={globalStyles.pickerInput}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }
        >
          {categorias.map((item) => (
            <Picker.Item key={item.key} label={item.nome} value={item.nome} />
          ))}
        </Picker> */
}
