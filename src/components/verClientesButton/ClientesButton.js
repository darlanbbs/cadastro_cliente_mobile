import { View } from "react-native";
import { StylizedClientesButton, StylizedClientesTextButton } from "./styles";

const ClientesButton = () => {
  return (
    <View>
      <StylizedClientesButton>
        <StylizedClientesTextButton>Clientes</StylizedClientesTextButton>
      </StylizedClientesButton>
    </View>
  );
};

export default ClientesButton;
