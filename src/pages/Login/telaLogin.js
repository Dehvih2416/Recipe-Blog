
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, } from 'react-native';
import LinearGradient from 'react-native-web-linear-gradient';
//import { useFonts } from 'expo-font';
import  estilos from './style.js';



export default function Login({navigation}) {
  //Importador de fontes
 // const [] = useFonts({ 'Raleway-VariableFont': require('/assets/fonts/Raleway-VariableFont_wght.ttf') });

  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const [isEmptyLogin, setIsEmptyLogin] = useState(false);
  const [isEmptySenha, setIsEmptySenha] = useState(false);



  function fnValidar() {
    let sLogin = login;
    let sSenha = senha;

    if (sLogin == '') {
      setIsEmptyLogin(true);
    } else {
      setIsEmptyLogin(false);
    }


    if (sSenha == '') {
      setIsEmptySenha(true);
    } else {
      setIsEmptySenha(false);
    }

    if(sSenha!=''&& sLogin!=''){
      
      navigation.navigate('Receitas')
      console.log('entrou');
      
    }
  }


  return (
    //container pai
    <View style={estilos.container}>
      {/* comando que gera o gradiente do background */}
      <LinearGradient colors={['#FF3D00', '#ff8d02']} style={estilos.linearGradient}>

        {/* container que guarda os botoes e inputs */}
        <View style={estilos.view2}>

          {/* div dos botoes cadastrar e login */}
          <View style={estilos.estiloLogeCad}>

            {/* botao login */}
            <TouchableOpacity

              style={estilos.botaoLogeCad1}>


              <Text style={estilos.textobotLeC}>
                Login
              </Text>

            </TouchableOpacity>



            {/* botaol cadastrar */}
            <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}
              style={estilos.botaoLogeCad2}>
              <Text style={estilos.textobotLeC}>
                Cadastrar
              </Text>
            </TouchableOpacity>

          </View>

          {/* input  usuario */}
          <Text style={estilos.texto}>
            Usuário:
          </Text>
          <TextInput
            //Estou atribuindo a const login tudo que for digitado nesse input e a var setLogin recebe esse mesmo valor 
            value={login}
            onChangeText={(text) => setLogin(text)}
            style={estilos.input} />
          
          <View>
          <Text style={estilos.alerta}>
            {isEmptyLogin == true ? "Campo Vazio" : ""}
          </Text>

          </View>
          

          {/* Campo senha */}
          <Text style={estilos.texto} >
            Senha:
          </Text>


          <TextInput 
          value={senha}
          onChangeText={(text) => setSenha(text)}
          style={estilos.input} 
          secureTextEntry={true} 
          />

         <View>
         <Text style={estilos.alerta}>
            {isEmptySenha == true ? "Campo Vazio" : ""}
          </Text>
          </View>
          


          {/* botao entrar */}
          <TouchableOpacity 
          
         onPress={fnValidar}
         // onPress={(fnValidar) => navigation.navigate('Receitas')}
          style={estilos.button}>
            <Text style={estilos.textobotao} >
              ENTRAR
            </Text>
          </TouchableOpacity>
        </View>

      </LinearGradient>

    </View>
  );
}




