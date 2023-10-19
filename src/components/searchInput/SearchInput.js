import React, { useState } from "react";
import { View, TextInput, Button, FlatList, Text } from "react-native";
import axios from "axios";
import { handleSearch } from "../../config/db";

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  //   handleSearch(searchTerm).then((data) => {
  //     setResults(data);
  //   });

  return (
    <View>
      <TextInput
        style={{
          width: 300,
          height: 50,
          borderWidth: 1,
          marginBottom: 10,
          paddingLeft: 10,
        }}
        placeholder="Digite o nome para buscar"
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
      />
      <Button
        title="Buscar"
        onPress={() =>
          handleSearch(searchTerm).then((data) => setResults(data))
        }
      />
      <FlatList
        data={results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 10 }}>
            <Text>Nome: {item.nome_ou_nome_empresa}</Text>
            <Text>Endereço: {item.endereco}</Text>
            <Text>Telefone: {item.telefone}</Text>
            <Text>Email: {item.email}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchComponent;
