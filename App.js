import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import HeaderStack from "./src/routes/route";
import "styled-components";
import { ThemeProvider } from "styled-components";
import Theme from "./src/theme/theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <NavigationContainer>
        <HeaderStack />
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
