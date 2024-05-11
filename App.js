import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {MaterialIcons} from '@expo/vector-icons'



import Cadastro from './src/pages/Cadastro/telaCadastro.js';
import Login from './src/pages/Login/telaLogin.js';
import Inicio from './src/pages/Inicio/inicio.js';
import Receitas from './src/pages/Receitas/receitas.js';
import Pesquisa from './src/pages/Pesquisa/pesquisa.js';
import AdicionarReceita from './src/pages/AdicionarReceita/AdicionarReceita.js';
import Favoritos from './src/pages/Favoritos/favoritos.js';
import Perfil from './src/pages/Perfil/perfil.js';

// pilha de navegação
const Stack = createStackNavigator();

//pilha de navegação da barra central do app 
const Tab = createBottomTabNavigator();


function Tabs() {
//retangulo aonde vao os botoes
  return (<Tab.Navigator screenOptions={{

    tabBarStyle: {
      position: 'absolute',
      backgroundColor: '#0F0D0D',
      height: 70,
     borderTopColor:"black",
    }
  }}>

{/* edição do botao receitas */}
    <Tab.Screen name="Receitas" component={Receitas}
      options={{
     headerShown: false,
     tabBarShowLabel:false,
     
     tabBarIcon:({color ,focused, size})=>{   

      if(focused){
      return <MaterialIcons name='home' size={50} color='#FF6600'></MaterialIcons>
      }

      return <MaterialIcons name='home' size={50} color='#FFFFFF'></MaterialIcons>
    }
   

    }}/>

    <Tab.Screen name="Pesquisa" component={Pesquisa}
    options={{
      headerShown: false,
      tabBarShowLabel:false,


    tabBarIcon:({color ,focused, size})=>{   

      if(focused){
      return <MaterialIcons name='search' size={50} color='#FF6600'></MaterialIcons>
      }

      return <MaterialIcons name='search' size={50} color='#FFFFFF'></MaterialIcons>
    }
     
 
     }}/>
    <Tab.Screen name="AdicionarReceita" component={AdicionarReceita}
    options={{
      headerShown: false,
      tabBarShowLabel:false,
      
      tabBarIcon:({color ,focused, size})=>{   

        if(focused){
        return <MaterialIcons name='add' size={50} color='#FF6600'></MaterialIcons>
        }
  
        return <MaterialIcons name='add' size={50} color='#FFFFFF'></MaterialIcons>
      }
 
     }} />
    <Tab.Screen name="Favoritos" component={Favoritos}
    options={{
      headerShown: false,
      tabBarShowLabel:false,
      tabBarIcon:({color ,focused, size})=>{   

        if(focused){
        return <MaterialIcons name='favorite' size={50} color='#FF6600'></MaterialIcons>
        }
  
        return <MaterialIcons name='favorite' size={50} color='#FFFFFF'></MaterialIcons>
      }
 
     }} />
    <Tab.Screen name="Perfil" component={Perfil} 
    options={{
      headerShown: false,
      tabBarShowLabel:false,
      tabBarIcon:({color ,focused, size})=>{   

        if(focused){
        return <MaterialIcons name='person' size={50} color='#FF6600'></MaterialIcons>
        }
  
        return <MaterialIcons name='person' size={50} color='#FFFFFF'></MaterialIcons>
      }
 
     }}/>


  </Tab.Navigator>


  )
}


export default function App() {
  return (

    <NavigationContainer>

      {/* headerShown tira a barra de cima */}
      <Stack.Navigator initialRouteName="Inicio" screenOptions={{ headerShown: false }} >

        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Receitas" component={Tabs} />
        <Stack.Screen name="Pesquisa" component={Tabs} />
        <Stack.Screen name="AdicionarReceita" component={Tabs} />
        <Stack.Screen name="Favoritos" component={Tabs} />
        <Stack.Screen name="Perfil" component={Tabs} />

      </Stack.Navigator>

    </NavigationContainer>
  );
}