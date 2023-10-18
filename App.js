import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createPhysicalClient, getAllClients } from "./src/config/db";
export default function App() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    // createPhysicalClient("nome", "cpf", "email", "endereco", "rg", "telefone");
    getAllClients();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! xd</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
