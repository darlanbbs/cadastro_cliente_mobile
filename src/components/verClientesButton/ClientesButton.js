import { View } from "react-native";
import { StylizedClientesButton, StylizedClientesTextButton } from "./styles";

const ClientesButton = ({ navigation }) => {
  return (
    <View onPress={() => navigation.navigate("Clientes")}>
      <StylizedClientesButton onPress={() => navigation.navigate("Clientes")}>
        <StylizedClientesTextButton>Clientes</StylizedClientesTextButton>
      </StylizedClientesButton>
    </View>
  );
};

export default ClientesButton;
