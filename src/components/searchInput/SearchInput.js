import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  SafeAreaView,
} from "react-native";
import { handleSearch } from "../../config/db";
import SearchCard from "../CardUser/CardUser";
import * as C from "./styles";
const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  return (
    <SafeAreaView>
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
        {searchTerm.length > 0 && (
          <FlatList
            style={{ flex: 1, width: "100%" }}
            data={results}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <SearchCard item={item.nome_ou_nome_empresa} />
            )}
          />
        )}
      </C.InputSearchContainer>
    </SafeAreaView>
  );
};

export default SearchComponent;
