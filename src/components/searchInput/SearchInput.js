import React, { useState } from "react";
import { View, TextInput, Button, FlatList, Text } from "react-native";
import { handleSearch } from "../../config/db";
import SearchCard from "../CardUser/CardUser";
import * as C from "./styles";
const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  return (
    <C.InputSearchContainer>
      <C.InputSearch
        placeholderTextColor={"#6c6c6a"}
        placeholder="Digite o nome para buscar"
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
      />
      <C.ButtonSearch
        onPress={() =>
          handleSearch(searchTerm).then((data) => setResults(data))
        }
      >
        <C.TextButtonSearch>Buscar</C.TextButtonSearch>
      </C.ButtonSearch>
      <FlatList
        data={results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 10 }}>
            <SearchCard item={item.nome_ou_nome_empresa} />
          </View>
        )}
      />
    </C.InputSearchContainer>
  );
};

export default SearchComponent;
