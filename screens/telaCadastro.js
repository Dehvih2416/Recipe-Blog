
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import google from './src/img/logoGoogle.png';
import facebook from './src/img/logoFacebook.png';
import LinearGradient from 'react-native-web-linear-gradient';
import { useFonts } from 'expo-font';





export default function App() {
  //Importador de fontes
  const [] = useFonts({ 'Raleway-VariableFont': require('./assets/fonts/Raleway-VariableFont_wght.ttf') });

  
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
            <TouchableOpacity
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

          <Text style={estilos.alerta}>
            {isEmptyLogin == true ? "Campo Vazio" : ""}
          </Text>


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
          <Text style={estilos.alerta}>
            {isEmptyEmail == true ? "Campo Vazio" : ""}
          </Text>

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

          <Text style={estilos.alerta}>
            {isEmptySenha == true ? "Campo Vazio" : ""}
          </Text>


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

const estilos = StyleSheet.create({
  //div pai de todas
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4
  },
  //background gradiente
  linearGradient: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',

  },
  //config caixa input
  input: {
    borderWidth: 1,
    paddingHorizontal: 20,
    width: "100%",
    backgroundColor: 'white',
    borderRadius: 30,
    borderColor: 'white',
    height: 50,
    marginBottom: 18,

    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.3,
    elevation: 6,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 5 },
    shadowColor: 'black',
  },

  //botao laranja cadastre-se
  button: {

    backgroundColor: "#FF3D00",
    paddingHorizontal: 100,
    borderRadius: 35,
    height: 80,
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',

    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.3,
    elevation: 6,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 5 },
    shadowColor: 'black',
  },

  //texto do botao laranja
  textobotao: {
    color: 'white',
    fontFamily: 'Raleway-VariableFont',
    fontSize: 24,
    fontWeight: '800',
    alignContent: 'center',
    height: 80,
  },
  //texto acima do input
  texto: {
    color: 'white',
    marginRight: 'auto',
    gap: 2,
    fontFamily: 'Raleway-VariableFont',
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: 1,

  },
  //div que leva todos os elementos da tela
  view2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    width: '80%'

  },
  //div dos botoes cadastrar e login
  estiloLogeCad: {
    // deixa os botoes na horizontal
    flexDirection: 'row',
    height: '15%',
    width: '100%',
    marginBottom: 30,
    alignContent: 'center',
    alignItems: 'center',
  },
  //estilo botao login
  botaoLogeCad1: {
    backgroundColor: 'tranparent',
    height: 50,
    width: '50%',
    alignContent: 'center',
    borderColor: 'white',

  },
  //estilo botao cadastrar
  botaoLogeCad2: {
    backgroundColor: 'tranparent',
    height: 52,
    width: '50%',
    alignContent: 'center',
    borderBottomWidth: 6,
    borderLeftWidth: 6,
    borderColor: 'white',

  },
  //texto login e cadastrar
  textobotLeC: {
    alignContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    height: 52,
    fontFamily: 'Raleway-VariableFont',
    fontSize: 24,
    fontWeight: '800',
    color: 'white',

  },

  // div botoes facebook e gmail
  viewFaceeGm: {
    flexDirection: 'row',
    height: '8%',
    width: '100%',
    alignContent: 'center',
    alignItems: 'center',

    paddingEnd: 49,
    paddingStart: 49,
  },
  //config botao face e google
  botaoFaceeGm: {
    backgroundColor: 'tranparent',
    height: 40,
    width: '50%',
    alignContent: 'center',
    borderColor: 'white',

  },
  //config de img face e google
  img: {
    width: "35%",
    height: "50%",
    padding: 30,
    resizeMode: 'stretch',

  },
  //tag de texto que esta por fora da img usei pra centralizar
  imgtexto: {
    alignContent: 'center',
    textAlign: 'center',
    height: 40,
  },
  alerta:
  {
    fontFamily: 'Raleway-VariableFont',
    marginTop: -18,
    color: "white",
    fontSize: 12,
    fontWeight: '600',
    
  },
});


