import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Cadastro from './src/pages/Cadastro/telaCadastro.js';
import Login from './src/pages/Login/telaLogin.js';
import Inicio from './src/pages/Inicio/inicio.js';

const Stack = createStackNavigator();

export default function App() {

  
  return (

   <NavigationContainer>

{/* headerShown tira a barra de cima */}
    <Stack.Navigator  initialRouteName = "Inicio" screenOptions={{headerShown:false}} >

      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>

   </NavigationContainer>
  );
}