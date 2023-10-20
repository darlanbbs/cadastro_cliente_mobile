import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../pages/HomePage/HomePage";
import CreationPage from "../pages/CreatIonPage/CreationPage";
import ClientsPage from "../pages/ClientsPage/ClientsPage";
import ProfilePage from "../pages/DetailsPage/ProfilePage";

const Stack = createNativeStackNavigator();

function HeaderStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen
        name="Cadastro"
        component={CreationPage}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Clientes"
        component={ClientsPage}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Perfil"
        component={ProfilePage}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
}

export default HeaderStack;
