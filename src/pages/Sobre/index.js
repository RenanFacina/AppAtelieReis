import React from "react";
import {View,Text, Image } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";

import * as Animatable from 'react-native-animatable';

export function Sobre() {

  const atelieLocation = {
    latitude: -23.772252094063617,
    longitude: -46.69035489325301,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <View style={styles.container}>
      <ScrollView>
      <Animatable.View animation='fadeInLeft' delay={500} style={styles.cabecalho}>
      <Text style={styles.titulo}>Sobre Nós</Text>
      </Animatable.View>

      <View style={styles.card}>
        <Text style={styles.h2}>Costurando histórias únicas para cada cliente. </Text>

        <Image
          source={require('../../assets/IMG_Sobre_Costura.jpg')}
          style={styles.image}
        />
      </View>
        <View style={styles.card}>
        <Text style={styles.h2}>Contato</Text>
        <Text style={styles.subTitulo}>(11)96432-3775</Text>
        <Text style={styles.h2}>Endereço</Text>
        <Text style={styles.subTitulo}>R. Rosa de Vênus, 260 - Grajaú</Text>
        <Text style={styles.subTitulo}>São Paulo - SP, 04856-370</Text>

        <MapView
            style={styles.map}
            region={atelieLocation}
          >
            <Marker coordinate={atelieLocation} />
          </MapView>
      </View>

      
      </ScrollView>
    </View>
  );
}
