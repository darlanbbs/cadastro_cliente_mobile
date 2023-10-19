import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import HeaderStack from "./src/routes/route";

function App() {
  return (
    <NavigationContainer>
      <HeaderStack />
    </NavigationContainer>
  );
}

export default App;
