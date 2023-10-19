import { View } from "react-native";
import * as C from "./styles";

const CreateButton = ({ navigation }) => {
  return (
    <View onPress={() => navigation.navigate("Cadastro")}>
      <C.StylizedButton>
        <C.StylizedClientesTextButton>
          Cadastrar Cliente
        </C.StylizedClientesTextButton>
      </C.StylizedButton>
    </View>
  );
};

export default CreateButton;
