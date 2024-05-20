import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import TelaLogin from "./src/components/login/index";

export default function App() {
  return (
    <View style={styles.container}>
      <TelaLogin/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop: 80,
  },
});