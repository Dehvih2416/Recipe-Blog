
import { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import google from '/src/img/logoGoogle.png';
import facebook from '/src/img/logoFacebook.png';
import LinearGradient from 'react-native-web-linear-gradient';
import { useFonts } from 'expo-font';
import  estilos from './style.js';




export default function Cadastro({navigation}) {
  //Importador de fontes

  const [] = useFonts({ 'Raleway-VariableFont': require('/assets/fonts/Raleway-VariableFont_wght.ttf') });

  
  //vou usar email 
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isEmptyLogin, setIsEmptyLogin] = useState(false);
  const [isEmptyEmail, setIsEmptyEmail] = useState(false);
  const [isEmptySenha, setIsEmptySenha] = useState(false);


  function fnValidar() {
    let sEmail = email;
    let sLogin = login;
    let sSenha = senha;

    if (sLogin == '') {
      setIsEmptyLogin(true);
    } else {
      setIsEmptyLogin(false);
    }

    if (sEmail == '') {
      setIsEmptyEmail(true);
    } else {
      setIsEmptyEmail(false);
    }

    if (sSenha == '') {
      setIsEmptySenha(true);
    } else {
      setIsEmptySenha(false);
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
            

            <TouchableOpacity onPress={() => navigation.navigate('Login')}
            
              style={estilos.botaoLogeCad1}>
              <Text style={estilos.textobotLeC}>
                Login
              </Text>
            </TouchableOpacity>
            {/* botao cadastrar */}
            <TouchableOpacity
              style={estilos.botaoLogeCad2}>
              <Text style={estilos.textobotLeC}>
                Cadastrar
              </Text>
            </TouchableOpacity>

          </View>


          {/* input  email */}
          <Text style={estilos.texto}>
            Usuário:
          </Text>
          <TextInput
            value={login}
            onChangeText={(text) => setLogin(text)}
            style={estilos.input} 
            />


          <View>

          <Text style={estilos.alerta}>
            {isEmptyLogin == true ? "Campo Vazio" : ""}
          </Text>

          </View>
          


          {/* input email */}
          <Text style={estilos.texto}>
            Email:
          </Text>

          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}

            style={estilos.input}
            autoComplete='email'
            keyboardType='email-address'
          />
          <View> 
          <Text style={estilos.alerta}>
            {isEmptyEmail == true ? "Campo Vazio" : ""}
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
            keyboardType="password"
          />

          <View>
          <Text style={estilos.alerta}>
            {isEmptySenha == true ? "Campo Vazio" : ""}
          </Text>
          </View>
          


          {/* div dos botoes facebook e google */}
          <View style={estilos.viewFaceeGm}>

            {/* botao google */}
            <TouchableOpacity
              style={estilos.botaoFaceeGm}>
              <Text style={estilos.imgtexto}>
                <Image style={estilos.img} source={google} />
              </Text>
            </TouchableOpacity>

            {/* botao facebook */}
            <TouchableOpacity
              style={estilos.botaoFaceeGm}>
              <Text style={estilos.imgtexto}>
                <Image style={estilos.img} source={facebook} />
              </Text>
            </TouchableOpacity>

          </View>

          {/* botao entrar */}
          <TouchableOpacity

            onPress={fnValidar}
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




