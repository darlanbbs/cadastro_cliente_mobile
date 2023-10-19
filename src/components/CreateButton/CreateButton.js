import { View } from "react-native";
import * as C from "./styles";

const CreateButton = () => {
  return (
    <View>
      <C.StylizedButton>
        <C.StylizedClientesTextButton>
          Cadastrar Cliente
        </C.StylizedClientesTextButton>
      </C.StylizedButton>
    </View>
  );
};

export default CreateButton;
