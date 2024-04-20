import { StyleSheet} from 'react-native';

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
  
    //botao laranja entrar
    button: {
  
      backgroundColor: "#FF3D00",
      paddingHorizontal: 100,
      borderRadius: 35,
      height: 80,
      alignContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      marginTop: 205,
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
      height: 52,
      width: '50%',
      alignContent: 'center',
      borderBottomWidth: 6,
      borderRightWidth: 6,
      borderColor: 'white',
    },
    //estilo botao cadastrar
    botaoLogeCad2: {
      backgroundColor: 'transparent',
      height: 52,
      width: '50%',
      alignContent: 'center',
  
  
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
    alerta:{
      fontFamily: 'Raleway-VariableFont',
      marginTop: -18,
      color: "white",
      fontSize: 12,
      fontWeight: '600',
      
    },
  
  });

  export default estilos